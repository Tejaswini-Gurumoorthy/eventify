const express= require('express');
const bodyParser= require('body-parser');
const {graphqlHTTP}= require('express-graphql'); //middleware function
const {buildSchema}= require('graphql')
const app= express();
const mongoose= require('mongoose');
const nodemailer = require('nodemailer');
const Event= require('./models/event');

app.use((req, res, next)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST,GET,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    if(req.method==='OPTIONS'){
        return res.sendStatus(200);
        }
        next();
        });

app.use(bodyParser.json());
transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
        user: process.env.EMAIL_ID,
        pass: process.env.EMAIL_PASSWORD
    }
});
app.use('/graphql',graphqlHTTP({
    schema: buildSchema(`

        type Rsvp{
            _id: ID!
            name: String!
            email: String!
            status: Int!
            walletAddress: String
        }

        input RsvpInput{
            name: String!
            email: String!
            status: Int!
            walletAddress: String
        }


        type Event{
            _id: ID!
            title: String!
            description: String!
            price: Float!
            creator: String!
            rsvp: [Rsvp!]
        }

        input EventInput{

            title: String!
            description: String!
            price: Float!
            creator: String!
            rsvp: [RsvpInput]!
        }

        type RootQuery{
            events: [Event]
            eventFromId(id: String!, rsvpid: String!): Event
        }

        type RootMutation{
            createEvent(event: EventInput): Event
            updateRsvpStatus(eventId: String!, rsvpId: String!, status: Int!): Event
        }

        schema{
            query: RootQuery
            mutation: RootMutation
        }
    `), //endpoints
    rootValue: {
        events: async()=>{
            console.log("events");
           return Event.find().then(events=>{
                return events.map(event=>{
                    return {...event._doc, _id: event._doc._id.toString()};
                });
            }).catch(err=>{
                console.log(err);
                throw err;
            });
        },

        eventFromId: async(args)=>{
            const eventId= new mongoose.Types.ObjectId(args.id);
            const rsvpIdObj= new mongoose.Types.ObjectId(args.rsvpid);
            const event = await Event.findById(eventId);
            if (!event) {
              throw new Error('Event not found!');
            }
            const rsvp = event.rsvp.id(rsvpIdObj);
            if (!rsvp) {
              throw new Error('RSVP not found!');
            }
            return event;
            // return Event.findById(eventId).then(event=>{
            //     return {...event._doc, _id: event._doc._id.toString()};
            // }).catch(err=>{ 
            //     console.log(err);
            //     throw err;
            // });

        },


        createEvent: async (args)=>{
            rsvpObjects= args.event.rsvp.map(({name, email,status, walletAddress})=>({name, email,status, walletAddress}));
            const event= new Event({
                title: args.event.title,
                description: args.event.description,
                price: +args.event.price,
                creator: args.event.creator,
                rsvp: rsvpObjects

            });
            try {
                const result_1 = await event.save();
                result_1.rsvp.forEach(async (rsvp) => {
                    try {
                        const link = `http://localhost:5173/rsvp/${result_1._id}/user/${rsvp._id}`;
                        const mailOptions = {
                            from: process.env.EMAIL_USER,
                            to: rsvp.email,
                            subject: `RSVP Confirmation for ${result_1.title}`,
                            html: `<p>Dear ${rsvp.name},</p><p>Thank you for your RSVP to ${result_1.title}!</p><p>Please click <a href="${link}">here</a> to confirm your RSVP.</p>`,
                        };
                        await transporter.sendMail(mailOptions);
                        console.log(`Email sent to ${rsvp.email}!`);
                    } catch (err) {
                        console.error(`Error sending email to ${rsvp.email}: ${err}`);
                    }
                });
                return { ...result_1._doc, _id: result_1._doc._id.toString() };
            } catch (err_1) {
                console.log(err_1);
                throw err_1;
            }
        },

        updateRsvpStatus: async (args) => {
            const eventIdObj= new mongoose.Types.ObjectId(args.eventId);
            const rsvpIdObj= new mongoose.Types.ObjectId(args.rsvpId);

            const event = await Event.findById(eventIdObj);
            if (!event) {
              throw new Error('Event not found!');
            }
            const rsvp = event.rsvp.id(rsvpIdObj);
            if (!rsvp) {
              throw new Error('RSVP not found!');
            }
            rsvp.status = args.status;
            await event.save();
            return event;
          }
  
    } ,//function for those endpoints
    graphiql: true
}));
mongoose.connect(`mongodb+srv://tejaswinigurumoorthy:${process.env.MONGO_PASSWORD}@cluster0.csgrxul.mongodb.net/?retryWrites=true&w=majority`).then(()=>{
    app.listen(3000);
}).catch(err=>{
    console.log(err);
}
);

//query to send mail
// mutation {
//     createEvent(event: {
//       title: "My Awesome Event",
//       description: "An amazing event you don't want to miss",
//       price: 19.99,
//       creator: "XYZ",
//       rsvp: [
//         { name: "Tejaswini", email: "teju.g.moorthy@gmail.com", status: 1, walletAddress: "nfejnnvoeb"},
//       ]
//     }) {
//       _id
//       title
//       description
//       price
//       creator
//       rsvp {
//         name
//         email
//         status
//       }
//     }
//   }
  
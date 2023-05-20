const mongoose = require('mongoose');

const Schema= mongoose.Schema;


const eventSchema= new Schema({
    title: {
        type: String,  
        required: true
    },      
    description: { 
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    creator: {
        type: String,
        required: true
    },
    rsvp: [{
        name:{
            type: String,
            required: true
        },
        email:{
            type: String,
            required: true
        },
        status:{
            type: Number,
            required: true
        },
        walletAddress:{
            type: String,
            required: true
        }
    }]
}); 

module.exports= mongoose.model('Event', eventSchema);
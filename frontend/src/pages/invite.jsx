import React, { useEffect, useState } from "react";
import "./invite.css";
import { useContext } from "react";
import { MyContext } from "../MyContext";
import { gql } from "@apollo/client";
import { useMutation } from "@apollo/client";

function InvitePage() {
  const { eventData, setEventData } = useContext(MyContext);
  
  const [dataObj, setDataObj] = useState({});

  const CREATE_EVENT = gql`
    mutation createEvent($event: EventInput) {
      createEvent(event: $event) {
        _id
        title
        description
        price
        rsvp {
          _id
          name
          email
          walletAddress
          status
        }
      }
    }
  `;
  const [createEventfromHook, { data, loading, error }] = useMutation(CREATE_EVENT);


  async function createEvent() {
    try {
      await createEventfromHook({
        variables: {
          event: {
            title: eventData.title,
            description: eventData.description,
            price: eventData.price,
            creator: eventData.creator,
            rsvp: eventData.rsvp.map((rsvp) => ({
              name: rsvp.name,
              email: rsvp.email,
              status: rsvp.status,
              walletAddress: rsvp.walletAddress,
            })),
          },
        },
      });
      console.log(data);
    
    } catch (err) {
      console.log(err);
    }
  }

  function addEvents(event) {
    event.preventDefault();
    setEventData({ ...eventData, rsvp: [...eventData.rsvp, dataObj] });
    console.log(eventData);
  }

  return (
    <div>
      <div className="navbar-container">
        <h1 className="logo">eventify.</h1>
      </div>

      <form className="form" onSubmit={addEvents}>
        <label className="name1">Name:</label>
        <input
          onChange={(event) => {
            setDataObj({ ...dataObj, name: event.target.value, status: 0 });
          }}
          className="n-input"
          type="text"
          id="name"
          name="name"
          required
        />
        <br />

        <label className="email1">Email:</label>
        <input
          onChange={(event) => setDataObj({ ...dataObj, email: event.target.value })}
          className="e-input"
          type="email"
          id="email"
          name="email"
          required
        />
        <br />

        <label className="wallet">Wallet:</label>
        <input
          onChange={(event) => setDataObj({ ...dataObj, walletAddress: event.target.value })}
          className="w-input"
          type="text"
          id="wallet"
          name="wallet"
          required
        />
        <br />

        <input className="submit-b" type="submit" value="Send Invite" />
      </form>

      <button className="create-b" onClick={createEvent}>Create Event</button>
    </div>
  );
}

export default InvitePage;
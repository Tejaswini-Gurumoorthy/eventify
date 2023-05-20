import React, { useContext } from "react";
import { Link, Navigate,useNavigate } from "react-router-dom";
import "./create.css";
import { useState } from "react";
import { MyContext } from "../MyContext";

function CreatePage() {
    // const [Creator, setCreator] = useState("");
    // const [EventName, setEventName] = useState("");
    // const [EventDate, setEventDate] = useState("");
    // const [TicketPrice, setTicketPrice] = useState();
    // const [EventDescription, setEventDescription] = useState("");
    const {ethereum}= window;
    const[address, setAddress]= useState('');   
    const {eventData, setEventData} = useContext(MyContext);
    const navigate= useNavigate();

    const WalletConnect= async()=>
    {
      if(!ethereum) return alert("Please install metamask!");
      await ethereum.request({
        method: 'eth_requestAccounts'
      }).then(async(accounts)=>{
        setAddress(accounts[0]);
       
      }).catch((err)=>{
        alert('Connection failed!');
      });      
    }

    async function onNext(event){
        event.preventDefault();
        try
        {
          setRsvp().then(() => {
          const lnk= "/main";
          navigate(lnk);
          console.log('navigated!');
          }).catch((err) => {
            console.log(err);
          });

        }
        catch(err){
          console.log('error', err);
        }
        
    }

    async function setRsvp()
    {
      try{
        setEventData({...eventData, rsvp: []});
      }
      catch
      {
        console.log("error");
      }
    }

  return (
    <div>
      <div className="navbar-container">
        <h1 className="logo">eventify.</h1>
      </div>
      <div className="create">
        <h2 className="create-subtitle">Create your event</h2>
        <button className="create-button" onClick={async()=>{
          if(!ethereum) return alert("Please install metamask!");
          await ethereum.request({
            method: 'eth_requestAccounts'
          }).then(async(accounts)=>{
            setAddress(accounts[0]);
           
          }).catch((err)=>{
            alert('Connection failed!');
          });  
        }}>Connect Wallet</button>
      </div>
      <div className="create-form">
        <form onSubmit={onNext}>
          <label className="create-label" htmlFor="event-creator">
            Creator:
          </label>
          <input onChange={(event) => setEventData({...eventData,creator: event.target.value})}
            className="create-input"
            type="text"
            id="creator-name"
            name="creator-name"
            required
          />
          <br />
          <br />
          <label className="create-label" htmlFor="event-name">
            Event Name:
          </label>
          <input onChange={(event) => setEventData({...eventData,title: event.target.value})}
            className="create-input"
            type="text"
            id="event-name"
            name="event-name"
            required
          />
          <br />
          <br />
          <label className="create-label" htmlFor="event-date">
            Event Date:
          </label>
          <input onChange={(event) => setEventData({...eventData,date: event.target.value})}
            className="create-input"
            type="date"
            id="event-date"
            name="event-date"
            required
          />
          <br />
          <br />
          <label className="create-label" htmlFor="event-location">
            Ticket Price:
          </label>
          <input onChange={(event) => setEventData({...eventData,price: event.target.value})}
            className="create-input"
            type="text"
            id="event-price"
            name="event-price"
            required
          />
          <br />
          <br />
          <label className="create-label" htmlFor="event-description">
            Event Description:
          </label>
          <input onChange={(event) => setEventData({...eventData,description: event.target.value})}
            className="create-input"
            type="text"
            id="event-description"
            name="event-description"
            required
          />
          <br />
          <br />

            <input type="submit" value="Next" className="create-button" />
        </form>
      </div>
    </div>
  );
}

export default CreatePage;
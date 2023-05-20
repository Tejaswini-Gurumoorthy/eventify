import React from "react";
import { Link, useParams } from "react-router-dom";
import "./main.css";
import pic1 from "../images/ven6.jpeg";
import pic2 from "../images/food.jpeg";
import pic3 from "../images/invites.jpeg";


function MainPage() {
  const data= useParams();
  return (
    <div>
      <div className="navbar-container">
        <div id="carouselExample" className="carousel slide">
          <div className="carousel-inner">
            <div className="card" style={{ width: "18rem" }}>
              <img src={pic1} className="card-img-top" alt="..."></img>
              <div className="card-body">
                <h5 className="card-title">Pick Venue</h5>
                <p className="card-text">
                  Set the tone of your event right by picking the best venue
                  from our handpicked choices
                </p>
                <Link to="/venue" style={{ textDecoration: "none" }}>
                  <button className="b1">
                    <a href="#" className="btn btn-primary"></a>
                    See Options
                  </button>
                </Link>
              </div>
            </div>

            <div className="card" style={{ width: "18rem" }}>
              <img src={pic2} className="card-img-top" alt="..."></img>
              <div className="card-body">
                <h5 className="card-title">Pick Cuisine</h5>
                <p className="card-text">
                  Choose from popular cuisines to make sure your guests have a
                  meal they'll always remember
                </p>
                <Link to="/cuisine" style={{ textDecoration: "none" }}>
                  <button className="b2">
                    <a href="#" className="btn btn-primary"></a>
                    See Options
                  </button>
                </Link>
              </div>
            </div>

            <div className="card" style={{ width: "18rem" }}>
              <img src={pic3} className="card-img-top" alt="..."></img>
              <div className="card-body">
                <h5 className="card-title">Invite Guests</h5>
                <p className="card-text">
                  Add invitees to your RSVP without the hassle of having to send
                  and manage invite responses
                </p>
                <Link to="/invite" style={{ textDecoration: "none" }}>
                  <button className="b3">
                    <a href="#" className="btn btn-primary"></a>
                    Invite
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;

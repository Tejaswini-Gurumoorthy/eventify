import React from "react";
import "./venue.css";
import v1 from "../images/ven1.jpeg";
import v2 from "../images/ven2.png";
import v3 from "../images/ven3.jpeg";
import v4 from "../images/ven4.jpeg";
import v5 from "../images/ven5.jpeg";
import v6 from "../images/ven6.jpeg";

function VenuePage() {
  return (
    <div>
      <div className="navbar-container">
        <div id="carouselExample" className="carousel slide">
          <div className="carousel-inner">
            <div className="card" style={{ width: "18rem" }}>
              <img src={v1} className="card-img-top" alt="..."></img>
              <div className="card-body">
                <h5 className="card-title">Shangrila</h5>
                <p className="card-text">
                  The cozy and intimate venue is perfect for small gatherings,
                  with warm lighting and comfortable seating
                </p>
                <button className="b1">
                  <a href="#" className="btn btn-primary"></a>
                  Select
                </button>
              </div>
            </div>

            <div className="card" style={{ width: "18rem" }}>
              <img src={v2} className="card-img-top" alt="..."></img>
              <div className="card-body">
                <h5 className="card-title">Unicornia</h5>
                <p className="card-text">
                  This modern venue features sleek design and state-of-the-art
                  sound system, ideal for music and entertainment events
                </p>
                <button className="b2">
                  <a href="#" className="btn btn-primary"></a>
                  Select
                </button>
              </div>
            </div>

            <div className="card" style={{ width: "18rem" }}>
              <img src={v3} className="card-img-top" alt="..."></img>
              <div className="card-body">
                <h5 className="card-title">Radisson Suites</h5>
                <p className="card-text">
                  Nestled in the heart of downtown, this historic venue boasts
                  stunning architecture and a spacious layout, perfect for large
                  events
                </p>
                <button className="b3">
                  <a href="#" className="btn btn-primary"></a>
                  Select
                </button>
              </div>
            </div>

            <div className="card" style={{ width: "18rem" }}>
              <img src={v4} className="card-img-top" alt="..."></img>
              <div className="card-body">
                <h5 className="card-title">Jelly Beans</h5>
                <p className="card-text">
                  This outdoor venue offers breathtaking views of the city
                  skyline, perfect for romantic dinners or cocktail parties
                </p>
                <button className="b4">
                  <a href="#" className="btn btn-primary"></a>
                  Select
                </button>
              </div>
            </div>

            <div className="card" style={{ width: "18rem" }}>
              <img src={v5} className="card-img-top" alt="..."></img>
              <div className="card-body">
                <h5 className="card-title">Clandestine</h5>
                <p className="card-text">
                  With its rustic charm and natural setting, this venue is ideal
                  for outdoor events- picnics, barbecues, and team-building
                  activities
                </p>
                <button className="b5">
                  <a href="#" className="btn btn-primary"></a>
                  Select
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VenuePage;
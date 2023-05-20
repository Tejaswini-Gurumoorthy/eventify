import React from "react";
import { Link } from "react-router-dom";
import "./home.css";
import Typewriter from "typewriter-effect";

function HomePage() {
  return (
    <div>
      {/* <div className="navbar-container">
        <h1 className="logo1">eventify.</h1>
      </div> */}
      <h1 className="Main_page">
        {" "}
        <div className="heading_mainn">
          {" "}
          <Typewriter
            onInit={(typewriter) => {
              typewriter.typeString("eventify.").pauseFor(1000).start();
            }}
          />
        </div>
      </h1>
      <div className="home">
        <h2 className="home-subtitle">
          simplify and enjoy your event to the fullest
        </h2>
      </div>
      <Link to="/login" style={{ textDecoration: "none" }}>
        <button className="home-button">
          <a href="#" className="btn btn-primary"></a>
          Get Started
        </button>
      </Link>
    </div>
  );
}

export default HomePage;
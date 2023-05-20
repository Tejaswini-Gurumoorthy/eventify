import React from "react";
import "./cuisine.css";
import v1 from "../images/cui1.jpeg";
import v2 from "../images/cui2.jpeg";
import v3 from "../images/cui3.jpeg";
import v4 from "../images/cui4.jpeg";
import v5 from "../images/cui5.jpeg";

function Cuisine() {
  return (
    <div>
      <div className="navbar-container">
        <div id="carouselExample" className="carousel slide">
          <div className="carousel-inner">
            <div className="card" style={{ width: "18rem" }}>
              <img src={v1} className="card-img-top" alt="..."></img>
              <div className="card-body">
                <h5 className="card-title">Indian</h5>
                <p className="card-text">
                  Indian cuisine is renowned for its bold and complex flavors,
                  spices, and aromas
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
                <h5 className="card-title">Oriental</h5>
                <p className="card-text">
                  It is characterized by its emphasis on fresh ingredients,
                  delicate flavors, and artistic presentation
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
                <h5 className="card-title">Italian</h5>
                <p className="card-text">
                  Italian cuisine is known for its fresh and flavorful
                  ingredients and regional culinary specialties.
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
                <h5 className="card-title">Vegan</h5>
                <p className="card-text">
                  Vegan food is plant-based and excludes all animal products,
                  offering delicious and healthy alternatives
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
                <h5 className="card-title">Cocktails</h5>
                <p className="card-text">
                  Cocktails are mixed drinks containing two or more ingredients,
                  typically including alcohol and served chilled.
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

export default Cuisine;
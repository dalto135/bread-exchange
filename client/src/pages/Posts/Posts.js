import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./style.css";
import { Link } from "react-router-dom";
import Input from "../../components/Input/input"
import Button from "../../components/Button/Button"
import SinglePost from "../Singlepost/Singlepost";
import CreatePost from "../CreatePost/CreatePost";
import { HashRouter as Router, Route } from "react-router-dom";

function Posts() {
  return (
    <div>
      {/* Heading */}
      <div id="find-food-header">
        <h1>Find Food</h1>
        <p>
          Browse listings from our food partners to find foods that convenient
          for you!{" "}
        </p>
        
      </div>



      <Link to="/CreatePost">Post Food</Link>
      <br></br>
      <Link to="/singlepost">Food</Link><br></br>
      <Button title="Post an Item" />
      <div id="gray-panel">
        <div id="card-search">
          <p>Search for an item.</p>
          {/* Input component */}
        <Input/>
        </div>
        <div className="card-container">
          {/* Cards */}
          <div className="card">
            <img className="card-img" src="/chart.jpg" alt="Avatar"></img>
            <div className="container">
              <h4>
                <b>Panera Bread</b>
              </h4>
              <h6>Pickup Location Here</h6>
              <h6>Posted 6/24/21</h6>
              <h6>Exp: 6/31/21</h6>
              <h6>Contact: John Smith - jsmith@email.com</h6>
              <p>
                <ul id="card-list">
                  <li>2 loaves of bread</li>
                  <li>3 apples</li>
                </ul>
              </p>
              <Button title="View" />
            </div>
          </div>

          <div className="card">
            <img className="card-img" src="/chart.jpg" alt="Avatar"></img>
            <div className="container">
              <h4>
                <b>Starbucks</b>
              </h4>
              <h6>Pickup Location Here</h6>
              <h6>Posted 6/26/21</h6>
              <h6>Exp: 6/31/21</h6>
              <h6>Contact: John Smith - jsmith@email.com</h6>
              <p>
                <ul>
                  <li>5 cookies</li>
                  <li>1 gallon milk</li>
                </ul>
              </p>
              <Button title="View" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Posts;

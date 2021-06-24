import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./style.css";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import SinglePost from "../Singlepost/Singlepost";
import CreatePost from "../CreatePost/CreatePost";
import { HashRouter as Router, Route } from "react-router-dom";

function Posts() {
  return (
    <div>
      <h1>Find Food Here</h1>
      <Link to="/CreatePost">Post Food</Link><br></br>
      <Link to="/singlepost">Food</Link>
      {/* <Router>
        <Route exact path='/singlepost' component={SinglePost}/>
      </Router> */}
      <div className="card-container">
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
              <ul>
                <li>2 loaves of bread</li>
                <li>3 apples</li>
              </ul>
            </p>
            <button>View</button>
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
            <button>View</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Posts;

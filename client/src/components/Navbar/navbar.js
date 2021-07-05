import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function navBar() {
  return (
    <div>
      <div id="navbar">
        <img id="be-logo" src="/BElogo.jpg"></img>
        <div id="nav-button-container">
          <ul id="nav-list">
            {/* Main Nav Buttons */}
            <li className="nav-item"><i className="fas fa-home nav-icon"></i><Link id="link-button" to="/">Home</Link></li>
            <li className="nav-item"><i className="fas fa-sign-in-alt nav-icon"></i><Link id="link-button" to="/login">Login</Link></li>
            <li className="nav-item"><i className="fas fa-bread-slice nav-icon"></i><Link id="link-button" to="/Posts">Posts</Link></li>
            <li className="nav-item"><i className="fas fa-user nav-icon"></i><Link id="link-button" to="/UserPage">My Userpage</Link></li>
          </ul>
        </div>
        {/* Cart and Logout Buttons */}
        <div id="cart-and-logout">
          <ul id="nav-list">
            <li className="nav-item"><i className="fas fa-shopping-cart nav-icon"></i><Link id="link-button" to="/"></Link>Reservations</li>
            <li className="nav-item"><Link id="link-button" to="/">Logout</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default navBar;

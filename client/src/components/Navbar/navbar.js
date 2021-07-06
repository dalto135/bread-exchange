import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function navBar() {
  return (
    <div>
      <div id="navbar">
        {/* Logo */}
        <div id="logo-div">
          <img id="be-logo" src="/BElogo.jpg"></img>
        </div>
        {/* Buttons */}
        <div id="buttons-div">
          <ul id="nav-buttons-list">
            <li className="list-item"><i className="fas fa-home nav-icon"></i><Link className="link-button" to="/">Home</Link></li>
            <li className="list-item"><i className="fas fa-sign-in-alt nav-icon"></i><Link className="link-button" to="/login">Login</Link></li>
            <li className="list-item"><i className="fas fa-bread-slice nav-icon"></i><Link className="link-button" to="/Posts">Posts</Link></li>
            <li className="list-item"><i className="fas fa-user nav-icon"></i><Link className="link-button" to="/UserPage">My Userpage</Link></li>
          </ul>
        </div>
        {/* Cart and Logout */}
        <div id="cart-and-logout-div">
          <ul id="nav-buttons-list">
            {/* <li className="list-item"><i className="fas fa-shopping-cart nav-icon"></i><Link className="link-button" to="/">Reservations</Link></li> */}
            <li className="list-item"><Link className="link-button" to="/">Logout</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default navBar;

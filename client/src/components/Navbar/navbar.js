import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function navBar() {
  return (
    <div>
      <div id="navbar">
      <img id="be-logo" src="/BElogo.jpg"></img>
      <div id="test">
        <ul id="nav-list">
        {/* <img id="be-logo" src="/BElogo.jpg"></img> */}
          <li><i className="fas fa-home"></i><Link id="link-button" to="/">Home</Link></li>
          <li><i class="fas fa-sign-in-alt"></i><Link id="link-button" to="/login">Login</Link></li>
          <li><i class="fas fa-bread-slice"></i><Link id="link-button" to="/Posts">Posts</Link></li>
          <li><i class="fas fa-user"></i><Link id="link-button" to="/UserPage">My Userpage</Link></li>
        </ul>
      </div>
      </div>
    </div>
  );
}

export default navBar;

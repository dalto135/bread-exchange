import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { UserContext } from '../../utils/user-context';
import API from '../../utils/API';



function NavBar() {

  const userData = useContext(UserContext);
  console.log('userData');
  console.log(userData);

  function logOut() {
    API.logout()
    .then(user => {
      console.log(user);
      document.location.replace('/');
      // setUserData(user);
    })
    .catch(err => console.log(err.message));
  }

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
            
            <li className="list-item"><i className="fas fa-bread-slice nav-icon"></i><Link className="link-button" to="/Posts">Posts</Link></li>
            {userData.data
            && <li className="list-item"><i className="fas fa-user nav-icon"></i><Link className="link-button" to="/UserPage">My Profile</Link></li>}
            {userData.data
             ? <li className="list-item"><i className="fas fa-sign-in-alt nav-icon"></i><Link className="link-button" onClick={logOut}>Logout</Link></li>
            // ? <li className="list-item"><button className="link-button" onClick={logOut}>Logout</button></li>
            : <li className="list-item"><i className="fas fa-sign-in-alt nav-icon"></i><Link className="link-button" to="/login">Login</Link></li>}
          </ul>
        </div>
        {/* Cart and Logout */}
        <div id="cart-and-logout-div">
          <ul id="nav-buttons-list">
            {/* <li className="list-item"><i className="fas fa-shopping-cart nav-icon"></i><Link className="link-button" to="/">Reservations</Link></li> */}
            {/* <li className="list-item"><Link className="link-button" to="/">Logout</Link></li> */}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NavBar;

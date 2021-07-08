import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./signup.css";
import { HashRouter as Router, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import API from '../../utils/API';

function Signup() {
  const [newUser, setNewUser] = useState({
    _id: Math.random(),
    // firstName: '',
    // lastName: '',
    // username: '',
    // password: '',
    // email: '',
  })

  function handleInputChange(event) {
    const { name, value } = event.target;
    setNewUser({ ...newUser, [name]: value });
    console.log(name + ': ' + value);
    console.log('newUser: ' + JSON.stringify(newUser))
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    console.log('submitting new user');
    if (newUser.firstName && newUser.email) {
      API.createAccount(
      //   {
      //   name: formObject.name,
      //   description: formObject.description,
      //   location: formObject.location,
      //   quantity: formObject.quantity,
      //   user_id: formObject.user_id,
      // }
      newUser
      )
        .then(() => {
          setNewUser({
            name: "",
            description: "",
            location: "",
            quantity: "",
            user_id: "",
          });
          document.location.replace('/');
        }
        )
        .catch((err) => console.log(err));
    }
  }


  return (
    <div className="signup-background">
      <div className="white-panel">
        <h1 className="signup-header">Sign Up</h1>
        {/* First Name Input */}
        <form className="input-form">
          <div class="form-group">
            <label className="signup-label" for="exampleInputEmail1">Create First Name:</label>
            <input onChange={handleInputChange} className="input-field" type="email" name='firstName' class="form-control" id="username-input" aria-describedby="emailHelp" placeholder="First Name" size="30"></input>{" "}
          </div>
       
        {/* Last Name Input */}
        {/* <form className="lastname-input-form"> */}
          <div class="form-group">
            <label className="signup-label" for="exampleInputEmail1">Create Last Name:</label>
            <input onChange={handleInputChange} className="input-field" type="email" name='lastName' class="form-control" id="username-input" aria-describedby="emailHelp" placeholder="Last Name" size="30"></input>{" "}
          </div>
        {/* </form> */}
        {/* Username Input */}
        {/* <form className="username-input-form"> */}
          <div class="form-group">
            <label className="signup-label" for="exampleInputEmail1">Create Username:</label>
            <input onChange={handleInputChange} className="input-field" type="email" name='username' class="form-control" id="username-input" aria-describedby="emailHelp" placeholder="New username" size="30"></input>{" "}
          </div>
        {/* </form> */}
        {/* Password Input */}
        {/* <form className="password-input-form"> */}
          <div class="form-group">
            <label className="signup-label" for="exampleInputEmail1">Create Password:</label>
            <input onChange={handleInputChange} className="input-field" type="email" name='password' class="form-control" id="password-input" aria-describedby="emailHelp" placeholder="New password" size="30"></input>{" "}
          </div>
        {/* </form> */}
        {/* Email Input */}
        {/* <form className="email-input-form"> */}
          <div class="form-group">
            <label className="signup-label" for="exampleInputEmail1">Enter Email:</label>
            <input onChange={handleInputChange} className="input-field" type="email" name='email' class="form-control" id="email-input" aria-describedby="emailHelp" placeholder="Input email for signup" size="30"></input>{" "}
          </div>
        {/* </form> */}
        {/* Signup Button */}
        <button className="signup-button" type="button" onClick={handleFormSubmit} >Signup</button>
        <p>Already have an account? <Link to= './login'>Log In</Link></p>
        </form>
      </div>
    </div>
  );
}

export default Signup;

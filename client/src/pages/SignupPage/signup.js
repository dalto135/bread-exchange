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

  function loginPlease(loginInfo) {
    API.login(loginInfo)
      .then(res => {
          console.log(res.data);
          // setUserData(res.data);
          document.location.replace('/');
      })
      .catch(err => console.log(err.message));
  }

  const [uniqueUser, setUniqueUser] = useState([]);

  useEffect(() => {
    API.getUserByUsername(newUser)
    .then(res => {
      console.log('user?');
      console.log(res.data);
      setUniqueUser(res.data);
      
      // document.location.replace('/');
  })
  .catch(err => console.log(err.message));

  }, [newUser.username])

  function handleFormSubmit(event) {
    event.preventDefault();
    console.log('submitting new user');
    // if (newUser.firstName && newUser.email) {
      if (!newUser.firstName || !newUser.lastName || !newUser.username || !newUser.password || !newUser.email) {
        alert('Please complete all required fields');
        return;
      }
      if (newUser.password.length < 8) {
        alert('Password must be at least 8 characters in length');
        return;
      }
      if (uniqueUser !== null) {
        alert('Must enter a unique username');
        return;
      }
      
      
      
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
        // .then(() => {
        //   setNewUser({
        //     name: "",
        //     description: "",
        //     location: "",
        //     quantity: "",
        //     user_id: "",
        //   });
          
        // })
        .then(() => {
          
          loginPlease(newUser);
        })
        .catch((err) => console.log(err));
    // }
  }


  return (
    <div className="signup-background">
      <div className="white-panel">
        <h1 className='signup-header'>Create New Account</h1>
        {/* First Name Input */}
        <form>
          <div>
            <label className="signup-label">Enter First Name:</label>
            <input onChange={handleInputChange} className="input-field" type="email" name='firstName' class="form-control" id="username-input" aria-describedby="emailHelp" placeholder="First Name"/>
          </div>
          {/* Last Name Input */}
          <div>
            <label className="signup-label">Enter Last Name:</label>
            <input onChange={handleInputChange} className="input-field" type="email" name='lastName' class="form-control" id="username-input" aria-describedby="emailHelp" placeholder="Last Name"/>
          </div>
          {/* Username Input */}
          <div>
            <label className="signup-label">Create Username:</label>
            <input onChange={handleInputChange} className="input-field" type="email" name='username' class="form-control" id="username-input" aria-describedby="emailHelp" placeholder="New username"/>
          </div>
          {/* Password Input */}
          <div>
            <label className="signup-label">Create Password:</label>
            <input onChange={handleInputChange} className="input-field" type="password" name='password' class="form-control" id="password-input" aria-describedby="emailHelp" placeholder="New password"/>
          </div>
          {/* Email Input */}
          <div>
            <label className="signup-label">Enter Email:</label>
            <input onChange={handleInputChange} className="input-field" type="email" name='email' class="form-control" id="email-input" aria-describedby="emailHelp" placeholder="Input email for signup"/>
          </div>
          {/* Signup Button */}
          <button className='material-button' onClick={handleFormSubmit} >Sign Up</button>
          <p>Already have an account? <Link to= './login'>Log In</Link></p>
        </form>
      </div>
    </div>
  );
}

export default Signup;

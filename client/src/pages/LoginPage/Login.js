import React, { useEffect, useState } from 'react';
import "bootstrap/dist/css/bootstrap.css";
import "./style.css";
import API from '../../utils/API';
import { Link } from "react-router-dom";
import PasswordShowHide from '../../components/PasswordShowHide/PasswordShowHide';

function Login() {

  let username = '';
  let password = '';
  
  function usernameHandler(event) {
    username = event.target.value;
    console.log('email change');    
    setLoginInfo({
      ...loginInfo,
      username
    })
    console.log(username);
  }

  function passwordHandler(event) {
    password = event.target.value;

    setLoginInfo({
      ...loginInfo,
      password
    })
    console.log('password change');
    console.log(password);
  }

  const [userData, setUserData] = useState([]);
  // const [pleaseData, setPleaseData] = useState([]);
  console.log('username');
  console.log(username);

  console.log('password');
  console.log(password);

  // useEffect(() => {
  //   API.login({username, password})
  //     .then(res => {
  //         console.log(res.data);
  //         setUserData(res.data);
  //     })
  //     .catch(err => console.log(err.message));
  // }, [])

  const [loginInfo, setLoginInfo] = useState({});



  function loginPlease() {
    API.login(loginInfo)
      .then(res => {
          console.log(res.data);
          setUserData(res.data);
          document.location.replace('/');
      })
      .catch(err => console.log(err.message));
  }

        console.log(userData);
      
 
      // if (userData !== null) {
      //   if (userData.password !== password) {
      //       console.log('Incorrect username or password');
      //   } else {
      //       alert('Login successful!');
      //       // loginInfo.loggedIn = userData;
      //       // localStorage.setItem('storedLogin', JSON.stringify(userData));
      //       // console.log('loginInfo');
      //       // console.log(loginInfo);
      //       document.location.replace('/#/UserPage');
      //   }
      // } else {
      //     console.log('Incorrect username or password (null)');
      // }
      
   
      // function UseEffectPlease() {
      //   useEffect(() => {
      //     API.login(loginInfo)
      //       .then(res => {
      //           console.log(res.data);
      //           setPleaseData(res.data);
      //       })
      //   })

        
      // }

  return (
    <div className="login-background">
      <div className="white-panel">
        <h1 className="login-header">Login</h1>
        {/* Username Input */}
        <form className="username-input-form">
          <div class="form-group">
            <label className="login-label" for="exampleInputEmail1">Username</label>
            <input className="input-field" type="email" class="form-control" id="username-input" aria-describedby="emailHelp" placeholder="Enter username" size="30" onChange={usernameHandler}></input>{" "}
          </div>
        </form>
        {/* Password Input */}
        <form className="password-input-form">
          <div class="form-group">
            <label className="login-label" for="exampleInputEmail1">Password</label>
            <input className="input-field" type="email" class="form-control" id="password-input" aria-describedby="emailHelp" placeholder="Enter password" size="30" onChange={passwordHandler}></input>{" "}
          </div>
        </form>
        {/* Login Button */}
        <div id="login-div">
          <button className="login-button" type="button" onClick={loginPlease}>Login</button>
        </div>
        {/* Sign Up Button */}
      </div>
    </div>
  );
}

export default Login;

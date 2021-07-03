import React, { useEffect, useState } from 'react';
import "bootstrap/dist/css/bootstrap.css";
import "./style.css";
// import LoginButton from '../../components/LoginButton/LoginButton';
import API from '../../utils/API';





function Login({loginInfo}) {

  
  
  function usernameHandler(event) {
    loginInfo.username = event.target.value;
    console.log('email change');
    console.log(loginInfo.username);
  }

  function passwordHandler(event) {
    loginInfo.password = event.target.value;
    console.log('password change');
    console.log(loginInfo.password);
  }

  const [userData, setUserData] = useState([]);
  // const [pleaseData, setPleaseData] = useState([]);
  console.log('username');
  console.log(loginInfo.username);

  console.log('password');
  console.log(loginInfo.password);

 
      function retrieveUser() {
        API.login(loginInfo)
        .then(res => {
            console.log(res.data);
            setUserData(res.data);

            
        })
        .catch(err => console.log(err.message));

        console.log(userData);
      }
 
      if (userData !== null) {
        if (userData.password !== loginInfo.password) {
            console.log('Incorrect username or password');
        } else {
            alert('Login successful!');
            loginInfo.loggedIn = userData;
            console.log('loginInfo');
            console.log(loginInfo);
            document.location.replace('/#/UserPage');
        }
      } else {
          console.log('Incorrect username or password (null)');
      }
      
   
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
        <button className="login-button" type="button" onClick={retrieveUser}>Login</button>
      </div>
    </div>
  );
}

export default Login;

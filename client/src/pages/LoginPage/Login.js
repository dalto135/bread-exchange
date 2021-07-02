import React, { useEffect, useState } from 'react';
import "bootstrap/dist/css/bootstrap.css";
import "./style.css";
import LoginButton from '../../components/LoginButton/LoginButton';

let loginInfo = {
  username: 'jack123',
  password: 'givefood'
}

let username = 'jack123';
let password = 'givefood';

function Login() {
  
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

  // const [userData, setUserData] = useState([]);

  // function LoginFormHandler() {
  // useEffect(() => {
  //    async function hello() {
  //     try {
  //       const data = await fetch('/api/user/login', {
  //         method: 'POST',
  //         body: JSON.stringify({ username, password }),
  //         headers: { 'Content-Type': 'application/json' },
  //       })
  //       .then(res => res.json());
  //       setUserData(data);
  //     }
  //     catch (err) {
  //       console.log('err.message');
  //       console.log(err.message);
  //     }
      // if (username && password) {
        // const response = await 
        
      // }
        // .catch(err => {
        //   console.log(err.message);
        //   alert('Login attempt failed');
        // });
        // response.ok
        //   ? document.location.replace('/')
        //   : alert('Login attempt failed');
      
  //   }
  //   hello();
  // }, [])

  //   console.log(userData);
  //   if (userData != password) {
  //     alert('Incorrect username or password');
  //   }
  // }
  

  

  
// console.log(userData);
  

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
        {/* <button className="login-button" type="button" username={username} password={password}>Login</button> */}
        <LoginButton loginInfo={loginInfo}></LoginButton>
      </div>
    </div>
  );
}

export default Login;

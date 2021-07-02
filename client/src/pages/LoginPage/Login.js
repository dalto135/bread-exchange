import React, { useEffect, useState } from 'react';
import "bootstrap/dist/css/bootstrap.css";
import "./style.css";

let username = 'jack123';
let password = 'givefood';

function Login() {
  
  function usernameHandler(event) {
    username = event.target.value;
    console.log('email change');
    console.log(username);
  }

  function passwordHandler(event) {
    password = event.target.value;
    console.log('password change');
    console.log(password);
  }

  const [userData, setUserData] = useState([]);

  useEffect(() => {
     async function loginFormHandler() {
      try {
        const data = await fetch('/api/user/login', {
          method: 'POST',
          body: JSON.stringify({ username, password }),
          headers: { 'Content-Type': 'application/json' },
        })
        .then(res => res.json());
        setUserData(data);
      }
      catch (err) {
        console.log('err.message');
        console.log(err.message);
      }




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
      
    }
    loginFormHandler();
  }, [])

  

  console.log(userData);

  

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
        <button className="login-button" type="button" >Login</button>
      </div>
    </div>
  );
}

export default Login;

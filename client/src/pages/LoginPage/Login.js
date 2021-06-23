import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./style.css";

function Login() {
  return (
    <div className="login-background">
      <div className="white-panel">
        <h1 className="login-header">Login</h1>
        {/* Username Input */}
        <form className="username-input-form">
          <div class="form-group">
            <label className="login-label" for="exampleInputEmail1">Username</label>
            <input className="input-field" type="email" class="form-control" id="username-input" aria-describedby="emailHelp" placeholder="Enter username" size="30"></input>{" "}
          </div>
        </form>
        {/* Password Input */}
        <form className="password-input-form">
          <div class="form-group">
            <label className="login-label" for="exampleInputEmail1">Password</label>
            <input className="input-field" type="email" class="form-control" id="password-input" aria-describedby="emailHelp" placeholder="Enter password" size="30"></input>{" "}
          </div>
        </form>
        {/* Login Button */}
        <button className="login-button" type="button">Login</button>
      </div>
    </div>
  );
}

export default Login;

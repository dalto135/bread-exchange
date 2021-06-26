import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./style.css";

function Signup() {
  return (
    <div className="signup-background">
      <div className="white-panel">
        <h1 className="signup-header">Signup</h1>
        {/* Username Input */}
        <form className="username-input-form">
          <div class="form-group">
            <label className="signup-label" for="exampleInputEmail1">Create Username</label>
            <input className="input-field" type="email" class="form-control" id="username-input" aria-describedby="emailHelp" placeholder="Bew username" size="30"></input>{" "}
          </div>
        </form>
        {/* Password Input */}
        <form className="password-input-form">
          <div class="form-group">
            <label className="signup-label" for="exampleInputEmail1">Create Password</label>
            <input className="input-field" type="email" class="form-control" id="password-input" aria-describedby="emailHelp" placeholder="New password" size="30"></input>{" "}
          </div>
        </form>
        <form className="email-input-form">
          <div class="form-group">
            <label className="signup-label" for="exampleInputEmail1">Enter Email</label>
            <input className="input-field" type="email" class="form-control" id="email-input" aria-describedby="emailHelp" placeholder="Input email for signup" size="30"></input>{" "}
          </div>
        </form>
        {/* Signup Button */}
        <button className="signup-button" type="button">Signup</button>
      </div>
    </div>
  );
}

export default Signup;

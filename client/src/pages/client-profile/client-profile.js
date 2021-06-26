import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./client-profile.css";

function Profile() {
  return (
    <div className="profile-background">
      <div className="white-panel">
        <h1 className="profile-header">Login</h1>
        {/* Update Username */}
        <form className="username-input-form">
          <div class="form-group">
            <label className="profile-label" for="exampleInputEmail1">Username</label>
            <input className="input-field" type="email" class="form-control" id="username-input" aria-describedby="emailHelp" placeholder="Update username" size="30"></input>{" "}
          </div>
        </form>
        {/* Password Input */}
        <form className="password-input-form">
          <div class="form-group">
            <label className="profile-label" for="exampleInputEmail1">Password</label>
            <input className="input-field" type="email" class="form-control" id="password-input" aria-describedby="emailHelp" placeholder="Update password" size="30"></input>{" "}
          </div>
        </form>
        {/* Email Input */}
        <form className="email-input-form">
          <div class="form-group">
            <label className="profile-label" for="exampleInputEmail1">Email</label>
            <input className="input-field" type="email" class="form-control" id="email-input" aria-describedby="emailHelp" placeholder="Input email for contact" size="30"></input>{" "}
          </div>
        </form>
        {/* Update Button */}
        <button className="update-button" type="button">Update</button>
      </div>
    </div>
  );
}

export default Profile;

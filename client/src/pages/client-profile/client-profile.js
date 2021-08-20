import React, { useContext, useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./client-profile.css";
import { UserContext } from '../../utils/user-context';
import API from '../../utils/API';

function Profile() {

  const userData = useContext(UserContext);
  console.log('userData');
  console.log(userData);

  function handleInputChange(event) {
    const { name, value } = event.target;
    setUpdatedInfo({ ...updatedInfo, [name]: value });
    console.log(name + ': ' + value);
    console.log('newUser: ' + JSON.stringify(updatedInfo))
  }

  const [updatedInfo, setUpdatedInfo] = useState({
    _id: userData.data?._id
  });

  const [uniqueUser, setUniqueUser] = useState([]);

  useEffect(() => {
    API.getUserByUsername(updatedInfo)
    .then(res => {
      console.log('user?');
      console.log(res.data.username);
      setUniqueUser(res.data);
    })
  .catch(err => console.log(err.message));

  }, [updatedInfo.username])

  //Submit profile changes
  function editProfile(data) {
    if (updatedInfo.username && uniqueUser !== null) {
      alert('Must enter a unique username');
      return;
    }

    if (updatedInfo.password && updatedInfo.password.length < 8) {
      alert('Password must be at least 8 characters in length');
      return;
    }
    
    API.editAccount(data)
    .then(data => {
      console.log('account data');
      console.log(data);
      document.location.reload();
    })
    .catch(err => console.log(err.message))
  }

  // console.log(userData);

  return (
    <div>
      <div id="gray-panel">
        <div id="white-panel">
          <h1 className="profile-header">Update Profile Info</h1>
          <form className="email-input-form">
            {/* First Name Input */}
            <div className="form-group">
              <label className="profile-label" for="exampleInputEmail1">First Name:</label>
              <input name='firstName' className="input-field" className="form-control" id="email-input" aria-describedby="emailHelp" placeholder="Update first name" size="30" onChange={handleInputChange}></input>{" "}
            </div>
            {/* Last Name Input */}
            <div className="form-group">
              <label className="profile-label" for="exampleInputEmail1">Last Name:</label>
              <input name='lastName' className="input-field" className="form-control" id="email-input" aria-describedby="emailHelp" placeholder="Update last name" size="30" onChange={handleInputChange}></input>{" "}
            </div>
            {/* Update Username */}
            <div className="form-group">
              <label className="profile-label" for="exampleInputEmail1">Username:</label>
              <input name='username' className="input-field" className="form-control" id="username-input" aria-describedby="emailHelp" placeholder="Update username" size="30" onChange={handleInputChange}></input>{" "}
            </div>
            {/* Password Input */}
            <div className="form-group">
              <label className="profile-label" for="exampleInputEmail1">Password:</label>
              <input name='password' className="input-field" type="password" className="form-control" id="password-input" aria-describedby="emailHelp" placeholder="Update password" size="30" onChange={handleInputChange}></input>{" "}
            </div>
            {/* Email Input */}
            <div className="form-group">
              <label className="profile-label" for="exampleInputEmail1">Email:</label>
              <input name='email' className="input-field" type="email" className="form-control" id="email-input" aria-describedby="emailHelp" placeholder="Update email" size="30" onChange={handleInputChange}></input>{" "}
            </div>
            {/* Update Button */}
            <button className="update-button" type="button" onClick={() => {editProfile(updatedInfo)}}>Update</button>
          </form>

        </div>
      </div>
    </div>
  );
}

export default Profile;

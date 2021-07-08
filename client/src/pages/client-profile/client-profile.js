import React, { useContext, useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./client-profile.css";
import { UserContext } from '../../utils/user-context';
import API from '../../utils/API';

function Profile() {

  const userData = useContext(UserContext);
  console.log('userData');
  console.log(userData);

  // let updatedUser = userData.data;
  // console.log('updatedUser');
  // console.log(updatedUser);

  let firstName = '';
  let lastName = '';
  let username = '';
  let password = '';
  let email = '';

  const [updatedInfo, setUpdatedInfo] = useState([]);

  // useEffect(() => {
  //   setUpdatedInfo(userData);
    
  // }, [])

  // console.log('updated info');
  // console.log(updatedInfo);

  //Change first name
  function firstNameHandler(event) {
    firstName = event.target.value;

    setUpdatedInfo({
      ...updatedInfo,
      _id: userData.data._id,
      firstName
    })
    console.log('firstName change');
    console.log(firstName);
  }

  //Change last name
  function lastnameHandler(event) {
    lastName = event.target.value;

    setUpdatedInfo({
      ...updatedInfo,
      _id: userData.data._id,
      lastName
    })
    console.log('lastName change');
    console.log(lastName);
  }

  //Change username
  function usernameHandler(event) {
    username = event.target.value;

    setUpdatedInfo({
      ...updatedInfo,
      _id: userData.data._id,
      username
    })
    console.log('username change');
    console.log(username);
  }

  //Change password
  function passwordHandler(event) {
    password = event.target.value;

    setUpdatedInfo({
      ...updatedInfo,
      _id: userData.data._id,
      password
    })
    console.log('password change');
    console.log(password);
  }

  //Change email
  function emailHandler(event) {
    email = event.target.value;

    setUpdatedInfo({
      ...updatedInfo,
      _id: userData.data._id,
      email
    })
    console.log('email change');
    console.log(email);
  }

  //Submit profile changes
  function editProfile(data) {
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
    <div className="profile-background">
      <div className="white-panel">
        <h1 className="profile-header">Update Profile Info</h1>
        {/* First Name Input */}
        <form className="email-input-form">
          <div className="form-group">
            <label className="profile-label" for="exampleInputEmail1">First Name:</label>
            <input className="input-field" type="email" className="form-control" id="email-input" aria-describedby="emailHelp" placeholder="Input email for contact" size="30" onChange={firstNameHandler}></input>{" "}
            {/* <button className="update-button" type="button" onClick={() => {editProfile(updatedInfo)}}>Update</button> */}
          </div>
        </form>
        {/* Last Name Input */}
        <form className="email-input-form">
          <div className="form-group">
            <label className="profile-label" for="exampleInputEmail1">Last Name:</label>
            <input className="input-field" type="email" className="form-control" id="email-input" aria-describedby="emailHelp" placeholder="Input email for contact" size="30" onChange={lastnameHandler}></input>{" "}
            {/* <button className="update-button" type="button" onClick={() => {editProfile(updatedInfo)}}>Update</button> */}
          </div>
        </form>
        {/* Update Username */}
        <form className="username-input-form">
          <div className="form-group">
            <label className="profile-label" for="exampleInputEmail1">Username:</label>
            <input className="input-field" type="email" className="form-control" id="username-input" aria-describedby="emailHelp" placeholder="Update username" size="30" onChange={usernameHandler}></input>{" "}
            {/* <button className="update-button" type="button" onClick={() => {editProfile(updatedInfo)}}>Update</button> */}
          </div>
        </form>
        {/* Password Input */}
        <form className="password-input-form">
          <div className="form-group">
            <label className="profile-label" for="exampleInputEmail1">Password:</label>
            <input className="input-field" type="email" className="form-control" id="password-input" aria-describedby="emailHelp" placeholder="Update password" size="30" onChange={passwordHandler}></input>{" "}
            {/* <button className="update-button" type="button" onClick={() => {editProfile(updatedInfo)}}>Update</button> */}
          </div>
        </form>
        {/* Email Input */}
        <form className="email-input-form">
          <div className="form-group">
            <label className="profile-label" for="exampleInputEmail1">Email:</label>
            <input className="input-field" type="email" className="form-control" id="email-input" aria-describedby="emailHelp" placeholder="Input email for contact" size="30" onChange={emailHandler}></input>{" "}
          </div>
        </form>
        {/* Update Button */}
        <button className="update-button" type="button" onClick={() => {editProfile(updatedInfo)}}>Update</button>
      </div>
    </div>
  );
}

export default Profile;

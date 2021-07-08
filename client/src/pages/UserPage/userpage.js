import React, { useContext, useEffect, useState } from "react";
import "./userpage.css";
import { UserContext } from '../../utils/user-context';
import API from '../../utils/API';
import { Link } from "react-router-dom";


<<<<<<< HEAD
function userPage() {
=======

function UserPage() {
>>>>>>> ce383caca06d1d33221dda6ad9b64453ff1c9548
  // let loginString = localStorage.getItem('storedLogin');
  // let loginData = JSON.parse('{"hello":"hello","goodbye":"goodbye"}');
  // let loginData = JSON.parse(loginString);
  // let ye = JSON.parse('{"firstName":"Jack","lastName":"Ortega","username":"jack123","password":"givefood","email":"jack123@gmail.com"}');
  // console.log(loginString);
  // console.log(loginData);
  // console.log(ye);

  

  const userData = useContext(UserContext);
  console.log('userData');
  console.log(userData);

  const [postData, setPostData] = useState([]);

  useEffect(() => {
    API.findByUserID(userData.data)
    .then(data => {
      console.log('post data');
      console.log(data);
      setPostData(data);
    })
    .catch(err => console.log(err.message))
  }, [])

  // let userData = localStorage.getItem('localuser');
  // let parsedUser = JSON.parse(userData);

  // const [currentUser, setCurrentUser] = useState([]);

  // useEffect(() => {
  //   API.getSingleUser(userData.data._id)
  //   .then(user => {
  //     console.log(user);
  //     setCurrentUser(user);
  //   })
  // }, []);

  // console.log('currentUser');
  // console.log(currentUser);

  // const [userData, setUserData] = useState([]);

  //   useEffect(() => {
  //       API.userInfo()
  //       .then(user => {
  //         console.log(user);
  //         setUserData(user);
  //       })
  //     });

  //     console.log('userData');
  //     console.log(userData);

  return (
    <div id="full-userpage">
      <div id="grey-panel">
        <div id="white-panel">
          {/* Header */}
          <h1 id="my-account-header">My Account</h1>

          <div id="user-info">
            <h2 id="your-info">Your info</h2>
            <h3>First name: {userData.data.firstName}</h3>
            <h3>Last name: {userData.data.lastName}</h3>
            <h3>Username: {userData.data.username}</h3>
            <h3>Password: {userData.data.password}</h3>
            <h3>Email: {userData.data.email}</h3>
          </div>
          {/* Update Info */}
          <Link to="./client-profile">Update my Info</Link>

<<<<<<< HEAD
          <h2 id="reservations-header">Reservations</h2>

          {/* Reservations Table */}
=======
          {/* <h2 id="reservations-header">Reservations</h2>
           Reservations Table 
>>>>>>> ce383caca06d1d33221dda6ad9b64453ff1c9548
          <div id="table-divider">
            <table className="table-design" width="400" border="1" cellpadding="5">
              <tr>
                <th width="75">
                  <strong>Name</strong>
                </th>
                <th>
                  <span className="bold-text">Telephone</span>
                </th>
                <th>
                  <span className="bold-text">Items Reserved</span>
                </th>
                <th>
                  <span className="bold-text">Approve?</span>
                </th>
              </tr>
              <tr>
                <td>John</td>
                <td>555-5555</td>
                <td>Potatoes</td>
                <td>
                  <button id="table-button">
                    <i class="fas fa-check table-check"></i>
                  </button>
                  <button id="table-button">
                    <i class="fas fa-times table-x"></i>
                  </button>
                </td>
              </tr>
              <tr>
                <td>Cassie</td>
                <td>555-5555</td>
                <td>Cheese</td>
                <td>
                  <button id="table-button">
                    <i class="fas fa-check table-check"></i>
                  </button>
                  <button id="table-button">
                    <i class="fas fa-times table-x"></i>
                  </button>
                </td>
              </tr>
            </table>
          </div> */}
          {/* My Posts */}
          <h2 id="my-posts-header">My Posts</h2>
          {/* Posts Container */}
          <div id="my-posts-container">
           
          {postData? (

postData.data?.map(post => {
  return (
    // {let user = getUser(post)},
    <div className="card" key={post._id}>
      <img className="card-img" src="/chart.jpg" alt="Avatar"></img>
      <div className="container">
        <h4>
          <b>{post.user_id}</b>
        </h4>
        <h6>Pick up Location at {post.location}</h6>
        <h6>Posted {post.postDate}</h6>
        <h6>Item: {post.name} </h6>
        <h6>Description: {post.description} </h6>
        <h6>Number of Items: {post.quantity} </h6>
        {/* <a href={"/Posts/" + post._id} post={post}>View</a> */}
        {/* <Link to={'/singlepost'} onClick={() => {choosePost(post)}}>View</Link> */}
        <Link to={{pathname:'/singlepost', state:{post: post }}}>View Post</Link>
      </div>
    </div>
  );
})
) : (
<h3>No Results to Display</h3>
)}
           
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserPage;

import React, { useContext, useEffect, useState } from "react";
import "./userpage.css";
import { UserContext } from '../../utils/user-context';
import { PostContext } from '../../utils/post-context';
import API from '../../utils/API';
import { Link } from "react-router-dom";
import PostCard from "../../components/PostCard/PostCard";


function UserPage() {
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
      setPostData(data.data);
    })
    .catch(err => console.log(err.message))
  }, [userData.data])

  const [newPost, setNewPost] = useState({
    _id: Math.random(),
    user_id: userData.data?._id,

  });

  

  // useEffect(() => {

  // }, [])

  // let name = '';
  // let description = '';
  // let location = '';
  // let quantity = '';

  //Set name
  // function nameHandler(event) {
  //   name = event.target.value;

  //   setNewPost({
  //     ...newPost,
  //     // _id: Math.random(),
  //     // user_id: userData.data._id,
  //     name
  //   })
  //   console.log('name change');
  //   console.log(name);
  // }

  //Set description
  // function descriptionHandler(event) {
  //   description = event.target.value;

  //   setNewPost({
  //     ...newPost,
  //     // _id: Math.random(),
  //     // user_id: userData.data._id,
  //     description
  //   })
  //   console.log('description change');
  //   console.log(description);
  // }

  //Set location
  // function locationHandler(event) {
  //   location = event.target.value;

  //   setNewPost({
  //     ...newPost,
  //     // _id: Math.random(),
  //     // user_id: userData.data._id,
  //     location
  //   })
  //   console.log('location change');
  //   console.log(location);
  // }

  //Set quantity
  // function quantityHandler(event) {
  //   quantity = event.target.value;
  //   let intQuantity = parseInt(quantity);

  //   setNewPost({
  //     ...newPost,
  //     // _id: Math.random(),
  //     // user_id: userData.data._id,
  //     quantity: intQuantity
  //   })
  //   console.log('quantity change');
  //   console.log(quantity);
  // }

  // function submitPost(data) {
  //   API.savePosts(data)
  //   .then(postData => {
  //     console.log('submitted post data');
  //     console.log(postData);
  //     document.location.replace('/');
  //   })
  //   .catch(err => console.log(err.message));
  // }

  function deletePost(_id) {
    API.deletePosts(_id)
    .then(postData => {
      console.log('submitted post data');
      console.log(postData);
      document.location.reload();
    })
    .catch(err => console.log(err.message));
  }

  function deleteReservation(_id) {
    API.removeReservation(_id)
    .then(reservationData => {
      console.log('submitted reservation data');
      console.log(reservationData);
      document.location.reload();
    })
    .catch(err => console.log(err.message));
  }

  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    API.getUserReservations(userData.data)
    .then(data => {
      console.log('user reservations');
      console.log(data);
      // document.location.replace('/');
      setReservations(data);
    })
    .catch(err => console.log(err.message));
  }, [userData.data])

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

  
  // const [postContext, setPostContext] = useContext(PostContext);

  // function selectPost(post) {
  //     setPostContext(post);
  //     console.log('document.location.replace');
  //     document.location.replace('#/singlepost');
  // }
  return (
    <div id="full-userpage">
      <div id="grey-panel">
        <div id="white-panel">
          {/* Header */}
          <h1 id="my-account-header">Welcome {userData.data?.firstName} {userData.data?.lastName}!</h1>

          <div id="user-info">
            <h2 id="your-info">My info</h2>
            {/* <h3>First name: {userData.data.firstName}</h3> */}
            {/* <h3>Last name: {userData.data.lastName}</h3> */}
            <h3>Username: {userData.data?.username}</h3>
            {/* <h3>Password: {userData.data.password}</h3> */}
            <h3>Email: {userData.data?.email}</h3>
          </div>
          {/* Update Info */}
          <Link to="./client-profile">Update my Info</Link>
          <materialButton className="material-button"><Link className="link-button"to="/CreatePost">Post Food</Link><br></br></materialButton>

          {/* My Posts */}
          <h2 id="my-posts-header">My Posts</h2>
          {/* Posts Container */}
          <div id="my-posts-container">
           
            {

              postData?.map((post, i) => {
                return (
                  <div className="card" key={i}>
                    {/* <PostCard post={post}/> */}
                      <h4>
                        <b>{post.user_id}</b>
                      </h4>
                      <h6>Pick up Location at {post.location}</h6>
                      <h6>Posted {post.postDate}</h6>
                      <h6>Item: {post.name} </h6>
                      <h6>Description: {post.description} </h6>
                      <h6>Number of Items: {post.quantity} </h6>
                     
                      <Link to={{pathname:'/singlepost', state:{post: post }}}>View Post</Link>
                      <button onClick={() => {deletePost(post._id)}}>Delete</button>
                      
                  </div>
                );
              })
            
            }
            {/* {postData.length ? (
            postData.map((post, i) => {
              return (
                <div className="card" key={i}>
                  <div className="container">
                    <PostCard post={post} userInfo={userData}/>
                  </div>
                </div>
              );
            })
          ) : (
            <h3>No Results to Display</h3>
          )} */}
           
          </div>
          {/* <div id='new-post-container'>
            <h2>Create New Post</h2>
            <p>Name:</p>
            <input onChange={nameHandler}></input>
            
            <p>Description:</p>
            <input onChange={descriptionHandler}></input>

            <p>Location:</p>
            <input onChange={locationHandler}></input>

            <p>Quantity:</p>
            <input onChange={quantityHandler}></input>

            <button onClick={() => {submitPost(newPost)}}>Submit</button>
          </div> */}
          <div id='myreservations'>
          <div className="container">
            <h1>My Reservations</h1>
            <div id='reservationsdiv'>

            
            {reservations.data?.map((reservation, i) => {
              return (
                <div className="card" key={i}>
                <p>{(i + 1)}.</p>
                <p>Post ID: {reservation.post_id}</p>
                <p>Quantity: {reservation.quantity}</p>
                <button onClick={() => {deleteReservation(reservation._id)}}>Delete</button>
                </div>
              
              )
            })}
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserPage;

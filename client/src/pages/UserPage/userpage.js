import React, { useContext, useEffect, useState } from "react";
import "./userpage.css";
import { UserContext } from '../../utils/user-context';
import { PostContext } from '../../utils/post-context';
import API from '../../utils/API';
import { Link } from "react-router-dom";
import PostCard from "../../components/PostCard/PostCard";


function UserPage() {

  // const [postContext, setPostContext] = useContext(PostContext);

  // function selectPost(post) {
  //   setPostContext(post);
  //   console.log('document.location.replace');
  //   document.location.replace('#/singlepost');
  // }

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

  // const [newPost, setNewPost] = useState({
  //   _id: Math.random(),
  //   user_id: userData.data?._id,

  // });

  // function deletePost(_id) {
  //   API.deletePosts(_id)
  //   .then(postData => {
  //     console.log('submitted post data');
  //     console.log(postData);
  //     document.location.reload();
  //   })
  //   .catch(err => console.log(err.message));
  // }

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

 

  
  
  return (
    <div id="full-userpage">
      <div id="grey-panel">
        <div id="white-panel">
          {/* Header */}
          <h1 id="my-account-header">Welcome {userData.data?.firstName} {userData.data?.lastName}!</h1>

          <div id="user-info">
            <h2 id="your-info">My info</h2>
            <h3>Username: {userData.data?.username}</h3>
            <h3>Email: {userData.data?.email}</h3>
          </div>
          {/* Update Info */}
          <Link to="./client-profile">Update my Info</Link>
          <materialButton className="material-button"><Link className="link-button"to="/CreatePost">Post Food</Link><br></br></materialButton>

          {/* My Posts */}
          <h2 id="my-posts-header">My Posts</h2>
          {/* Posts Container */}
          <div id="my-posts-container">
            {postData.length ? (
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
              <h3>No Posts to Display</h3>
            )}
           
          </div>
          
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

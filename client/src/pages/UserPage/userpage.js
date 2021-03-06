import React, { useContext, useEffect, useState } from "react";
import "./userpage.css";
import { UserContext } from '../../utils/user-context';
import { PostContext } from '../../utils/post-context';
import API from '../../utils/API';
import { Link } from "react-router-dom";
import PostCard from "../../components/PostCard/PostCard";
import UserReservation from '../../components/UserReservation/UserReservation';


function UserPage() {

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
          <materialButton className="material-button"><Link className="link-button"to="/CreatePost">New Post</Link><br></br></materialButton>

          {/* My Posts */}
          <h2 id="my-posts-header">My Posts:</h2>
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
            <h1>My Reservations:</h1>
            <div id='reservationsdiv'>

            
            {reservations.data?.length ? (

              reservations.data?.map((reservation, i) => {
                return (
                  <div className="card" key={i}>
        
                  <UserReservation Reservation={reservation}/>
                  </div>
                
                )
              })
            ) : (
              <h3>No Reservations to Display</h3>
            )}
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserPage;

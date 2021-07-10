import React, { useEffect, useState } from 'react';
import API from '../../utils/API';
import { Link } from "react-router-dom";

function PostCard({post}) {
    // const [pleaseData, setPleaseData] = useState([]);
    
    // useEffect(() => {
    //     API.login(loginInfo)
    //       .then(res => {
    //           console.log(res.data);
    //           setPleaseData(res.data);
    //       })
    //   })

    //   console.log(pleaseData);

    const [userData, setUserData] = useState([]);

    useEffect(() => {
        API.getSingleUser(post)
        .then(res => {
            console.log(res);
            setUserData(res.data);
        })
        .catch(err => console.log.apply(err));
    }, []);

    console.log('post user data');
    console.log(userData);

      return (
        <div className="container">
            <h2>User: {userData.username}</h2>
            <h6>Pick up Location at {post.location}</h6>
            <h6>Posted {post.postDate}</h6>
            <h6>Contact: {post.email}</h6>
            <h6>Item: {post.name} </h6>
            <h6>Description: {post.description} </h6>
            <h6>Number of Items: {post.quantity} </h6>
            <Link to={{pathname:'/singlepost', state:{post: post }}}>View Post</Link>
        </div>
      )
}

export default PostCard;
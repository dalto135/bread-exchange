import React, { useContext, useEffect, useState } from 'react';
import API from '../../utils/API';
import { Link } from "react-router-dom";
import { PostContext } from '../../utils/post-context';

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

    const [postContext, setPostContext] = useContext(PostContext);

    function selectPost() {
        setPostContext(post);
        console.log('document.location.replace');
        document.location.replace('#/singlepost');
    }

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

    // useEffect(() => {

    // }, [])

    let currentPost = {
        _id: 'currentPost',
        name: post.name,
        description: post.description,
        location: post.location,
        quantity: post.quantity,
        postDate: post.postDate,
        user_id: post.user_id
    }

    // function selectPost() {
    //     API.updatePost(currentPost)
    //     .then(postData => console.log(postData))
    //     .catch(err => console.log(err.message));
    // }

      return (
        <div className="container">
            <h2>{post.name} </h2>
            <h6>Description: {post.description} </h6>
            <h6>Number of Items: {post.quantity} </h6>
            <h6>Pick up Location at {post.location}</h6>
            <h6>User: {userData?.username}</h6>
            <h6>Posted {post.postDate}</h6>
            {/* <h6>Contact: {post.email}</h6> */}
            {/* <Link to={'/singlepost'} onClick={() => {setPostContext(post)}}>View Post</Link> */}
            <button onClick={selectPost}>View Post</button>
            
            {/* <Link to={{pathname:'/singlepost', state:{post: post }}}>View Post</Link> */}
        </div>
      )
}

export default PostCard;
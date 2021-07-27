import React, { useContext, useEffect, useState } from 'react';
import API from '../../utils/API';
import { PostContext } from '../../utils/post-context';

function PostCard({post, userInfo}) {
    const [postContext, setPostContext] = useContext(PostContext);

    function selectPost() {
      setPostContext(post);
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

    function deleteOnlyPost() {
      API.deletePosts(post._id)
        .then(postData => {
          console.log('delete post');
          console.log(postData);
        })
        // .then(
          
        // )
        .catch(err => console.log(err.message));
    }

    function deletePostRes() {
      console.log('post of reservations to be deleted');
      console.log(post);

      // let postId = {
      //   _id: post._id
      // }

      API.deletePostRes(post._id)
        .then(postPostData => {
          console.log('delete reservations');
          console.log(postPostData);
        })
        .catch(err => console.log(err.message));
    }

    function deletePost() {
      deleteOnlyPost();
      deletePostRes();
      document.location.reload();
    }

      return (
        <div className="container">
            <h2>{post.name}</h2>
            <h6>Description: {post.description} </h6>
            <h6>Number of Items: {post.quantity} </h6>
            <h6>Pick up Location at {post.location}</h6>
            <h6>User: {userData?.username}</h6>
            <h6>Posted {post.postDate}</h6>
            <button onClick={selectPost}>View</button>
            {userInfo.data?._id === userData?._id &&
            <button onClick={deletePost}>Delete</button>}
        </div>
      )
}

export default PostCard;
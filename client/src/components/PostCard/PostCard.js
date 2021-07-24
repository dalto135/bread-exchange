import React, { useContext, useEffect, useState } from 'react';
import API from '../../utils/API';
import { PostContext } from '../../utils/post-context';

function PostCard({post, userInfo}) {
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

    function deletePost(_id) {
        API.deletePosts(_id)
        .then(postData => {
          console.log('submitted post data');
          console.log(postData);
          document.location.reload();
        })
        .catch(err => console.log(err.message));
      }

      return (
        <div className="container">
            <h2>{post.name} </h2>
            <h6>Description: {post.description} </h6>
            <h6>Number of Items: {post.quantity} </h6>
            <h6>Pick up Location at {post.location}</h6>
            <h6>User: {userData?.username}</h6>
            <h6>Posted {post.postDate}</h6>
            <button onClick={selectPost}>View Post</button>
            {userInfo.data?._id === userData?._id &&
            <button onClick={() => {deletePost(post._id)}}>Delete</button>}
        </div>
      )
}

export default PostCard;
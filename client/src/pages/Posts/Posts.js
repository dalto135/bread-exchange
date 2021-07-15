import React, { useContext, useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./style.css";
import { Link } from "react-router-dom";
import Input from "../../components/Input/input"
import Button from "../../components/Button/Button"
import SinglePost from "../Singlepost/Singlepost";
import CreatePost from "../CreatePost/CreatePost";
import { HashRouter as Router, Route } from "react-router-dom";
import API from "../../utils/API";
import { UserContext } from '../../utils/user-context';
import MaterialButton from "../../components/Material-Button/Material-Button";
import PostCard from "../../components/PostCard/PostCard";

function Posts({currentPost}) {

  const userData = useContext(UserContext);
  console.log('userData');
  console.log(userData);

  function choosePost(post) {
    currentPost = post;
    console.log('post chosen');
    console.log(currentPost);
  }

  const [posts, setPosts] = useState([])
  // const [userData, setUserData] = useState([]);
  const [formList, setFormList] = useState({
    name: "",
    description: "",
    location: "",
    quantity: "",
    postDate: "",
    user_id: "",
  })
  //load all posts
  useEffect(() => {
    loadPosts()
  }, [])

  function loadPosts() {
    API.getPosts()
      .then(res => {
        console.log(res)
        setPosts(res.data)
      }
      )
      .catch(err => console.log.apply(err));
  }


  // function getUser(postData) {
  //   API.getSingleUser(postData)
  //   .then(res => {
  //   console.log('res.data');
  //   console.log(res.data);
  //   setUserData(res.data);  
  //   })
  //   .catch(err => console.log(err.message));
  // }


  return (
    <div>
      <div id="top-section">
        <h1 id="find-food-header">Find Food Here</h1>
        {userData.data &&
          <materialButton className="material-button"><Link className="link-button"to="/CreatePost">Post Food</Link><br></br></materialButton>}
        {/* <materialButton className="material-button" style={{marginTop: "1rem"}} type="submit" onClick={loadPosts}>Load Current Posts</materialButton> */}
      </div>
      <div id="gray-panel">
        <div className="card-container">
          {posts.length ? (

            posts.map((post, i) => {
              return (
                // {let user = getUser(post)},
                <div className="card" key={i}>
                  {/* <div className="container"> */}
                    <PostCard post={post}/>
                    {/* <h4>
                      <b>{post.user_id}</b>
                    </h4> */}
                    {/* <h6>Pick up Location at {post.location}</h6>
                    <h6>Posted {post.postDate}</h6>
                    <h6>Contact: {post.email}</h6>
                    <h6>Item: {post.name} </h6>
                    <h6>Description: {post.description} </h6>
                    <h6>Number of Items: {post.quantity} </h6> */}
                    {/* <a href={"/Posts/" + post._id} post={post}>View</a> */}
                    {/* <Link to={'/singlepost'} onClick={() => {choosePost(post)}}>View</Link> */}
                    {/* <Link to={{pathname:'/singlepost', state:{post: post }}}>View Post</Link> */}
                  </div>
                // </div>
              );
            })
          ) : (
            <h3>No Results to Display</h3>
          )}
        </div>
      </div>
      </div>
  );
}

export default Posts;

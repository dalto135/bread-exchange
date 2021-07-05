import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./style.css";
import { Link } from "react-router-dom";
import Input from "../../components/Input/input"
import Button from "../../components/Button/Button"
import SinglePost from "../Singlepost/Singlepost";
import CreatePost from "../CreatePost/CreatePost";
import { HashRouter as Router, Route } from "react-router-dom";
import API from "../../utils/API";

function Posts() {
  const [posts, setPosts] = useState([])
  const [userData, setUserData] = useState([]);
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


  function getUser(postData) {
    API.getSingleUser(postData)
    .then(res => {
    console.log('res.data');
    console.log(res.data);
    setUserData(res.data);  
    })
    .catch(err => console.log(err.message));
  }


  return (
    <div>
      <h1>Find Food Here</h1>
      {/* <Link to="/CreatePost">Post Food</Link><br></br>
      <Link to="/singlepost">Food</Link>
      <button onClick={loadPosts}>Button</button> */}
      
      {/* <Router>
        <Route exact path='/singlepost' component={SinglePost}/>
      </Router> */}

      <div className="card-container">
        {posts.length ? (

          posts.map(post => {
            return (
              <div className="card" key={post._id}>
                <img className="card-img" src="/chart.jpg" alt="Avatar"></img>
                                <div className="container">
                  <h4>
                    <b>{post.user_id}</b>
                  </h4>
                  <h6>Pick up Location at {post.location}</h6>
                  <h6>Posted {post.postDate}</h6>
                  <h6>Exp: 6/31/21</h6>
                  <h6>Contact: John Smith - jsmith@email.com</h6>
                  <h6>Item: {post.name} </h6>
                  <h6>Description: {post.description} </h6>
                  <h6>Number of Items: {post.quantity} </h6>
                  <a href={"/posts/" + post._id}>View</a>
                  {/* <Link to={{pathname:"/singlepost", state:{post: post }}}>View Post</Link> */}
                </div>
              </div>


            );
          })
        ) : (
          <h3>No Results to Display</h3>
        )}
      </div>
    </div>
  );
}

export default Posts;

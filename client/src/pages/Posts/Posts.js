import React, {useEffect, useState} from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./style.css";
import { Link } from "react-router-dom";
import Input from "../../components/Input/input"
import Button from "../../components/Button/Button"
import SinglePost from "../Singlepost/Singlepost";
import CreatePost from "../CreatePost/CreatePost";
import { HashRouter as Router, Route } from "react-router-dom";
import API from "../../utils/API"

function Posts() {
const [posts, setPosts]= useState([])
const [formList, setFormList]=useState({
  name: "",
  description: "",
  location: "",
  quantity: "",
  postDate: "",
  user_id: "",
})
//load all posts
useEffect(() =>{
  loadPosts()
}, [])

function loadPosts(){
  API.getPosts()
  .then(res =>
    {console.log(res)
    setPosts (res.data)}
    )
    .catch(err => console.log.apply(err));
}

  return (
    <div>
      <h1>Find Food Here</h1>
      <Link to="/CreatePost">Post Food</Link><br></br>
      <Link to="/singlepost">Food</Link>
      {/* <Router>
        <Route exact path='/singlepost' component={SinglePost}/>
      </Router> */}
      <div className="card-container">
        <div className="card">
          <img className="card-img" src="/chart.jpg" alt="Avatar"></img>
          <div className="container">
            {posts.length ? (
              <li>
                {posts.map(post => {
                  return(
                  <li key ={post.id}>
                    <a href={"/posts/"+ post.id}>
                      <li>
                        {post.name}
                        {post.description}
                        {post.location}
                        {post.quantity}
                        {post.postDate}
                        {post.user_id}
                      </li>
                    </a>
                    
                  </li>
                  );
                })}
             </li> 
            ):(
              <h3>No Results to Display</h3>
            )}                 
            <button >View</button>
          </div>
        </div>
        <div className="card-container">
          {/* Cards */}
          <div className="card">
            <img className="card-img" src="/chart.jpg" alt="Avatar"></img>
            <div className="container">
              <h4>
                <b>Panera Bread</b>
              </h4>
              <h6>Pickup Location Here</h6>
              <h6>Posted 6/24/21</h6>
              <h6>Exp: 6/31/21</h6>
              <h6>Contact: John Smith - jsmith@email.com</h6>
              <p>
                <ul id="card-list">
                  <li>2 loaves of bread</li>
                  <li>3 apples</li>
                </ul>
              </p>
              <Button title="View" />
            </div>
          </div>

          <div className="card">
            <img className="card-img" src="/chart.jpg" alt="Avatar"></img>
            <div className="container">
              <h4>
                <b>Starbucks</b>
              </h4>
              <h6>Pickup Location Here</h6>
              <h6>Posted 6/26/21</h6>
              <h6>Exp: 6/31/21</h6>
              <h6>Contact: John Smith - jsmith@email.com</h6>
              <p>
                <ul>
                  <li>5 cookies</li>
                  <li>1 gallon milk</li>
                </ul>
              </p>
              <Button title="View" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Posts;

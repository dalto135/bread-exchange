import React, { useContext, useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./style.css";
import { Link } from "react-router-dom";
import API from "../../utils/API";
import { UserContext } from '../../utils/user-context';
import PostCard from "../../components/PostCard/PostCard";

function Posts({currentPost}) {

  const userData = useContext(UserContext);
  console.log('userData');
  console.log(userData);

  const [posts, setPosts] = useState([]);
 
  //load all posts
  useEffect(() => {
    API.getPosts()
    .then(res => {
      console.log(res);
      setPosts(res.data);
    })
    .catch(err => console.log.apply(err));
  }, [])

  return (
    <div>
      <div id="top-section">
        <h1 id="find-food-header">Find Food Here</h1>
        {userData.data &&
          <materialButton className="material-button"><Link className="link-button"to="/CreatePost">Post Food</Link><br></br></materialButton>}
      </div>
      <div id="gray-panel">
        <div className="card-container">
          {posts.length ? (
            posts.map((post, i) => {
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
          )}
        </div>
      </div>
      </div>
  );
}

export default Posts;

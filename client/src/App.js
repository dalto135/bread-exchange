import React, { Component } from "react";
import "./App.css";
import Login from "./pages/LoginPage/Login";
import Navbar from "./components/Navbar/navbar";
import MainPage from "./pages/MainPage/mainpage";
import Posts from "./pages/Posts/Posts";
import SinglePost from "./pages/Singlepost/Singlepost";
import CreatePost from "./pages/CreatePost/CreatePost";
import UserPage from "./pages/UserPage/userpage";
import { HashRouter as Router, Route } from "react-router-dom";
import userPage from "./pages/UserPage/userpage";
import Button from "./components/Button/Button";
import Profile from "./pages/client-profile/client-profile"

let currentPost = 'none';

function App() {
  return (
    <Router>
      <Navbar />
      <Route exact path="/" component={MainPage} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/Posts" render={() => <Posts currentPost={currentPost} />} />
      <Route exact path="/singlepost" render={() => <SinglePost currentPost={currentPost} />} />
      <Route exact path="/CreatePost" component={CreatePost} />
      <Route exact path="/UserPage" component={userPage} />
      <Route exact path="/client-profile" component={Profile}/>
    </Router>
  );
}

export default App;

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

function App() {
  return (
    <Router>
      <Navbar />
      <Route exact path="/" component={MainPage} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/Posts" component={Posts} />
      <Route exact path="/singlepost" component={SinglePost} />
      <Route exact path="/CreatePost" component={CreatePost} />
      <Route exact path="/UserPage" component={userPage} />
    </Router>
  );
}

export default App;

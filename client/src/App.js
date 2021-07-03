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
// import userPage from "./pages/UserPage/userpage";
import Button from "./components/Button/Button";

let loginInfo = {
  username: '',
  password: '',
  loggedIn: {
    firstName: '',
    lastName: '',
    userName: '',
    password: '',
    email: ''
  }
}

function App() {
  return (
    <Router>
      <Navbar />
      <Route exact path="/" render={() => <MainPage loginInfo={loginInfo}/>} />
      <Route exact path='/login' render={() => <Login loginInfo={loginInfo}/>}/>
      <Route exact path="/Posts" render={() => <Posts loginInfo={loginInfo}/>} />
      <Route exact path="/singlepost" render={() => <SinglePost loginInfo={loginInfo}/>} />
      <Route exact path="/CreatePost" render={() => <CreatePost loginInfo={loginInfo}/>} />
      <Route exact path='/UserPage' render={() => <UserPage loginInfo={loginInfo}/>}/>
    </Router>
  );
}

export default App;

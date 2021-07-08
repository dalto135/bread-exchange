import React, { Component, useEffect, useState } from "react";
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
import Profile from "./pages/client-profile/client-profile";
import { io } from "socket.io-client";
import { UserProvider } from './utils/user-context';

// let currentPost = 'none';


function App() {
    useEffect(()=> {
    const socket = io();
    socket.on("connect", () => {
      console.log('socket conneted',socket.id); 
    });
    socket.on("hello", (message) => {
      console.log('hello was received', message); 
    });
    socket.on("disconnect", () => {
      console.log('socket disconneted',socket.id);
        });
    socket.connect();
    return()=>{
     socket.disconnect();
    }
  },[])
  return (
    <Router>
      
      <UserProvider>
        <Navbar />
        <Route exact path="/" component={MainPage} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/Posts" component={Posts} />
        <Route exact path="/singlepost" component={SinglePost} />
        <Route exact path="/CreatePost" component={CreatePost} />
        <Route exact path="/UserPage" component={UserPage} />
        <Route exact path="/client-profile" component={Profile}/>
      </UserProvider>
    </Router>
  );
}

export default App;

import React, { Component } from "react";
import "./App.css";
import Login from "./pages/LoginPage/Login"
import Navbar from './components/Navbar/navbar'
import MainPage from './pages/MainPage/mainpage'
import Posts from './pages/Posts/Posts';
import SinglePost from "./pages/Singlepost/Singlepost";
import { HashRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar/>
      <Route exact path='/' component={MainPage}/>
      <Route exact path='/login' component={Login}/>
      <Route exact path='/Posts' component={Posts}/>
      <Route exact path='/singlepost' component={SinglePost}/>
    </Router>
  );
}


export default App;

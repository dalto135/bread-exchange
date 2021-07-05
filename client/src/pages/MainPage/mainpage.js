// import React from "react";
import React, { useState, useEffect } from 'react';
import "./mainpage.css";

function Mainpage() {

  // const [results, setResults] = useState([]);

  // useEffect(() => {
  //   async function getPosts() {
  //     try {
  //       const posts = await fetch("/api/reservation").then(res => res.json());
  //       setResults(posts);
  //     } catch (err) {
  //       console.log('err.message');
  //       console.log(err.message);
  //     }
  //   }
  //   getPosts();
  // }, [])

  // console.log('results');
  // console.log(results);


  return (
    <div>
      {/* Header */}
      <header className="header-container">
        <h1 className="bread-header">Bread Exchange</h1>
        <img className="main-image" src="/groceries1.jpg" alt="groceries"></img>
      </header>
      <div id="lower-page">
        {/* 1st Section */}
        <section id="first-section">
          <img id="second-image" src="/scatteredfood.jpg"></img>
          <div id="what-we-do">
            <h1 id="what-we-do-header">What We Do</h1>
            <p id="what-we-do-text">
              Bread exchange aims to decrease food waste and bring the community
              together. We allow individuals and businesses to make their foods
              available on our site, and connect with others in the community who
              are experiencing food shortage.{" "}
            </p>
          </div>
        </section>

        <section id="second-section-container">
          {/* 2nd Section(Left Side) */}
          <div id="left-side">
            {/* 42 Million Infographic   */}
            <div id="infographic-1">
              <div>
                <h1 id="forty-two">42</h1>
              </div>
              <div>
                <h3 id="million">million</h3>
                <p id="americans">Americans face food insecurity each day.</p>
              </div>
            </div>
            {/* Our Solution Text*/}
            <div id="our-solution-section">
              <h1 id="our-solution-header">Our Solution?</h1>
              <h1 id="text-1">Bring the community together.</h1>
              <h1 id="text-2">Feed the hungry.</h1>
              <h1 id="text-3">Decrease food waste.</h1>
            </div>
          </div>

          {/* 40% Infographic */}
          <div>
            <div id="right-side">
              <img
                id="forty-percent-infographic"
                src="/fortypercent.jpg"
                alt="infographic"
              ></img>
              <h3 id="waste">Waste</h3>
              <p id="forty-percent-text">
                It's estimated that Americans waste at
              </p>
              <p id="forty-percent-text">least 40% of our food supply</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Mainpage;

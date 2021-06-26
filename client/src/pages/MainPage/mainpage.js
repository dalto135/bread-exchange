import React from "react";
import "./mainpage.css";

function Mainpage() {
  return (
    <div>
      {/* Header */}
      <header className="header-container">
        <h1 className="bread-header">Bread Exchange</h1>
        <img className="main-image" src="/groceries1.jpg" alt="groceries"></img>
      </header>

      {/* 1st Section */}
      <section id="first-section">
        <img id="second-image" src="/scatteredfood.jpg"></img>
        <div id="what-we-do">
        <h1 id="what-we-do-header">What We Do</h1>
        <p id="what-we-do-text">Bread exchange aims to decrease food waste and bring the community together. We allow individuals and businesses to make their foods available on our site, and connect with others in the community who are experiencing food shortage. </p>
        </div>
      </section>

      {/* 2nd Section(Left Side) */}
      <section id="left-side">
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
      </section>
    </div>
  );
}

export default Mainpage;

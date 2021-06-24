import React from "react";
import "./style.css";

function CreatePost() {
  return (
    <div>
      <div className="card">
        <div className="container">
          <b>Enter your street or business name...</b>
          <form action="/action_page.php"></form>
          <input type="text" id="fname" name="firstname" placeholder="Street/business name.."></input>
          <br></br>
          <b>What foods are you donating?</b>
          <form action="/action_page.php"></form>
          <input type="text" id="fname" name="firstname" placeholder="Street/business name.." ></input>
          <br></br>
          <b>Enter your pickup location..</b>
          <form action="/action_page.php"></form>
          <input type="text" id="fname" name="firstname" placeholder="Street/business name.." ></input>
          <br></br>
          <button>Submit</button>
        </div>
      </div>
    </div>
  );
}

export default CreatePost;

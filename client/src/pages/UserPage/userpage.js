import React from "react";
import "./userpage.css";
import { Link } from "react-router-dom";

function userPage() {
  // let loginString = localStorage.getItem('storedLogin');
  // let loginData = JSON.parse('{"hello":"hello","goodbye":"goodbye"}');
  // let loginData = JSON.parse(loginString);
  // let ye = JSON.parse('{"firstName":"Jack","lastName":"Ortega","username":"jack123","password":"givefood","email":"jack123@gmail.com"}');
  // console.log(loginString);
  // console.log(loginData);
  // console.log(ye);

  return (
    <div id="full-userpage">
      <div id="grey-panel">
        <div id="white-panel">
          {/* Header */}
          <h1 id="my-account-header">My Account</h1>
              {/* Update Info */}
          <Link to="./client-profile">Update my Info</Link>

          <h2 id="reservations-header">Reservations</h2>
          {/* Reservations Table */}
          <div id="table-divider">
            <table className="table-design" width="400" border="1" cellpadding="5">
              <tr>
                <th width="75">
                  <strong>Name</strong>
                </th>
                <th>
                  <span className="bold-text">Telephone</span>
                </th>
                <th>
                  <span className="bold-text">Items Reserved</span>
                </th>
                <th>
                  <span className="bold-text">Approve?</span>
                </th>
              </tr>
              <tr>
                <td>John</td>
                <td>555-5555</td>
                <td>Potatoes</td>
                <td>
                  <button id="table-button"><i class="fas fa-check table-check"></i></button>
                  <button id="table-button"><i class="fas fa-times table-x"></i></button>
                </td>
              </tr>
              <tr>
                <td>Cassie</td>
                <td>555-5555</td>
                <td>Cheese</td>
                <td>
                  <button id="table-button"><i class="fas fa-check table-check"></i></button>
                  <button id="table-button"><i class="fas fa-times table-x"></i></button>
                </td>
              </tr>
            </table>
          </div>
            {/* My Posts */}
          <h2 id="my-posts-header">My Posts</h2>
            {/* Posts Container */}
          <div id="my-posts-container">

            {/* Single Post */}
            <div className="single-post">
              <div className="post-title">
                <a href="/">Title Here</a>
              </div>
              <div className="post-description">
                <h3>Description Here</h3>
              </div>
              <div className="delete-post">
              <button className="trash-button"><i class="fas fa-trash"></i></button>
              </div>
            </div>

            {/* Single Post */}
            <div className="single-post">
              <div className="post-title">
              <a href="/">Title Here</a>
              </div>
              <div className="post-description">
                <h3>Description Here</h3>
              </div>
              <div className="delete-post">
              <button className="trash-button"><i class="fas fa-trash"></i></button>
              </div>
            </div>


          </div>

        </div>
      </div>
    </div>
  );
}

export default userPage;

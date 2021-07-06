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
          <h1 id="my-account-header">My Account</h1>

          {/* <div id="user-info">
            <h2 id="your-info">Your info</h2>
            <h3>First name: </h3>
            <h3>Last name: </h3>
            <h3>Username: </h3>
            <h3>Password: </h3>
            <h3>Email: </h3>
          </div> */}

          <Link to="./client-profile">Update my Info</Link>

          <h2 id="reservations-header">Reservations</h2>
          <div id="table-divider">
            <table className="table-design" width="400" border="1" cellpadding="5"
            >
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
                <td>
                  <a href="tel:0123456785">555-5555</a>
                </td>
                <td>Potatoes</td>
                <td>
                  <button id="table-button"><i class="fas fa-check table-check"></i></button>
                  <button id="table-button"><i class="fas fa-times table-x"></i></button>
                </td>
              </tr>
              <tr>
                <td>Cassie</td>
                <td>
                  <a href="tel:9876532432">555-5555</a>
                </td>
                <td>Cheese</td>
                <td>
                  <button id="table-button"><i class="fas fa-check table-check"></i></button>
                  <button id="table-button"><i class="fas fa-times table-x"></i></button>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default userPage;

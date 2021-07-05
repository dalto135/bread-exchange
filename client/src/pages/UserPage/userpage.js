import React from "react";
import "./userpage.css";

function userPage() {
  return (
    <div id="full-userpage">
      <div id="grey-panel">
        <div id="white-panel">
          <h1 id="my-account-header">My Account</h1>
          <p>See your reservations here.</p>
          <h2 id="reservations-header">Reservations</h2>
          <div id="table-divider">
            <table className="table-design" width="400" cellpadding="5">
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
                  <button id="table-button"><i className="fas fa-check table-check"></i></button>
                  <button id="table-button"><i className="fas fa-times table-x"></i></button>
                </td>
              </tr>
              <tr>
                <td>Cassie</td>
                <td>
                  <a href="tel:9876532432">555-5555</a>
                </td>
                <td>Cheese</td>
                <td>
                  <button id="table-button"><i className="fas fa-check table-check"></i></button>
                  <button id="table-button"><i className="fas fa-times table-x"></i></button>
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

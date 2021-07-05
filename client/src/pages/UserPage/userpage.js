import React from "react";
import "./userpage.css";




function userPage() {
  
  
  // let loginString = localStorage.getItem('storedLogin');
  // let loginData = JSON.parse('{"hello":"hello","goodbye":"goodbye"}');
  // let loginData = JSON.parse(loginString);
  // let ye = JSON.parse('{"firstName":"Jack","lastName":"Ortega","username":"jack123","password":"givefood","email":"jack123@gmail.com"}');
  // console.log(loginString);
  // console.log(loginData);
  // console.log(ye);

  return (
    <div>
      <h1>My Account</h1>
      <p>Account Information Here</p>

      <div>
        <h2>Your info</h2>
        <h3>First name: </h3>
        <h3>Last name: </h3>
        <h3>Username: </h3>
        <h3>Password: </h3>
        <h3>Email: </h3>
      </div>

      <h2>Reservations</h2>
      <table className="center-text"width="300" border="1" cellpadding="5">
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
          <th>&nbsp;</th>
        </tr>
        <tr>
          <td>John</td>
          <td>
            <a href="tel:0123456785">555-5555</a>
          </td>
          <td>Potatoes</td>
          <td><button>&#9745;</button><button>&#9746;</button></td>
        </tr>
        <tr>
          <td>Cassie</td>
          <td>
            <a href="tel:9876532432">555-5555</a>
          </td>
          <td>Cheese</td>
          <td><button>&#9745;</button><button>&#9746;</button></td>
        </tr>
      </table>
    </div>
  );
}

export default userPage;

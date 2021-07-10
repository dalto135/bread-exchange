import React, { useContext, useState } from "react";
import "./style.css";
import API from "../../utils/API";
import { UserContext } from '../../utils/user-context';
import MaterialButton from "../../components/Material-Button/Material-Button";

function CreatePost(event) {

  const userData = useContext(UserContext);
  console.log('userData');
  console.log(userData);

  const [formObject, setFormObject] = useState({
    _id: Math.random(),
    name: "",
    description: "",
    location: "",
    quantity: "",
    user_id: userData.data?._id,
  });
  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({
      ...formObject,
      [name]: value
    });
    console.log(value);
  }

  function quantityHandler(event) {
    const { value } = event.target;
    let intQuantity = parseInt(value);
    setFormObject({
      ...formObject,
      quantity: intQuantity
    })
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.name && formObject.description) {
      if (!Number.isInteger(formObject.quantity)) {
        alert('Quantity must be a number value');
        return;
      }
      API.savePosts(
      //   {
      //   name: formObject.name,
      //   description: formObject.description,
      //   location: formObject.location,
      //   quantity: formObject.quantity,
      //   user_id: formObject.user_id,
      // }
      formObject
      )
        .then(() => {
          setFormObject({
            name: "",
            description: "",
            location: "",
            quantity: "",
            user_id: "",
          });
          document.location.replace('/');
        }
        )
        .catch((err) => console.log(err));
    }
  }
  return (
    <div id="create-full-page">
      <div id="gray-panel">
        <div className="create-post-card">
          <div className="input-container">
            <b>Enter the name of the item.</b>
            <form className="input-form" onSubmit={handleFormSubmit}>
              <input onChange={handleInputChange} type="text" name="name" placeholder="Apples.."></input>
              <b>Enter the description of the food.</b>
              <input onChange={handleInputChange}  type="text" name="description" placeholder="Red Delicious.."></input>
              <b>Enter your prefered pickup/meet location.</b>
              <input onChange={handleInputChange} type="text" name="location" placeholder="Street/business name.."></input>
              <b>Enter the quantity of the items available.</b>
              <input onChange={quantityHandler} type="text" name="quantity" placeholder="10.."></input>
              {/* <b>Enter your user identifier.</b> */}
              {/* <input onChange={handleInputChange} type="text" name="user_id" placeholder="USER123.."></input> */}
              <materialButton type="submit" className="material-button" onClick={handleFormSubmit}>Submit</materialButton>
              
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreatePost;

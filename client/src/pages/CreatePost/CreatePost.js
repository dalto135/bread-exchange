import React, { useState } from "react";
import "./style.css";
import API from "../../utils/API";
import materialButton from "../../components/Material-Button/Material-Button";

function CreatePost(event) {
  const [formObject, setFormObject] = useState({
    name: "",
    description: "",
    location: "",
    quantity: "",
    user_id: "",
  });
  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value });
  }
  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.name && formObject.description) {
      API.savePosts({
        name: formObject.name,
        description: formObject.description,
        location: formObject.location,
        quantity: formObject.quantity,
        user_id: formObject.user_id,
      })
        .then(() =>
          setFormObject({
            name: "",
            description: "",
            location: "",
            quantity: "",
            user_id: "",
          })
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
              <input onChange={handleInputChange} type="text" name="quantity" placeholder="10.."></input>
              <b>Enter your user identifier.</b>
              <input onChange={handleInputChange} type="text" name="user_id" placeholder="USER123.."></input>
              <materialButton type="submit" className="material-button">Submit</materialButton>
              
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreatePost;

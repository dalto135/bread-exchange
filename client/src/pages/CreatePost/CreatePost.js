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
    if (!intQuantity) {
      intQuantity = 'NaN';
    }
    setFormObject({
      ...formObject,
      quantity: intQuantity
    })
  }

  function handleFormSubmit(event) {
    event.preventDefault();
      if(!formObject.name || !formObject.description || !formObject.location) {
        alert('Please complete all required fields');
        return;
      }
      if (!Number.isInteger(formObject.quantity)) {
        alert('Quantity must be a number value');
        return;
      }
      API.savePosts(formObject)
        .then(() => {
          document.location.replace('#/UserPage');
        })
        .catch((err) => console.log(err));
  }
  return (
    <div id="create-full-page">
      <div id="gray-panel">
        <div className="create-post-card">
          <div className="input-container">
            <b>Enter the name of the item.</b>
            <form className="input-form" onSubmit={handleFormSubmit}>
              <input onChange={handleInputChange} type="text" name="name" placeholder="Name"></input>
              <b>Enter the description of the food.</b>
              <input onChange={handleInputChange}  type="text" name="description" placeholder="Description"></input>
              <b>Enter your prefered pickup/meet location.</b>
              <input onChange={handleInputChange} type="text" name="location" placeholder="Location"></input>
              <b>Enter the quantity of the items available.</b>
              <input onChange={quantityHandler} type="text" name="quantity" placeholder="Quantity"></input>
              <materialButton type="submit" className="material-button" onClick={handleFormSubmit}>Submit</materialButton>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreatePost;

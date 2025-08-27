import React from "react";
import "../css/FoodItem.css";

const FoodItem = ({ food, addToCart }) => (
  <div className="food-item">
    <img src={food.image} alt={food.name} className="food-image" />
    <h3>{food.name}</h3>
    <p className="vendor">{food.vendor}</p>
    <p className="description">{food.description}</p>
    <p className="price">₵{food.price.toFixed(2)}</p>
    <button onClick={() => addToCart(food)}>Add to Cart</button>
  </div>
);

export default FoodItem;

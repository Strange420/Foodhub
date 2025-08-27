import React from "react";
import "../css/FeaturedCarousel.css";

const FeaturedCarousel = ({ foods }) => (
  <div className="carousel">
    {foods.map(food => (
      <div key={food.id} className="carousel-item">
        <img src={food.image} alt={food.name} />
        <h4>{food.name}</h4>
      </div>
    ))}
  </div>
);

export default FeaturedCarousel;

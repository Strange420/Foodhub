import React, { useEffect, useState } from "react";
import axios from "axios";
import FoodItem from "../components/FoodItem";
import FeaturedCarousel from "../components/FeaturedCarousel";
import "../css/Home.css";

const Home = ({ addToCart }) => {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/foods")
      .then(res => setFoods(res.data))
      .catch(err => console.log(err));
  }, []);

  const featured = foods.slice(0, 4);

  return (
    <div className="home">
      <h2>Featured Foods</h2>
      <FeaturedCarousel foods={featured} />
      <h2>Our Foods</h2>
      <div className="food-list">
        {foods.map(food => <FoodItem key={food.id} food={food} addToCart={addToCart} />)}
      </div>
    </div>
  );
};

export default Home;

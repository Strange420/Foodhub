import React, { useEffect, useState } from "react";
import axios from "axios";
import FoodItem from "../components/FoodItem";
import SearchBar from "../components/SearchBar";
import "../css/FoodListPage.css";

const FoodListPage = ({ addToCart }) => {
  const [foods, setFoods] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    axios.get("http://localhost:5000/api/foods")
      .then(res => setFoods(res.data))
      .catch(err => console.log(err));
  }, []);

  const filtered = foods.filter(food =>
    food.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="foodlist-page">
      <h2>Our Foods</h2>
      <SearchBar query={query} setQuery={setQuery} />
      <div className="food-list">
        {filtered.map(food => <FoodItem key={food.id} food={food} addToCart={addToCart} />)}
      </div>
    </div>
  );
};

export default FoodListPage;

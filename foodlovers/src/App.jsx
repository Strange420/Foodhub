import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Header from "./components/Header";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import FoodListPage from "./pages/FoodListPage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import OrderSuccess from "./pages/OrderSuccess";
import About from "./pages/About";

// Global CSS
import "./app.css";

const App = () => {
  const [cart, setCart] = useState([]);

  // Add food item to cart
  const addToCart = (food) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === food.id);
      if (existing) {
        return prev.map(item =>
          item.id === food.id ? { ...item, qty: item.qty + 1 } : item
        );
      } else {
        return [...prev, { ...food, qty: 1 }];
      }
    });
  };

  // Remove food item from cart
  const removeFromCart = (id) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  // Update quantity
  const updateQty = (id, qty) => {
    if (qty < 1) return;
    setCart(prev => prev.map(item => item.id === id ? { ...item, qty } : item));
  };

  // Clear cart (after checkout)
  const clearCart = () => setCart([]);

  return (
    <Router>
      <div className="app-container">
        <Header cartCount={cart.reduce((acc, item) => acc + item.qty, 0)} />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home addToCart={addToCart} />} />
            <Route path="/foods" element={<FoodListPage addToCart={addToCart} />} />
            <Route
              path="/cart"
              element={<CartPage cart={cart} removeFromCart={removeFromCart} updateQty={updateQty} />}
            />
            <Route
              path="/checkout"
              element={<CheckoutPage cart={cart} clearCart={clearCart} />}
            />
            <Route path="/order-success" element={<OrderSuccess />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;

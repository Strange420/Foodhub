import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/CheckoutPage.css";

const CheckoutPage = ({ cart, clearCart }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    clearCart();
    navigate("/order-success");
  };

  const total = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

  return (
    <div className="checkout">
      <h2>Checkout</h2>
      <h3>Order Total: ₵{total.toFixed(2)}</h3>
      <form onSubmit={handleSubmit}>
        <input placeholder="Name" value={name} onChange={e => setName(e.target.value)} required />
        <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
        <input placeholder="Address" value={address} onChange={e => setAddress(e.target.value)} required />
        <button type="submit" className="confirm">Place Order</button>
      </form>
    </div>
  );
};

export default CheckoutPage;

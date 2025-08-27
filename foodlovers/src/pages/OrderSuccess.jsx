import React from "react";
import { Link } from "react-router-dom";
import "../css/OrderSuccess.css";

const OrderSuccess = () => (
  <div className="order-success">
    <h2>Order Placed Successfully!</h2>
    <p>Thank you for your order. Your food will arrive soon.</p>
    <Link to="/foods"><button>Back to Foods</button></Link>
  </div>
);

export default OrderSuccess;

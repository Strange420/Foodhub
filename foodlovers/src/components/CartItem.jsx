import React from "react";
import "../css/CartItem.css";

const CartItem = ({ item, removeFromCart, updateQty }) => (
  <div className="cart-item">
    <span>{item.name}</span>
    <span>
      <button onClick={() => updateQty(item.id, item.qty - 1)}>-</button>
      {item.qty}
      <button onClick={() => updateQty(item.id, item.qty + 1)}>+</button>
    </span>
    <span>₵{(item.price * item.qty).toFixed(2)}</span>
    <button onClick={() => removeFromCart(item.id)}>Remove</button>
  </div>
);

export default CartItem;

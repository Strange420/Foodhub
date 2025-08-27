import React from "react";
import CartItem from "../components/CartItem";
import { Link } from "react-router-dom";
import "../css/CartPage.css";

const CartPage = ({ cart, removeFromCart, updateQty }) => {
  const total = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Cart is empty. <Link to="/foods">Go to Foods</Link></p>
      ) : (
        <>
          {cart.map(item => (
            <CartItem key={item.id} item={item} removeFromCart={removeFromCart} updateQty={updateQty} />
          ))}
          <h3>Total: GHS {total.toFixed(2)}</h3>
          <Link to="/checkout"><button className="proceed">Proceed to Checkout</button></Link>
        </>
      )}
    </div>
  );
};

export default CartPage;

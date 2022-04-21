import "./Navbar.css";
import React from 'react'
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";


const Navbar = ({ click }) => {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  // const getCartCount = () => {
  //   return cartItems.reduce((qty, item) => qty + Number(item.qty), 0);
  // };
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <h2>MERN Shopping Cart</h2>
      </div>

      <ul className="navbar__links">
      <li>
          <Link to="/history">CartHistory</Link>
        </li>
      <li>
          <Link to="/userlogin">UserLogin</Link>
        </li>
        <li>
          <Link to="/registration">Register</Link>
        </li>
        <li>
          <Link to="/">Shop</Link>
        </li>
        <li>
          <Link to="/cart" className="cart__link">
            <i className="fas fa-shopping-cart"></i>
            <span>
              Cart <span className="cartlogo__badge">{cartItems.length}</span>
            </span>
          </Link>
        </li>
      </ul>
      <div className="hamburger__menu" onClick={click}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
};

export default Navbar;

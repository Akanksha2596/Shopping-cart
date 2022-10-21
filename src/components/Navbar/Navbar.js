import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

import { connect } from "react-redux";

const Navbar = ({ cart }) => {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    let count = 0;
    cart.forEach((item) => {
      count += item.qty;
    });

    setCartCount(count);
  }, [cart, cartCount]);

  return (
    <div className="navbar">
      <Link to="/">
        <h2 className="navbar__logo">Shopping Cart</h2>
      </Link>
      <Link to="/cart">
        <div className="navbar__cart">
          <h3 className="cart__title">Cart</h3>
          <img
            className="cart__image"
            src="https://img.icons8.com/material-rounded/24/000000/shopping-cart.png"
            alt="shopping cart"
          />
          <div className="cart__counter">{cartCount}</div>
        </div>
      </Link>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};

export default connect(mapStateToProps)(Navbar);

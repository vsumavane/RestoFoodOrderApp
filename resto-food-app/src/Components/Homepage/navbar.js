import React from 'react';
import './navbar.css'; // Import CSS file for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="left-section">
        <a href='#'><img src="https://i.ibb.co/YRF5Rf1/Baroda-Food-House-transparent.png" lt="Website Logo" className="logo" /> </a>
        <button  className="order-button">Order Online</button>
      </div>
      <div className="right-section">
        <button className="nav-button">Cart</button>
        <button className="nav-button">Login</button>
        <button className="nav-button">Sign Up</button>
      </div>
    </nav>
  );
};

export default Navbar;
import React from 'react';
import './navbar.css'; // Import CSS file for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="left-section">
        <img src="logo.png" alt="Website Logo" className="logo" />
        <button className="order-button">Order Online</button>
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
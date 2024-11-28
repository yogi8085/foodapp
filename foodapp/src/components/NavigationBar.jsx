import React from "react";
import "./NavigationBar.css";

const NavigationBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <h2>Food Hub</h2>
        </div>

        <ul className="nav-links">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/menu">Menu</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
          <li>
            <a href="/service">Service</a>
          </li>
        </ul>

        <div className="hamburger-menu">
          <span className="bar">card</span>
          <span className="bar">menu</span>
          <span className="bar">yogi</span>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;

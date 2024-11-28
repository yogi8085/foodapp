
import React from "react";
import "./HeroSection.css"; 

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-overlay">
        <div className="hero-content">
          <h1 className="hero-heading">Welcome to Food Hub</h1>
          <p className="hero-subheading">
            Discover Delicious Food, Explore New Recipes
          </p>
          <a href="/menu" className="hero-btn">
            Explore Menu
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

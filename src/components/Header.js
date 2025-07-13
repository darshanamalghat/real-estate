import React from "react";
import "./Header.css";

function Header({ onExploreClick }) {
  return (
    <header className="hero-section">
      <div className="overlay">
        <div className="hero-content">
          <h1>Find Your Dream </h1>
          <p>Best deals in Nagpur and surrounding locations</p>
          <button className="cta" onClick={onExploreClick}>Explore Now</button>
        </div>
      </div>
    </header>
  );
}

export default Header;

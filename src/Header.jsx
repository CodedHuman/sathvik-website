// Header.jsx
import React from 'react';

const Header = () => {
  return (
    <div className="header-content">
      <h1>Hey, I am</h1>
      <h1 className="gradient-text">
        Sathvik Ganti<span className="bold"> </span> {/* Add space between name and cursor */}
        <span className="blinking-cursor"></span>
      </h1>
      <p>Welcome to my website</p>
    </div>
  );
}

export default Header;
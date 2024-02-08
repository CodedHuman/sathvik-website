// components/Header.js
import React from 'react';

const Header = ({ title }) => {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="name">Hey, I am <span className="gradient-text">Sathvik Ganti</span></h1>
        <p>Welcome to my website</p>
      </div>
    </header>
  );
}

export default Header;
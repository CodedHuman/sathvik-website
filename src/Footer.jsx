// components/Footer.jsx
import React from 'react';

const Footer = ({ name }) => {
  return (
    <footer className="footer">
      <p><b>{name} <span role="img" aria-label="telescope">🔭</span> Ganti</b></p>
    </footer>
  );
}

export default Footer;
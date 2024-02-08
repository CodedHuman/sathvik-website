// Navigation.jsx
import React from 'react';

const Navigation = ({ setCurrentPage }) => {
  return (
    <div className="navigation">
      <div className="nav-content">
        <div className="nav-left" onClick={() => setCurrentPage('Header')}>
          <span>Sathvik Ganti</span>
        </div>
        <div className="nav-right">
          <button onClick={() => setCurrentPage('AboutMe')}>About Me</button>
          <button onClick={() => setCurrentPage('Projects')}>Projects</button>
          <button onClick={() => setCurrentPage('Experience')}>Experience</button>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
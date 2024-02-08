// Navigation.jsx
import React from 'react';
import { FaUser, FaBriefcase, FaProjectDiagram } from 'react-icons/fa'; // Import icons from react-icons library

const Navigation = ({ setCurrentPage }) => {
  return (
    <div className="navigation">
      <div className="nav-content">
        <div className="nav-right">
          <button onClick={() => setCurrentPage('AboutMe')}><FaUser /></button>
          <button onClick={() => setCurrentPage('Projects')}><FaProjectDiagram /></button>
          <button onClick={() => setCurrentPage('Experience')}><FaBriefcase /></button>
        </div>
      </div>
      <b><span className="initials" onClick={() => setCurrentPage('Header')}>SG</span></b> {/* Click action for initials "SG" */}
    </div>
  );
}

export default Navigation;
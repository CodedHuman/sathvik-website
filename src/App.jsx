// App.jsx
import React, { useState } from 'react';
import './App.css'; // Import CSS file
import Header from './Header';
import Footer from './Footer';
import Navigation from './Navigation';
import AboutMe from './pages/AboutMe';
import Projects from './pages/Projects';
import Experience from './pages/Experience';

const App = () => {
  const [currentPage, setCurrentPage] = useState('Header'); // Set App as the initial page

  const renderPage = () => {
    switch (currentPage) {
      case 'Header':
        return <Header />;
      case 'AboutMe':
        return <div className="page-container"><AboutMe /></div>; // Encapsulate other pages within a container with appropriate styling
      case 'Projects':
        return <div className="page-container"><Projects /></div>;
      case 'Experience':
        return <div className="page-container"><Experience /></div>;
      default:
        return <Header />;
    }
  }

  return (
    <div className="App">
      {renderPage()}
      <Navigation setCurrentPage={setCurrentPage} />
      <Footer name="Sathvik" />
    </div>
  );
}

export default App;
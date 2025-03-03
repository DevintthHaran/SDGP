import React, { useState, useEffect } from "react";
import "../style/Splash.css"; // For styles
import Home from '../pages/Home.jsx';
import logo from '../Images/logo.jpg';

const Splash = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000); // Adjust duration (in ms) as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showSplash ? (
        <div className="splash-screen">
          <div className="app-logo-sign">
            <img className="splash-logo" src={logo} alt="logo" />
            <h1>Professional Odyssey</h1>
          </div>
          <div>
            <svg width="250" height="200" xmlns="http://www.w3.org/2000/svg">
              {/* Background */}
              <rect width="100%" height="100%" fill="#d4d4d4" rx="50%" />
              
              {/* Bars */}
              <rect x="20" y="50" width="25" height="0" fill="#2158ff" className="bar bar1" />
              <rect x="70" y="50" width="25" height="0" fill="#00103e" className="bar bar2" />
              <rect x="120" y="50" width="25" height="0" fill="#99eced" className="bar bar3" />
              <rect x="140" y="50" width="25" height="0" fill="#10a100" className="bar bar4" />
              <rect x="180" y="50" width="25" height="0" fill="#002f02" className="bar bar5" />
            </svg>
          </div>
        </div>
      ) : (
        <main className="main-content">
          <Home />
        </main>
      )}
    </>
  );
};

export default Splash;


import React from 'react';
import '../style/Header.css';
import logo from '../Images/logo.jpg';

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="logo-and-text">
            <img className="logo-img" src={logo} alt="logo" />
            <h2><b>ProfessionalOdyssey</b></h2>
        </div>
        <ul>
          <li><a href="./pages/Home.jsx">Home</a></li>
          <li><a href="./pages/Shop.jsx">Shop</a></li>
          <li><a href="./pages/">Counseling</a></li>
          <li><a href="./pages/">Skill Assessment</a></li>
          <li><a href="./pages/">Interview simulation</a></li>
          <li><a href="./pages/">Job Market Trend</a></li>
          <li><a href="./pages/">Career Report</a></li>
          <li><a href="./pages/">Profile</a></li>
          <li><a href=""><img src="https://img.icons8.com/?size=100&id=84040&format=png&color=000000" alt="Settings icon" /></a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

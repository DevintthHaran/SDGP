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
          <li><a href="/home">Home</a></li>
          <li><a href="/shop">Shop</a></li>
          <li><a href="/meeting">Counseling</a></li>
          <li><a href="/skill">Skill Assessment</a></li>
          <li><a href="/chat">Interview simulation</a></li>
          <li><a href="/job">Job Market Trend</a></li>
          <li><a href="/career">Career Report</a></li>
          <li><a href="/profile">Profile</a></li>
          <li><a href="/setting"><img src="https://img.icons8.com/?size=100&id=84040&format=png&color=000000" alt="Settings icon" /></a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

import React from 'react';
import '../style/Header.css';
import logo from '../Images/logo.jpg';

const Header = () => {
  return (
    <nav className="navbar">
      <div className="logo-and-text">
        <img className="logo-img" src={logo} alt="logo" />
        <h2><b>ProfessionalOdyssey</b></h2>
      </div>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/shop">Shop</a></li>
        <li><a href="/meeting">Counseling</a></li>
        <li><a href="/skill">Skill Assessment</a></li>
        <li><a href="/simulation">Interview Simulation</a></li>
        <li><a href="/job">Job Market Trend</a></li>
        <li><a href="/career">Career Report</a></li>
        <li><a href="/profile">Profile</a></li>
        <li><a href="/feedback">Feedback</a></li>
        <li>
          <a href="/setting">
            <i className="bx bx-cog"></i>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Header;

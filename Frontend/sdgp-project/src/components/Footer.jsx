import React from 'react';
import '../style/Footer.css';
import logo from '../Images/logo.jpg';


const Footer = () => {
  return (
    <div className="Footer">
        <footer className="Footer-footer">
        <div className="Footer-container">
            <div className="Footer-row">
            <div id="Footer-footer-col-1" className="Footer-footer-col">
                <img className="Footer-logo" src={logo} alt="logo" />
                <h3>Empowering Your Life Journey to Success!</h3>
            </div>
            <div className="Footer-footer-col">
                <h4>About</h4>
                <ul>
                <li><a href="./pages/Home.jsx">Home</a></li>
                <li><a href="./pages/Shop.jsx">Shop</a></li>
                <li><a href="./pages/">Counseling</a></li>
                <li><a href="./pages/">Skill Assessment</a></li>
                <li><a href="./pages/">Interview simulation</a></li>
                <li><a href="./pages/">Job Market Trend</a></li>
                <li><a href="./pages/">Career Report</a></li>
                <li><a href="./pages/">Profile</a></li>
                </ul>
            </div>
            <div className="Footer-footer-col">
                <h4>Contact Us</h4>
                <ul>
                <li><a href="../">About us</a></li>
                <li><a href="../">Contact Us</a></li>
                <li>57, Ramakrishna Road,<br />Colombo 06, Sri Lanka,</li>
                <li>+94 766 760 760</li>
                <li><a href="mailto:professional.odyssey.lk@gmail.com">professional.odyssey.lk@gmail.com</a></li>
                </ul>
            </div>
            <div className="Footer-footer-col">
                <h4>Addition</h4>
                <p className="Footer-button-description">If you are interested in receiving up-to-date notifications</p>
                <button className="Footer-footer-button" onClick={() => window.location.href = '../pages/.jsx'}>Subscribe now</button>
                <p className="Footer-button-description">Your feedback helps us grow</p>
                <button className="Footer-footer-button" onClick={() => window.location.href = './Feedback.jsx'}>Send Feedback</button>
                <p className="Footer-button-description">Apply for Counseling Job</p>
                <button className="Footer-footer-button" onClick={() => window.location.href = '../pages/Job.jsx'}>Click here</button>
                <button className="Footer-footer-button" onClick={() => window.location.href = '../pages/Signup.jsx'}>Sign-up</button>
            </div>
            </div>
            <hr className="Footer-footer-hr" />
            <div id="Footer-footer-col-hr">
            <h4>Follow Us</h4>
            <div className="Footer-social-links">
                <a href="https://web.facebook.com/iitsl/" target="_blank" rel="noopener noreferrer"><img src="https://img.icons8.com/?size=100&id=118487&format=png&color=FFFFFF" alt="Facebook icon" /></a>
                <a href="https://www.instagram.com/iitlife/" target="_blank" rel="noopener noreferrer"><img src="https://img.icons8.com/?size=100&id=85154&format=png&color=FFFFFF" alt="Instagram icon" /></a>
                <a href="https://www.linkedin.com/in/professional-odyssey-206a82352/" target="_blank" rel="noopener noreferrer"> <img src="https://img.icons8.com/?size=100&id=85044&format=png&color=FFFFFF" alt="LinkedIn icon" /></a>
            </div>
            <p>&copy; 2025 Informatics Institute of Technology. All rights reserved.</p>
            </div>
        </div>
        </footer>
        </div>
  );
};

export default Footer;

import React from 'react';
import '../style/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Main Footer Content */}
        <div className="footer-grid">
          {/* Company Info */}
          <div>
            <h3 className="footer-title">Professional Odyssey</h3>
            <p className="footer-text">
              Empowering professionals to reach new heights in their careers through expert guidance, innovative tools, and personalized development strategies.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="footer-title">Quick Links</h3>
            <ul className="footer-list">
              <li><a href="/Home">Home</a></li>
              <li><a href="/shop">Shop</a></li>
              <li><a href="/meeting">Counseling</a></li>
              <li><a href="/skill">Skill Assessment</a></li>
              <li><a href="/simulation">Interview Simulation</a></li>
              <li><a href="/job">Job Market Trend</a></li>
              <li><a href="/career">Career Report</a></li>
              <li><a href="/profile">Profile</a></li>
              <li><a href="/feedback">Feedback</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="footer-title">Resources</h3>
            <ul className="footer-list">
                <li><a href="/home">About us</a></li>
                <li><a href="../">Contact Us</a></li>
                <li><a href="mailto:professional.odyssey.lk@gmail.com">professional.odyssey.lk@gmail.com</a></li>
            </ul>
          </div>

          <div >
          <div className="footer-list" >
            <h3 className="footer-title" >Addition</h3>
            <p className="Footer-button-description">If you are interested in enjoying our skill assessment features</p>
            <button className="Footer-footer-button" onClick={() => window.location.href = '/subscription'}>Subscribe now</button>
            <p className="Footer-button-description">Your feedback helps us grow</p>
            <button className="Footer-footer-button" onClick={() => window.location.href = '/feedback'}>Send Feedback</button>
            <p className="Footer-button-description">Apply for Counseling Job</p>
            <button className="Footer-footer-button" onClick={() => window.location.href = '/job'}>Click here</button>
            <button className="Footer-footer-button" onClick={() => window.location.href = '/signup'}>Sign-up</button>
          </div>
        </div>
        
        </div>

        

        {/* Copyright */}
        <div className="footer-bottom">
          <h4>Follow Us</h4>
          <div className="Footer-social-links">
            <a href="https://www.instagram.com/prof.essionalodyssey/" target="_blank" rel="noopener noreferrer">
              <img src="https://img.icons8.com/?size=100&id=85154&format=png&color=FFFFFF" alt="Instagram - Professional Odyssey" />
            </a>
            <a href="https://www.linkedin.com/in/professional-odyssey-206a82352/" target="_blank" rel="noopener noreferrer">
              <img src="https://img.icons8.com/?size=100&id=85044&format=png&color=FFFFFF" alt="LinkedIn - Professional Odyssey" />
            </a>
          </div>
          <p>© {new Date().getFullYear()} Professional Odyssey. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

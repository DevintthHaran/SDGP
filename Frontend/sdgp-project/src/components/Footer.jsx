import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faLinkedin, 
  faTwitter, 
  faFacebook 
} from '@fortawesome/free-brands-svg-icons';
import {
  faMapMarkerAlt,
  faPhone,
  faEnvelope
} from '@fortawesome/free-solid-svg-icons';
//import './Footer.css';
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
            <div className="social-icons">
              <button aria-label="LinkedIn" className="social-btn">
                <FontAwesomeIcon icon={faLinkedin} />
              </button>
              <button aria-label="Twitter" className="social-btn">
                <FontAwesomeIcon icon={faTwitter} />
              </button>
              <button aria-label="Facebook" className="social-btn">
                <FontAwesomeIcon icon={faFacebook} />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="footer-title">Quick Links</h3>
            <ul className="footer-list">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Our Services</a></li>
              <li><a href="#">Career Opportunities</a></li>
              <li><a href="#">Success Stories</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="footer-title">Resources</h3>
            <ul className="footer-list">
              <li><a href="#">Career Guide</a></li>
              <li><a href="#">Industry Insights</a></li>
              <li><a href="#">Professional Development</a></li>
              <li><a href="#">Events & Webinars</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="footer-title">Contact Us</h3>
            <div className="contact-info">
              <p><FontAwesomeIcon icon={faMapMarkerAlt} className="icon" /> 123 Business Avenue, Suite 200, New York, NY 10001</p>
              <p><FontAwesomeIcon icon={faPhone} className="icon" /> <a href="tel:+15551234567">+1 (555) 123-4567</a></p>
              <p><FontAwesomeIcon icon={faEnvelope} className="icon" /> <a href="mailto:contact@professional-odyssey.com">contact@professional-odyssey.com</a></p>
            </div>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="newsletter">
          <h4>Subscribe to Our Newsletter</h4>
          <p>Stay updated with the latest career insights and opportunities</p>
          <form onSubmit={(e) => e.preventDefault()} className="newsletter-form">
            <input type="email" placeholder="Enter your email" aria-label="Email subscription" />
            <button type="submit">Subscribe</button>
          </form>
        </div>

        {/* Copyright */}
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Professional Odyssey. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

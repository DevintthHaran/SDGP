import React from "react";
import ContactImage from "../Images/ContactImg.jpg"
import "../style/ContactUs.css";

const ContactUs = () => {
  
  return (
    <div className="contact-container">
      {/* Left Section - Contact Details */}
      <div className="contact-details">
        <div className="info-box">
          <span className="icon">📍</span>
          <div>
            <h3>Location</h3>
            <p>123 Business St, NY</p>
          </div>
        </div>
        <div className="info-box">
          <span className="icon">📞</span>
          <div>
            <h3>Phone</h3>
            <p>+1 (555) 123-4567</p>
          </div>
        </div>
        <div className="info-box">
          <span className="icon">⏰</span>
          <div>
            <h3>Hours</h3>
            <p>Mon - Fri: 9AM - 5PM</p>
          </div>
        </div>
      </div>


      <div className="contact-form">
        <h2>Contact Us</h2>
        <div className="contact-right">
          <img src={ContactImage} alt="Contact Illustration" className="contact-image" />
            <form>
              <div className="input-box">
                <input type="text" placeholder="Name" required />
              </div>
              <div className="input-box">
                <input type="email" placeholder="Email" required />
              </div>
              <div className="input-box">
                <textarea placeholder="Message" required></textarea>
              </div>
              <button type="submit">Send Message</button>
            </form>
        </div>
      </div>
      {/* <div className="contact-image">
        <img src={ContactImage} alt="Contact Illustration" />
      </div> */}
    </div>
  );
};

export default ContactUs;
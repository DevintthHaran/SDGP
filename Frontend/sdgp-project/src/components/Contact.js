import React from "react";
import { Link } from "react-router-dom";

const Contact = ({ contact }) => {
  return (
    <Link to={`/contacts/${contact.id}`} className="contact-item">
      <div className="contact-header">
        <div className="contact-image">
          {contact.photoUrl ? (
            <img src={contact.photoUrl} alt={contact.name} />
          ) : (
            <div className="default-avatar">👤</div>
          )}
        </div>
        <div className="contact-details">
          <p className="contact-name">
            {contact.name.length > 15 ? contact.name.substring(0, 15) + "..." : contact.name}
          </p>
          <p className="contact-title">{contact.title || "No Title"}</p>
        </div>
      </div>
      <div className="contact-body">
        <p>
          <i className="bi bi-envelope"></i> 
          {contact.email.length > 15 ? contact.email.substring(0, 15) + "..." : contact.email}
        </p>
        <p>
          <i className="bi bi-geo-alt"></i> {contact.address || "No Address"}
        </p>
        <p>
          <i className="bi bi-telephone"></i> {contact.phone || "No Phone"}
        </p>
        <p className="contact-status">
          {contact.status === "Active" ? (
            <i className="bi bi-check-circle status-active"></i>
          ) : (
            <i className="bi bi-x-circle status-inactive"></i>
          )}
          {contact.status}
        </p>
      </div>
    </Link>
  );
};

export default Contact;

import React, { useState } from 'react';

const ContactDetails = ({ handleFormSubmit, setContactDetails }) => {
  const [contact, setContact] = useState({ firstname: '', surname: '', phone: '', email: '' });
  const [isValid, setIsValid] = useState({ firstname: false, surname: false, phone: false, email: false });
  const [isSaved, setIsSaved] = useState(false);

  const validateField = (name, value) => {
    switch (name) {
      case 'firstname':
        return value.trim().length > 0;
      case 'surname':
        return value.trim().length > 0;
      case 'phone':
        return /^[0-9]{10}$/.test(value);
      case 'email':
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
      default:
        return false;
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Restrict input to numeric values for the phone field
    if (name === 'phone') {
      const numericValue = value.replace(/[^0-9]/g, ''); // Remove all non-numeric characters
      setContact({ ...contact, [name]: numericValue });
      setIsValid({ ...isValid, [name]: validateField(name, numericValue) });
    } else {
      setContact({ ...contact, [name]: value });
      setIsValid({ ...isValid, [name]: validateField(name, value) });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(isValid).every(Boolean)) {
      setIsSaved(true);
      setContactDetails(contact); // Pass contact details to the parent
      handleFormSubmit('contact');
    } else {
      setIsSaved(false);
      alert('Please correct the fields before saving.');
    }
  };

  return (
    <div className="order">
      <fieldset className={isSaved ? 'fieldset-success' : ''}>
        <legend>Contact Details</legend>
        <form onSubmit={handleSubmit}>
          <label>First Name</label>
          <input
            type="text"
            name="firstname"
            value={contact.firstname}
            onChange={handleInputChange}
            className={isValid.firstname ? 'input-success' : ''}
            required
          />
          <label>Surname</label>
          <input
            type="text"
            name="surname"
            value={contact.surname}
            onChange={handleInputChange}
            className={isValid.surname ? 'input-success' : ''}
            required
          />
          <label>Phone Number</label>
          <input
            type="tel"
            name="phone"
            value={contact.phone}
            onChange={handleInputChange}
            className={isValid.phone ? 'input-success' : ''}
            required
            maxLength="10"
          />
          <label>Email Address</label>
          <input
            type="email"
            name="email"
            value={contact.email}
            onChange={handleInputChange}
            className={isValid.email ? 'input-success' : ''}
            required
          />
          <button
            type="reset"
            onClick={() => {
              setContact({ firstname: '', surname: '', phone: '', email: '' });
              setIsValid({ firstname: false, surname: false, phone: false, email: false });
            }}
          >
            Reset
          </button>
          <button type="submit">Save</button>
        </form>
      </fieldset>
    </div>
  );
};

export default ContactDetails;

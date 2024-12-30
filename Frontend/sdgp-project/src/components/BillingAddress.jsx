import React, { useState } from 'react';

const BillingAddress = ({ handleFormSubmit,setBillingDetails }) => {
  const [address, setAddress] = useState({ address1: '', city: '', zip: '', country: '' });
  const [isFieldValid, setIsFieldValid] = useState({ address1: false, city: false, zip: false, country: false });
  const [isFormValid, setIsFormValid] = useState(false);

  const validateField = (name, value) => {
    if (name === 'address1') return value.trim() !== ''; // Address Line 1 required
    if (name === 'city') return /^[a-zA-Z\s]+$/.test(value); // City: Only letters and spaces
    if (name === 'zip') return /^[0-9]{5}$/.test(value); // Zip: 5 digits
    if (name === 'country') return value.trim() !== ''; // Country required
    return true;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // For the ZIP field, remove non-numeric characters
    const sanitizedValue = name === "zip" ? value.replace(/\D/g, "") : value;

    setAddress({ ...address, [name]: sanitizedValue });

    const isValid = validateField(name, sanitizedValue);
    setIsFieldValid((prev) => ({ ...prev, [name]: isValid }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const allValid = Object.values(isFieldValid).every(Boolean);
    if (allValid) {
      setIsFormValid(true);
      setBillingDetails(address); // Pass address details to the parent
      handleFormSubmit('billing');
    } else {
      setIsFormValid(false);
      alert('Please fill in all required fields correctly.');
    }
  };

  return (
    <fieldset className={isFormValid ? 'fieldset-success' : ''}>
      <legend>Billing Address</legend>
      <form onSubmit={handleSubmit}>
        {/* Required Field */}
        <label>Address Line 1 (Required)</label>
        <input
          type="text"
          name="address1"
          value={address.address1}
          onChange={handleInputChange}
          className={isFieldValid.address1 ? 'input-success' : ''}
          required
        />

        {/* Optional Field */}
        <label>Address Line 2 (Optional)</label>
        <input
          type="text"
          name="address2"
          id="billaddress2"
          value={address.address2 || ''}
          onChange={handleInputChange}
        />

        {/* Optional Field */}
        <label>Address Line 3 (Optional)</label>
        <input
          type="text"
          name="address3"
          id="billaddress3"
          value={address.address3 || ''}
          onChange={handleInputChange}
        />

        {/* Required Field */}
        <label>City (Required)</label>
        <input
          type="text"
          name="city"
          value={address.city}
          onChange={handleInputChange}
          className={isFieldValid.city ? 'input-success' : ''}
          required
        />

        <label>State/Country</label>
        <input
          type="text"
          name="state"
          id="statecountry"
          value={address.state || ''}
          onChange={handleInputChange}
        />

        {/* Required Field */}
        <label>Zip Code (Required)</label>
        <input
          type="text"
          name="zip"
          value={address.zip}
          onChange={handleInputChange}
          className={isFieldValid.zip ? 'input-success' : ''}
          required
          maxLength="5"
        />

        {/* Required Field */}
        <label>Country (Required)</label>
        <select
          name="country"
          value={address.country}
          onChange={handleInputChange}
          className={isFieldValid.country ? 'input-success' : ''}
          required
        >
          <option value="">
            Please select
          </option>
          <option value="Sri Lanka">Sri Lanka</option>
          <option value="India">India</option>
        </select>

        <button type="reset" 
        onClick={() => {
          setAddress({address1:"",address2:"",address3:"",city:"",zip:"",country:"",});
          setIsFieldValid({ address1: false, city: false, zip: false, country: false });
        }}>
          Reset
        </button>
        <button type="submit">Save</button>
      </form>
    </fieldset>
  );
};

export default BillingAddress;

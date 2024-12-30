import React, { useState } from "react";

const PaymentDetails = ({ handleFormSubmit }) => {
  const [cardNo, setCardNo] = useState("");
  const [cardHolder, setCardHolder] = useState("");
  const [expDate, setExpDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [isValid, setIsValid] = useState({
    cardNo: false,
    cardHolder: false,
    expDate: false,
    cvv: false,
  });
  const [isSaved, setIsSaved] = useState(false);

  const handleCardNoChange = (e) => {
    const value = e.target.value.replace(/\D/g, ""); // Remove non-numeric characters
    let formattedValue = "";
    for (let i = 0; i < value.length; i++) {
      if (i % 4 === 0 && i > 0) formattedValue += " ";
      formattedValue += value[i];
    }
    setCardNo(formattedValue);
    setIsValid({
      ...isValid,
      cardNo: /^[0-9]{4} [0-9]{4} [0-9]{4} [0-9]{4}$/.test(formattedValue),
    });
  };

  const handleExpDateChange = (e) => {
    let value = e.target.value.replace(/\D/g, ""); // Remove non-numeric characters
    if (value.length > 2) {
      value = value.slice(0, 2) + "/" + value.slice(2, 4); // Format as MM/YY
    }
    setExpDate(value);
    setIsValid({ ...isValid, expDate: /^[0-9]{2}\/[0-9]{2}$/.test(value) }); // Validate format
  };

  const handleCvvChange = (e) => {
    const value = e.target.value.replace(/\D/g, ""); // Remove non-numeric characters
    setCvv(value);
    setIsValid({ ...isValid, cvv: /^[0-9]{3}$/.test(value) }); // Validate format
  };

  const handleInputChange = (name, value) => {
    let isFieldValid = false;

    if (name === "cardHolder") {
      isFieldValid = /^[a-zA-Z\s]+$/.test(value); // Allow only letters and spaces
      setCardHolder(value);
    }

    setIsValid({ ...isValid, [name]: isFieldValid });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(isValid).every(Boolean)) {
      setIsSaved(true);
      handleFormSubmit("payment");
    } else {
      setIsSaved(false);
      alert("Please correct the fields before saving.");
    }
  };

  return (
    <fieldset className={isSaved ? "fieldset-success" : ""}>
      <legend>Payment Details</legend>
      <form onSubmit={handleSubmit}>
        <label>Card Number</label>
        <input
          type="text"
          value={cardNo}
          onChange={handleCardNoChange}
          className={isValid.cardNo ? "input-success" : ""}
          required
          placeholder="1234 1234 1234 1234"
          maxLength="19"
        />
        <label>Cardholder Name</label>
        <input
          type="text"
          value={cardHolder}
          onChange={(e) => handleInputChange("cardHolder", e.target.value)}
          className={isValid.cardHolder ? "input-success" : ""}
          required
          placeholder="S KUMARAGURU"
        />
        <label>Expire Date</label>
        <input
          type="text"
          value={expDate}
          onChange={handleExpDateChange}
          className={isValid.expDate ? "input-success" : ""}
          required
          placeholder="MM/YY"
          maxLength="5"
        />
        <label>CVV</label>
        <input
          type="text"
          value={cvv}
          onChange={handleCvvChange}
          className={isValid.cvv ? "input-success" : ""}
          required
          maxLength="3"
          placeholder="xxx"
        />
        <button 
        type="reset" 
        onClick={() => {
          setCardNo('');
          setCardHolder('');
          setExpDate('');
          setCvv('');
          setIsValid({ cardNo: false, cardHolder: false, expDate: false, cvv: false });
        }}>
          Reset
        </button>
        <button type="submit">Save</button>
      </form>
    </fieldset>
  );
};

export default PaymentDetails;

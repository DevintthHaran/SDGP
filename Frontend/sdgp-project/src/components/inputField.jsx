import React, { useState } from "react";

function InputField({
  label,
  type,
  id,
  value,
  changeFunction,
  className,
  placeholder,
}) {
  const inputStyles = {
    padding: "0.375rem 0.75rem",
    fontSize: "1rem",
    lineHeight: "1.5",
    borderRadius: "0.25rem",
    border: "1px solid #ced4da",
    width: "100%",
  };

  const labelStyles = {
    fontSize: "1rem",
    color: "#6c757d",
    marginBottom: "0.5rem", 
  };

  return (
    <div style={{ marginBottom: "1rem" }}>
      <label htmlFor={id} style={labelStyles}>
        {label}
      </label>
      <input
        type={type}
        id={id}
        value={value}
        onChange={(e) => changeFunction(e.target.value)}
        placeholder={placeholder}
        style={inputStyles}
      />
    </div>
  );
}

export default InputField;

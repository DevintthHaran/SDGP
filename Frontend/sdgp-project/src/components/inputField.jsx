import React from "react";

function InputField({
  label,
  type,
  id,
  value,
  changeFunction,
  placeholder,
  error
}) {
  const inputStyles = {
    padding: "0.375rem 0.75rem",
    fontSize: "1rem",
    lineHeight: "1.5",
    borderRadius: "0.25rem",
    border: error ? "1px solid red" : "1px solid #ced4da",
    width: "90%",
  };

  const labelStyles = {
    fontSize: "1rem",
    color: "#6c757d",
    marginBottom: "0.5rem",
  };

  const errorStyles = {
    color: "red",
    fontSize: "0.8rem",
    marginTop: "0.25rem"
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
      {error && <div style={errorStyles}>{error}</div>}
    </div>
  );
}

export default InputField;
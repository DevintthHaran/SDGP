import React, { useState } from 'react';

function InputField({ label, type, id, changeFunction, className, placeholder }) {
    const [isFocused, setIsFocused] = useState(false);

    return (
        <div className="input-field position-relative mb-3">
            <label htmlFor={id} className={`input-label ${isFocused ? 'hidden' : ''}`}>{label}</label>
            <input
                type={type}
                id={id}
                onChange={(e) => changeFunction(e.target.value)}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                placeholder={placeholder}
                className={`form-control ${className}`}
            />
        </div>
    );
}

export default InputField;
import React, { useState } from 'react';
import InputField from './inputField';

function PersonalDetails() {
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');

    return (
        <div className="PersonalDetails row">
            <div className="col-6">
                <InputField
                    label="First Name"
                    type="text"
                    id="firstname"
                    changeFunction={(value) => setFirstname(value)}
                    className="form-control"
                    placeholder="First Name"
                />
            </div>
            <div className="col-6">
                <InputField
                    label="Last Name"
                    type="text"
                    id="lastname"
                    changeFunction={(value) => setLastname(value)}
                    className="form-control"
                    placeholder="Last Name"
                />
            </div>
        </div>
    );
}

export default PersonalDetails;
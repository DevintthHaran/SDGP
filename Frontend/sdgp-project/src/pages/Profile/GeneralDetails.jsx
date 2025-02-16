import React, { useState } from 'react';
import InputField from './inputField';

function GeneralDetails() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');

    return (
        <div className="general-details row">
            <div className="col-6">
                <InputField
                    label="User"
                    type="text"
                    id="username"
                    changeFunction={(value) => setUsername(value)}
                    className="form-control"
                    placeholder="username"
                />
            </div>
            <div className="col-6">
                <InputField
                    label="Email"
                    type="email"
                    id="email"
                    changeFunction={(value) => setEmail(value)}
                    className="form-control"
                    placeholder="email"
                />
            </div>
        </div>
    );
}

export default GeneralDetails;
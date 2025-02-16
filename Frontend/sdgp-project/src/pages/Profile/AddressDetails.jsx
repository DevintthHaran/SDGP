import React, { useState } from 'react';
import InputField from './inputField';

function AddressDetails() {
    const [addressLine, setAddressLine] = useState('');
    const [state, setState] = useState('');

    return (
        <div className="address-details row">
            <div className="col-6">
                <InputField
                    label="Address Line"
                    type="text"
                    id="addressLine"
                    changeFunction={(value) => setAddressLine(value)}
                    className="form-control"
                    placeholder="Enter address line"
                />
            </div>
            <div className="col-6">
                <InputField
                    label="State"
                    type="text"
                    id="state"
                    changeFunction={(value) => setState(value)}
                    className="form-control"
                    placeholder="Enter state"
                />
            </div>
        </div>
    );
}

export default AddressDetails;
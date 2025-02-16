import React from 'react'
import InputField from './inputField'
import { useState } from 'react'

function SocialDetails() {
    const [firstname, setFacebookProfile] = useState('');
    const [lastname, setLinkedinProfile] = useState('');

    return (
        <div className="PersonalDetails row">
            <div className="col-6">
                <InputField
                    label="Facebook Profile"
                    type="text"
                    id="facebook"
                    changeFunction={(value) => setFacebookProfile(value)}
                    className="form-control"
                    placeholder="Facebook Profile"
                />
            </div>
            <div className="col-6">
                <InputField
                    label="Linkedin Profile"
                    type="text"
                    id="linkedin"
                    changeFunction={(value) => setLinkedinProfile(value)}
                    className="form-control"
                    placeholder="Linkedin Profile"
                />
            </div>
        </div>
    );
}

export default SocialDetails
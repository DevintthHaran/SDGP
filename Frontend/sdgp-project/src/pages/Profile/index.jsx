import React, { useState } from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProfileImage from './assets/Career gui.png'; // Adjust the import path as necessary
import Select from 'react-select';
import SriLankanLangIcon from './assets/Sri lankan.png'; // Adjust the import path as necessary
import EnglishLangIcon from './assets/USA.png'; // Adjust the import path as necessary
import PersonalDetails from './PersonalDetails';
import AddressDetails from './AddressDetails';
import SocialDetails from './SocialDetails';
import GeneralDetails from './GeneralDetails';

function Profile() {
    const languages = [
        { label: "Sinhala", value: "sinhala", img: SriLankanLangIcon },
        { label: "English", value: "english", img: EnglishLangIcon }
    ];
    const tabs = [
        { name: "General", component: <GeneralDetails /> },
        { name: "Personal", component: <PersonalDetails /> },
        { name: "Address", component: <AddressDetails /> },
        { name: "Social", component: <SocialDetails /> },
    ];
    const [activeTab, setActiveTab] = useState(0);
    const [editEnabled, setEditEnabled] = useState(false);
    const [theme, setTheme] = useState(1);
    const [submitted, setSubmitted] = useState(false);
    const [profileData, setProfileData] = useState({});

    const handleUpdate = () => {
        // things that you want to do when user updates the information from profile page i.e. calling API and updating information in server
        alert("information updated");
        setEditEnabled(false);
    };

    const handleSubmit = () => {
        // Collect profile data and set it to profileData state
        const data = {
            // Collect data from each tab component
            // Example:
            // general: generalData,
            // personal: personalData,
            // address: addressData,
            // social: socialData,
        };
        setProfileData(data);
        setSubmitted(true);
    };

    const themeClass = `theme-${theme}-box`;

    return (
        <div className={`row g-0 align-items-center justify-content-center vh-100 ${themeClass}`}>
            <div className="col-10 row g-0 border rounded-3">
                <div className="col-4">
                    <div className="text-center mb-2">
                        <img src={ProfileImage} alt="profile for user" className="img-fluid profile-image mb-1" />
                        <h6>CodeDiggy</h6>
                    </div>
                    <div className="row g-0 justify-content-end my-4 px-3">
                        <input type="file" className="d-none" id="file-input" onChange={(e) => { console.log(e) }} />
                        <label htmlFor="file-input" className="profile-image-action-btn col-auto custom-cursor">Change</label>
                        <button className="col-auto btn btn-danger ms-4 profile-image-action-btn">Delete</button>
                    </div>
                    <div className="border-top p-3">
                        <h5 className="mb-2">Account Setting</h5>
                        <div className="mt-3">
                            <h6 className='mb-3'>Language</h6>
                            <Select
                                options={languages}
                                defaultValue={languages[0]}
                                formatOptionLabel={(option) => {
                                    return (
                                        <div>
                                            <img src={option.img} alt={option.label} className="lang-icon me-2" />
                                            <span>{option.label}</span>
                                        </div>
                                    )
                                }}
                            />
                        </div>
                        <div className="row g-0 mt-3 themes-container">
                            <h6 className="mb-4">Themes</h6>
                            <div className={`theme-1-box ${theme === 1 ? 'selected' : ''}`} onClick={() => setTheme(1)}></div>
                            <div className={`theme-2-box ${theme === 2 ? 'selected' : ''}`} onClick={() => setTheme(2)}></div>
                            <div className={`theme-3-box ${theme === 3 ? 'selected' : ''}`} onClick={() => setTheme(3)}></div>
                        </div>
                    </div>
                </div>
                <div className="col-8 border-start">
                    <div className="row g-0 profile-tabs">
                        {
                            tabs.map((tab, index) => {
                                return (
                                    <div className={`col-3 py-3 ${activeTab === index ? 'active-tab' : ''}`}
                                        onClick={() => { setActiveTab(index) }}
                                        key={index}
                                    >
                                        {tab.name}
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="row g-0 mt-3 p-3">
                        {
                            tabs[activeTab].component
                        }
                    </div>
                    <div className="row g-0 justify-content-end p-3 mt-4">
                        {
                            editEnabled ? (
                                <>
                                    <button className="col-3 edit-profile-btn rounded me-2" onClick={handleUpdate}>UPDATE</button>
                                    <button className="col-3 cancel-btn rounded" onClick={() => { setEditEnabled(false) }}>CANCEL</button>
                                </>
                            ) : (
                                <button className="col-3 edit-profile-btn rounded" onClick={() => { setEditEnabled(true) }}>EDIT</button>
                            )
                        }
                    </div>
                    <div className="row g-0 justify-content-end p-3 mt-4">
                        <button className="col-3 submit-profile-btn rounded" onClick={handleSubmit}>SUBMIT</button>
                    </div>
                </div>
            </div>
            {submitted && (
                <div className="col-10 mt-4">
                    <h3>Profile Report</h3>
                    <pre>{JSON.stringify(profileData, null, 2)}</pre>
                </div>
            )}
        </div>
    );
}

export default Profile;

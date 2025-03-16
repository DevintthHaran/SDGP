import React, { useState } from 'react';
import '../style/JobApply.css';
import NowHiring from '../Images/NowHiring.png';
import Header from '../components/Header.jsx';

function JobApply() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const [position, setPosition] = useState('');
    const [file, setFile] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');
    const [emailError, setEmailError] = useState('');
    const [contactError, setContactError] = useState('');

    const validateForm = () => {
        let valid = true;
        if (!firstName || !lastName || !email || !contactNumber || !position || !file) {
            setErrorMessage('All fields are required.');
            valid = false;
        } else {
            setErrorMessage('');
        }

        if (!/^\d{10}$/.test(contactNumber)) {
            setContactError('Invalid contact number. Must be 10 digits.');
            valid = false;
        } else {
            setContactError('');
        }

        if (!/^[^\s@]+@[^\s@]+$/.test(email)) {
            setEmailError('Invalid email format.');
            valid = false;
        } else {
            setEmailError('');
        }

        return valid;
    };

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile) {
            setFile(selectedFile);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        const formData = new FormData();
        formData.append('firstName', firstName);
        formData.append('lastName', lastName);
        formData.append('email', email);
        formData.append('contactNumber', contactNumber);
        formData.append('position', position);
        formData.append('file', file);

        try {
            const response = await fetch('http://localhost:8080/api/job-apply', {
                method: 'POST',
                body: formData,
            });

            if (!response.ok) {
                throw new Error('Failed to submit application.');
            }

            alert('Form submitted successfully!');
            setFirstName('');
            setLastName('');
            setEmail('');
            setContactNumber('');
            setPosition('');
            setFile(null);
        } catch (error) {
            console.error('Error:', error);
            setErrorMessage('Submission failed. Please try again.');
        }
    };

    return (
        <div className='JobApplication'>
            <Header />
            
            <div className="JobApplication-container">
                <header className="JobApplying-header">
                    <img src={NowHiring} alt="Job Hiring" />
                    <h1>Apply for counselor Job</h1>
                    <h3 id="job-application-message">Scroll down to apply for counselor job</h3>
                    <h2>Join Our Team of Expert Counselors</h2>
                    <p id="job-application-q">🟢 Are you passionate about guiding students, graduates, and professionals toward successful career paths?</p>
                    <p id="job-application-a">- Become a part of Professional Odyssey, Sri Lanka’s premier career guidance platform.</p>
                    <h3>Who Can Apply?</h3>
                    <p>We welcome applications from qualified individuals who have:</p>
                    <ul>
                        <li>A background in career counseling, psychology, education, or related fields.</li>
                        <li>Professional certifications or degrees in counseling or career guidance.</li>
                        <li>Proven experience in mentoring, coaching, or counseling students or professionals.</li>
                    </ul>
                    <h3>Criteria for Application</h3>
                    <p>To ensure a high standard of service for our users, applicants must:</p>
                    <ol>
                        <li>Educational Qualifications: Hold a relevant degree or certification (e.g., Diploma in Counseling, Master's in Psychology, etc.).</li>
                        <li>Professional Experience: Have at least two years of experience in career counseling, education, or HR roles.</li>
                        <li>Communication Skills: Demonstrate strong interpersonal and communication skills, with fluency in English, Sinhala, or Tamil.</li>
                        <li>Technology Skills: Be comfortable using digital tools and platforms for virtual counseling sessions.</li>
                    </ol>
                    <h3>Why Join Us?</h3>
                    <ul>
                        <li>Opportunity to make a meaningful impact on students and professionals.</li>
                        <li>Flexible scheduling to fit your availability.</li>
                        <li>Access to resources and tools for effective career guidance.</li>
                        <li>A platform to expand your reach and build your professional profile.</li>
                    </ul>
                    <h3>How to Apply?</h3>
                    <p>Click the Apply Now button and complete the application form with the following details:</p>
                    <ul>
                        <li>Your personal information and contact details.</li>
                        <li>Your educational qualifications and certifications.</li>
                        <li>A brief summary of your experience and skills.</li>
                        <li>Preferred availability for counseling sessions.</li>
                    </ul>
                </header>

                <form className="CounselorJobForm" onSubmit={handleSubmit}>
                    <h2>Counselor Job Application</h2>

                    <div className="input-group">
                        <div className="input-field">
                            <label>First Name</label>
                            <input 
                                type="text" 
                                placeholder="Your name" 
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                required 
                            />
                        </div>
                        <div className="input-field">
                            <label>Last Name</label>
                            <input 
                                type="text" 
                                placeholder="Your last name" 
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                required 
                            />
                        </div>
                    </div>

                    <div className="input-field">
                        <label>Email Address</label>
                        <input
                            type="email"
                            placeholder="Your E-mail address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        {emailError && <p style={{ color: 'red' }}>{emailError}</p>}
                    </div>

                    <div className="input-field">
                        <label>Contact Number</label>
                        <input
                            type="tel"
                            placeholder="Your 10-digit phone number"
                            value={contactNumber}
                            onChange={(e) => setContactNumber(e.target.value)}
                            required
                        />
                        {contactError && <p style={{ color: 'red' }}>{contactError}</p>}
                    </div>

                    <div className="input-field">
                        <label>Position Applying For</label>
                        <select 
                            name="position"
                            value={position}
                            onChange={(e) => setPosition(e.target.value)}
                            required
                        >
                            <option value="">Select Position</option>
                            <option value="School Student Pathway Selection">School Student Pathway Selection</option>
                            <option value="Career Advisor In All Fields">Career Advisor In All Fields</option>
                            <option value="Career Advisor For IT Field">Career Advisor For IT Field</option>
                            <option value="Career Advisor For Commerce Field">Career Advisor For Commerce Field</option>
                            <option value="Career Advisor For Science Field">Career Advisor For Science Field</option>
                            <option value="Career Advisor For Maths Field">Career Advisor For Maths Field</option>
                            <option value="Career Advisor For Arts Field">Career Advisor For Arts Field</option>
                        </select>
                    </div>

                    <div className="file-upload">
                        <label>Upload Cover Letter and CV</label>
                        <input
                            type="file"
                            accept=".pdf, .docx, .txt"
                            id="fileInput"
                            onChange={handleFileChange}
                            style={{ display: 'none' }}
                        />
                        <div
                            className="upload-box"
                            onClick={() => document.getElementById('fileInput').click()}
                        >
                            <span>{file ? file.name : 'Click to upload'}</span>
                        </div>
                        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
                    </div>

                    <button type="submit" className="submit-button">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default JobApply;

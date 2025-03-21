import React, { useState } from 'react';
import '../style/JobApply.css';
import NowHiring from '../Images/NowHiring.png';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

function JobApply() {
    const [file, setFile] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');

    const handleFileChange = (e) => {
        const uploadedFile = e.target.files[0];
        if (uploadedFile && uploadedFile.size <= 10 * 1024 * 1024) { // 10MB limit
            setFile(uploadedFile);
            setErrorMessage('');
        } else {
            setFile(null);
            setErrorMessage('File must be less than 10MB.');
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!file) {
            setErrorMessage('Please upload a valid CV (less than 10MB).');
            return;
        }
        alert('Form submitted successfully!');
        // Add further submission logic here (e.g., API calls)
    };

    return (
        <div>
        <div className='JobApplication'>
            <Header />
            <div className="JobApplication-container">
                <header className="JobApplying-header">
                    <img src={NowHiring} alt="Job Hiring" />
                    <h1>Apply for counselor Job</h1>
                    {/* <h3 id="job-application-message">Scroll down to apply for counselor job</h3> */}
                    <h2>Join Our Team of Expert Counselors</h2>
                    <p id="job-application-q">Are you passionate about guiding students, graduates, and professionals toward successful career paths?</p>
                    <p id="job-application-a">Become a part of Professional Odyssey, Sri Lanka’s premier career guidance platform.</p>
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
                        <div className="input-field1">
                            <label>First Name</label>
                            <input type="text" placeholder="Your name" required />
                        </div>
                        <div className="input-field1">
                            <label>Last Name</label>
                            <input type="text" placeholder="Your last name" required />
                        </div>
                    </div>

                    <div className="input-field1">
                        <label>Email Address</label>
                        <input type="email" placeholder="Your E-mail address" required />
                    </div>

                    <label>Position You are applying for</label>
                    <div className="job-positions">
                        {[
                            "School Student Pathway Selection",
                            "Career Advisor In All Fields",
                            "Career Advisor For IT Field",
                            "Career Advisor For Commerce Field",
                            "Career Advisor For Science Field",
                            "Career Advisor For Maths Field",
                            "Career Advisor For Arts Field",
                        ].map((position, index) => (
                            <button
                                type="button"
                                key={index}
                                className="job-button"
                                onClick={(e) => e.target.classList.toggle("selected")}
                            >
                                {position}
                            </button>
                        ))}
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
                        <p>PDF DOCX TXT &lt; 10 MB</p>
                        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
                    </div>

                    <button type="submit" className="submit-button">Submit</button>
                </form>
            </div>
        </div>
        <Footer />

        </div>
    );
};

export default JobApply;

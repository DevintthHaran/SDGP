import React, { useState } from 'react';
import axios from 'axios';
import '../style/JobApply.css';
import NowHiring from '../Images/NowHiring.png';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

const JobApply = () => {
    // State to manage form data
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        contactNumber: '',
        position: '',
        fileUrl: '', // Stores the uploaded CV file URL
        status: 'Pending',  // Default status for job applications
        link: '',  // Google Meet link field
    });

    // State variables for error messages and upload status
    const [errorMessage, setErrorMessage] = useState('');
    const [emailError, setEmailError] = useState('');
    const [contactError, setContactError] = useState('');
    const [isUploading, setIsUploading] = useState(false); // Tracks upload progress

    // Handles input field changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Handles file upload to Cloudinary
    const handleFileChange = async (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile) {
            // Validate file type
            const validFileTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
            if (!validFileTypes.includes(selectedFile.type)) {
                setErrorMessage('Invalid file type. Only PDF, DOC, and DOCX are allowed.');
                return;
            }

            setIsUploading(true); // Start file upload status
            const formDataToUpload = new FormData();
            formDataToUpload.append('file', selectedFile);
            formDataToUpload.append('upload_preset', 'cv_preset'); // Cloudinary preset for CV uploads

            try {
                // Upload file to Cloudinary
                const response = await axios.post('https://api.cloudinary.com/v1_1/dq1znqlu6/upload', formDataToUpload);
                
                // Store the file URL in the form data
                setFormData({
                    ...formData,
                    fileUrl: response.data.secure_url,
                });
                setErrorMessage(''); // Reset error message if file is uploaded successfully
            } catch (error) {
                console.error("File upload error:", error);
                setErrorMessage("File upload failed. Please try again.");
            } finally {
                setIsUploading(false); // Reset upload status
            }
        }
    };

    // Form validation function
    const validateForm = () => {
        let valid = true;

        // Check if all required fields are filled
        if (!formData.firstName || !formData.lastName || !formData.email || !formData.contactNumber || !formData.position || !formData.link || !formData.fileUrl) {
            setErrorMessage('All fields are required.');
            valid = false;
        } else {
            setErrorMessage('');
        }

        // Validate contact number (must be exactly 10 digits)
        if (!/^\d{10}$/.test(formData.contactNumber)) {
            setContactError('Invalid contact number. Must be 10 digits.');
            valid = false;
        } else {
            setContactError('');
        }

        // Validate email format
        if (!/^[^\s@]+@gmail\.com$/.test(formData.email)) {
            setEmailError('Email must be a Gmail address.');
            valid = false;
        } else {
            setEmailError('');
        }
        
        return valid;
    };

    // Handles form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validate form before submitting
        if (!validateForm()) return;

        // Create job application object
        const applicationData = {
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email,
            contactNumber: formData.contactNumber,
            position: formData.position,
            fileUrl: formData.fileUrl, // CV file URL
            status: formData.status,  // Default application status
            link: formData.link,  // Google Meet link
        };

        try {
            // Send job application data to backend
            const response = await axios.post("http://localhost:8080/job-apply", applicationData, {
                headers: { "Content-Type": "application/json" }, // JSON request
            });

            // Handle successful submission
            if (response.status === 201) {
                alert("Job application submitted successfully!");
                
                // Reset form fields after submission
                setFormData({
                    firstName: '',
                    lastName: '',
                    email: '',
                    contactNumber: '',
                    position: '',
                    fileUrl: '',
                    status: 'Pending',  
                    link: '',  
                });
            }
        } catch (error) {
            console.error("Submission error:", error);
            alert("Failed to submit application.");
        }
    };

    return (
        <div>
            <div className='JobApplication'>
                <Header />
                <div className="JobApplication-container">
                    <header className="JobApplying-header">
                        <img src={NowHiring} alt="Job Hiring" />
                        <h1>Apply for Counselor Job</h1>
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
                                <input 
                                    type="text" 
                                    placeholder="Your name" 
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    required 
                                />
                            </div>
                            <div className="input-field1">
                                <label>Last Name</label>
                                <input 
                                    type="text" 
                                    placeholder="Your last name" 
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    required 
                                />
                            </div>
                        </div>
                        <div className="input-field1">
                            <label>Email Address</label>
                            <input
                                type="email"
                                placeholder="Your E-mail address"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                            {emailError && <p style={{ color: 'red' }}>{emailError}</p>}
                        </div>
                        <div className="input-field1">
                            <label>Contact Number</label>
                            <input
                                type="tel"
                                placeholder="Your 10-digit phone number"
                                name="contactNumber"
                                value={formData.contactNumber}
                                onChange={handleChange}
                                required
                            />
                            {contactError && <p style={{ color: 'red' }}>{contactError}</p>}
                        </div>
                        <div className="input-field1">
                            <label>Position Applying For</label>
                            <select 
                                name="position"
                                value={formData.position}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Select Position</option>
                                <option value="Science">Science</option>
                                <option value="IT">IT</option>
                                <option value="Business">Business</option>
                                <option value="O Level">O Level</option>
                                <option value="A Level">A Level</option>
                                <option value="Career Advisor For all/any fields">Career Advisor For all/any fields</option>
                            </select>
                        </div>
                        <div className="input-field1">
                            <label>Your Google Booking Link</label>
                            <input
                                type="url"
                                placeholder="Google Meet link"
                                name="link"
                                value={formData.link}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="upload-box">
                            <p>More than one page CV won't be reviewed</p>
                            <label>Upload CV</label>
                            <input 
                                type="file" 
                                accept=".pdf, .doc, .docx" 
                                onChange={handleFileChange} 
                                required 
                            />
                            {isUploading && <p>Uploading file...</p>}
                        </div>
                        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
                        <div className="submit-container"><button className="submit-button" type="submit" disabled={isUploading}>Submit Application</button></div>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default JobApply;

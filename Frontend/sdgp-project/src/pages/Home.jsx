import React from 'react';
import '../style/Home.css';
import Header from '../components/Header.jsx';
// import Footer from '../components/Footer.jsx';
import img1 from '../Images/img1.png';
import img2 from '../Images/img2.png';
import img3 from '../Images/img3.png';
import img4 from '../Images/img4.png';
import video from '../Images/video.mp4';
import video2 from '../Images/video2.mp4';

function Home() {
    return (
        <div>
            <Header />
            <div className="Homecontainer">
                <div id="grid-container1">
                    <div className="box" id="box1">
                        <img id="img1" className="home_img" src={img1} alt="Counselor and a user having online counseling session"></img>
                    </div>
                    <div className="box" id="box2">
                        <h1>Welcome to Professional Odyssey</h1>
                        <h3 id="simplified-goal">Empowering Careers, Transforming Lives</h3>
                        <p>At Professional Odyssey, we bridge the gap between education, employment, and career success. Whether you’re a student exploring career paths, a recent graduate planning your next steps, or a professional looking to enhance your skills, we’re here to guide you every step of the way.</p>
                    </div>
                    <hr className="pageBreakLine" />
                    <br></br>
                    <div className="box" id="box3">
                        <h2>What We Offer</h2>
                        <h3>Personalized Career Guidance</h3>
                        <p>Explore career paths tailored to your unique strengths, interests, and aspirations.</p>
                        <a className="homepage-buttons" href="../Home/Home.html"><span>Check out now</span></a>
                        <h3>One on One Counseling</h3>
                        <p>Connect with expert career counselors to make informed decisions about your future.</p>
                        <a className="homepage-buttons" href="../Home/Home.html"><span>Check out now</span></a>
                        <h3>Job Suggestions</h3>
                        <p>Receive personalized job recommendations based on your skills, interests, and market demand. Find the perfect role that aligns with your career goals.</p>
                        <a className="homepage-buttons" href="../Home/Home.html"><span>Check out now</span></a>
                        <h3>Interview Simulations</h3>
                        <p>Practice with AI-powered 3D interview simulations and gain confidence for real-world interviews.</p>
                        <a className="homepage-buttons" href="../Home/Home.html"><span>Check out now</span></a>
                        <h3>Real-Time Market Trends</h3>
                        <p>Stay ahead of the curve with up-to-date insights into the job market. Explore trending careers, in-demand skills, and emerging opportunities in Sri Lanka and beyond.</p>
                        <a className="homepage-buttons" href="../Home/Home.html"><span>Check out now</span></a>
                        <h3>Skill Assessment</h3>                       
                        <p>Identify your strengths and areas for improvement with detailed skill evaluations. Our assessments are designed to match your abilities with the right career opportunities.</p>
                        <a className="homepage-buttons" href="../Home/Home.html"><span>Check out now</span></a>
                        <h3>Comprehensive Skill Analysis</h3>
                        <p>Gain a detailed breakdown of your skills, highlighting strengths and areas for improvement.</p>  
                        <a className="homepage-buttons" href="../Home/Home.html"><span>Check out now</span></a>
                    </div>
                    <div className="box" id="box4">
                        <div className="box4" id="box4-1">
                            <img id="img2" src={img2} alt="A person going through a website"></img>
                        </div>
                        <div className="box4" id="box4-2">
                            <img id="img3" src={img3} alt="A person going through a website"></img>
                        </div>
                        <div className="box4" id="box4-3">
                            <video width="340px" height="340px" controls>
                                <source src={video} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                        <div className="box4" id="box4-4">
                            <video width="340px" height="340px" controls>
                                <source src={video2} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>

                    </div>
                    <hr className="pageBreakLine" />
                    <br></br>
                    <div className="box" id="box5">
                        <img id="img4" src={img4} alt="People searching for good career guidance platform" ></img>
                    </div>
                    <div className="box" id="box6">
                        <h2>Why Choose Us?</h2>
                        <ul>
                            <li><span>Innovative Tools: </span>Our platform integrates the latest technology, including AI and machine learning, to provide cutting-edge solutions.</li>
                            <li><span>Comprehensive Support: </span>From exploring education pathways to enhancing job readiness, we’re your all-in-one career companion.</li>
                            <li><span>Localized Insights: </span>Designed to address the unique challenges of students and graduates in Sri Lanka, with resources that align with local opportunities and global standards</li>
                        </ul>
                    </div>
                    <hr className="pageBreakLine" />
                    <br></br>
                </div>
                <div id="grid-container2">
                    <h3>Get Started Today!</h3>
                    <p>Create your account and unlock access to our range of tools and services. Your journey to success begins with Professional Odyssey.</p>
                    <div className="sign-up-button-div" ><a className="sign-up-button" href="../Home/Home.html"><span>Sign up</span></a></div>
                </div>
            </div>
            {/* <Footer /> */}
        </div>
    );
};

export default Home;

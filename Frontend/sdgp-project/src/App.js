import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Splash from './pages/Splash';
import Home from './pages/Home';
import Shop from './pages/Shop';         // Import the Shop page
import Order from './pages/Order';
import Subscription from './pages/Subscription';
import Meeting from './pages/Meeting';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Profile from './pages/Profile';
import Question from './pages/Question';
import Chat from './pages/Chat';

import JobApply from './pages/JobApply';
import Admin from './pages/Admin';

import Setting from './pages/Setting';
import Feedback from './pages/Feedback';

import SkillAssessment from './pages/SkillAssessment';
import CareerAssessment from './pages/CareerAssessment';


//Import Specific  Catergory Meeting Pages
import ITMeeting from './pages/ITMeeting';
import ScienceMeeting from './pages/ScienceMeeting';
import BusinessMeeting from './pages/BusinessMeeting';
import OLevelMeeting from './pages/OLevelMeeting';
import ALevelMeeting from './pages/ALevelMeeting'; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/job" element={<JobApply />} />
        {/* Define the route for the homepage */}  
        <Route path="/Splash" element={<Splash />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/skill" element={<SkillAssessment/>}/>
        <Route path="/career" element={<CareerAssessment/>}/>
        {/* Define the Pages related to counseling */}
        
        <Route path="/admin" element={<Admin />} />
        {/* Define the route for the Shop page */}
        <Route path="/shop" element={<Shop />} />
        {/* Define the route for the Order page */}
        <Route path='/order' element={<Order/>}/>
        {/* Define the route for the Subscription page */}
        <Route path='/subscription' element={<Subscription/>}/>
        {/* Define the route for the Meeting pages */}
        <Route path='/meeting' element={<Meeting/>}/>

        {/* Define the route for the Question pages */}
        <Route path='/question' element={<Question/>}/>
        <Route path='/chat' element={<Chat/>}/>


        <Route path='/setting' element={<Setting/>}/>
        <Route path='/feedback' element={<Feedback/>}/>
        <Route path='/profile' element={<Profile/>}/>

        {/* Define the route for the Specific Meeting pages */}
        <Route path="/it-meeting" element={<ITMeeting/>} />
        <Route path="/science-meeting" element={<ScienceMeeting />} />
        <Route path="/business-meeting" element={<BusinessMeeting />} />
        <Route path="/olevel-meeting" element={<OLevelMeeting />} />
        <Route path="/alevel-meeting" element={<ALevelMeeting />} />        
      </Routes>
    </Router>
  );
}

export default App;

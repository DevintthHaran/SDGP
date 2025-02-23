import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage'; // Import the HomePage
import Shop from './pages/Shop';         // Import the Shop page
import Order from './pages/Order';
import Subscription from './pages/Subscription';
import Meeting from './pages/Meeting';

import Question from './pages/Question';
import Chat from './pages/Chat';

import Setting from './pages/Setting';
import Feedback from './pages/Feedback';


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
        {/* Define the route for the homepage */}
        <Route path="/" element={<HomePage />} />
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

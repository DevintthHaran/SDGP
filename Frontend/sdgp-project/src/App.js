import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Shop from './pages/Shop';
import SkillAssessment from './pages/SkillAssessment';
import Meeting from './pages/Meeting';
import ITMeeting from './pages/ITMeeting';
import ScienceMeeting from './pages/ScienceMeeting';
import BusinessMeeting from './pages/BusinessMeeting';
import OLevelMeeting from './pages/OLevelMeeting';
import ALevelMeeting from './pages/ALevelMeeting'; 
import Chat from './pages/Chat';
import CareerAssessment from './pages/CareerAssessment';
import JobApply from './pages/JobApply';
import Profile from './pages/Profile';
import Setting from './pages/Setting';
import Feedback from './pages/Feedback';
import Experience from './pages/Experience';
import Order from './pages/Order';
import Admin from './pages/Admin';
import Signup from './pages/Signup';
import Subscription from './pages/Subscription';
import Simulation from './pages/Simulation';
import NotFound from './pages/NotFound';
import Login from './pages/Login';
import Splash from './pages/Splash';

import ProtectedRoute from "./components/ProtectedRoute";

import CareerTrend from './pages/CareerTrend';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Splash />} />
        <Route path='/home' element={<Home />} />
        <Route path='/shop' element={<ProtectedRoute><Shop /></ProtectedRoute>} />
        <Route path="/skill" element={<ProtectedRoute><SkillAssessment /></ProtectedRoute>} />
        <Route path='/meeting' element={<ProtectedRoute><Meeting /></ProtectedRoute>} />
        <Route path="/it-meeting" element={<ProtectedRoute><ITMeeting /></ProtectedRoute>} />
        <Route path="/science-meeting" element={<ProtectedRoute><ScienceMeeting /></ProtectedRoute>} />
        <Route path="/business-meeting" element={<ProtectedRoute><BusinessMeeting /></ProtectedRoute>} />
        <Route path="/olevel-meeting" element={<ProtectedRoute><OLevelMeeting /></ProtectedRoute>} />
        <Route path="/alevel-meeting" element={<ProtectedRoute><ALevelMeeting /></ProtectedRoute>} />
        <Route path='/chat' element={<ProtectedRoute><Chat/></ProtectedRoute>}/>
        <Route path="/career" element={<ProtectedRoute><CareerAssessment/></ProtectedRoute>}/>
        <Route path="/job" element={<ProtectedRoute><JobApply /></ProtectedRoute>} />
        <Route path='/profile' element={<ProtectedRoute><Profile/></ProtectedRoute>}/>

        <Route path='/setting' element={<Setting/>}/>
        <Route path='/feedback' element={<ProtectedRoute><Feedback/></ProtectedRoute>}></Route>
        <Route path='/report' element={<ProtectedRoute><Experience /></ProtectedRoute>}/>
        <Route path='/order' element={<ProtectedRoute><Order /></ProtectedRoute>}/>
        <Route path='/admin' element={<ProtectedRoute><Admin/></ProtectedRoute>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/subscription' element={<ProtectedRoute><Subscription/></ProtectedRoute>}/>
        <Route path='/simulation' element={<ProtectedRoute><Simulation/></ProtectedRoute>}/>
        <Route path='*' element={<NotFound/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/careertrend' element={<ProtectedRoute><CareerTrend/></ProtectedRoute>}/>
        
      </Routes>
    </Router>
  );
}

export default App;

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

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route path="/skill" element={<SkillAssessment />} />
        <Route path='/meeting' element={<Meeting />} />
        <Route path="/it-meeting" element={<ITMeeting />} />
        <Route path="/science-meeting" element={<ScienceMeeting />} />
        <Route path="/business-meeting" element={<BusinessMeeting />} />
        <Route path="/olevel-meeting" element={<OLevelMeeting />} />
        <Route path="/alevel-meeting" element={<ALevelMeeting />} />
        <Route path='/chat' element={<Chat/>}/>
        <Route path="/career" element={<CareerAssessment/>}/>
        <Route path="/job" element={<JobApply />} />
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/setting' element={<Setting/>}/>
        <Route path='/feedback' element={<Feedback/>}></Route>
        <Route path='/report' element={<Experience />}/>
        <Route path='/order' element={<Order />}/>
        <Route path='/admin' element={<Admin/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/subscription' element={<Subscription/>}/>
        <Route path='/simulation' element={<Simulation/>}/>
        <Route path='*' element={<NotFound/>}/>
        <Route path='/login' element={<Login/>}/>
        
      </Routes>
    </Router>
  );
}

export default App;

import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProfileView from './pages/Profile/ProfileView';
import './App.css';
import Profile from './pages/Profile';
function App() {
  return (
   <div>
    
    
    {/* <Profile/> */}
    
    <Router>
      <Routes>
        <Route path="/" element={<Profile/>} />
        <Route path="/profile" element={<ProfileView/>} />
      </Routes>
      </Router>

   </div>
   
  );
}

export default App;

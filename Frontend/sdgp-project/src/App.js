import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage'; // Import the HomePage
import Shop from './pages/Shop';         // Import the Shop page
import Order from './pages/Order';
import Subscription from './pages/Subscription';
import Feedback from './components/Feedback';

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
        {/* Define the route for the Feedback page */}
        <Route path='/feedback' element={<Feedback/>}/>
      </Routes>
    </Router>
  );
}

export default App;

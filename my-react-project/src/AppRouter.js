import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import App from './App'
import Profile from './pages/Profile';

function AppRouter() {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path="/pages/Profile" element={<Profile />} />
        <Route path="/App" element={<App />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
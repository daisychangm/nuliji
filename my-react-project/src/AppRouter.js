import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import Profile from './Profile';

function AppRouter() {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path="/Profile" element={Profile} />
        <Route path="/App" element={App} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
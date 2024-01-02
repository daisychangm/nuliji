import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Decor from './pages/Decor';
import Themes from './pages/Themes';
import Profile from './pages/Profile';
import Friends from './pages/Friends';
import Settings from './pages/Settings';

function NavRouter() {
  return (
    <div>
      <NavBar/>
      <Routes>
        <Route path='/Home' element={<Home />} />
        <Route path='/Decor' element={<Decor />} />
        <Route path='/Themes' element={<Themes />} />
        <Route path='/Profile' element={<Profile />} />
        <Route path='/Friends' element={<Friends />} />
        <Route path='/Settings' element={<Settings />} />
      </Routes>
    </div>
  );
}


export default NavRouter;
import './App.css';
import NavBar from './NavBar';
import { BrowserRouter as Router, Routes, Route }
from 'react-router-dom';
import Home from './pages';
import Decor from './pages/Decor'
import Themes from './pages/Themes'
import Profile from './pages/Profile'
import Friends from './pages/Friends'
import Settings from './pages/Settings'

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Decor' element={<Decor />} />
        <Route path='/Themes' element={<Themes />} />
        <Route path='/Profile' element={<Profile />} />
        <Route path='/Friends' element={<Friends />} />
        <Route path='/Settings' element={<Settings />} />
      </Routes>
    </Router>
    
  );
}

export default App;

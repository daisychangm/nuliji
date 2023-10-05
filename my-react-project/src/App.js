import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Pages
import StartPage from './pages'
import LogIn from './pages/LogIn'
import SignUp from './pages/SignUp'
import Home from './pages/Home'
import Decor from './pages/Decor'
import Themes from './pages/Themes'
import Profile from './pages/Profile'
import Friends from './pages/Friends'
import Settings from './pages/Settings'

//Components
import NavBar from './components/NavBar';
import NavBarToggle from './components/NavBarToggle'

function App() {
  return (
    <Router>
      <NavBarToggle>
        <NavBar />
      </NavBarToggle>

      <Routes>
        <Route path='/' element={<StartPage />} />
        <Route path='/LogIn' element={<LogIn />} />
        <Route path='/SignUp' element={<SignUp />} />
        <Route path='/Home' element={<Home />} />
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

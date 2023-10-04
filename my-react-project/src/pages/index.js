import React from 'react';
import { Link } from 'react-router-dom';

// Images
import logo from '../images/logo.png';
 
const StartPage = () => {
    return (
        <div>
            <h1 style={{textAlign: 'center'}}>welcome to</h1>
            <img src={logo} alt="Logo image" />
            <Link to="/Home">
                <button className='startButton'></button>
            </Link>
        </div>
    );
};
 
export default StartPage;
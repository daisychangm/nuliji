import React from 'react';
import { Link } from 'react-router-dom';

// Images
import logo from '../images/logo.png';
import start from '../images/start-default.png';
 
const StartPage = () => {
    return (
        <div className='flex items-center flex-col'>
            <h1 className=''>welcome to</h1>
            <img src={logo} alt="Logo image" />

            <div className='w-20'>
                <Link to="/Home">
                    <button>
                        <img src={start} alt="Start image" />
                    </button>
                </Link>
                
            </div>
        </div>
    );
};
 
export default StartPage;
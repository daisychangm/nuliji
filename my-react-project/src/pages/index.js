import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Images
import logo from '../images/logo.png';
import start from '../images/start-default.png';
import hoverStart from '../images/start-hover.png' 

const StartPage = () => {
    const [buttonImage, setButtonImage] = useState(start);

    const handleHover = () => {
        setButtonImage(hoverStart);
    }

    const handleHoverOut = () => {
        setButtonImage(start);
    }

    return (
        <div className='flex items-center flex-col'>
            <h1 style={{ marginTop: '25vh', marginBottom: '0%' }}>welcome to</h1>
            <img src={logo} style={{display: 'block', margin: 'auto', width: '350px', height: 'auto' }}/>

            <div className='w-40'>
                <Link to="/Access">
                    <button>
                        <img 
                        src={buttonImage}
                        onMouseOver={handleHover}
                        onMouseOut={handleHoverOut}
                    />
                    </button>
                </Link>
                
            </div>
        </div>
    );
};
 
export default StartPage;
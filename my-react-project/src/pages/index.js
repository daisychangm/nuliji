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
            <h1 className=''>welcome to</h1>
            <img src={logo} />

            <div className='w-20'>
                <Link to="/Home">
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
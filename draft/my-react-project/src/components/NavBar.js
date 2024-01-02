import React, { useEffect, useState} from 'react';
import { Link, useLocation } from 'react-router-dom'

// Components
import DecorToggle from './DecorToggle';

function NavBar() {
    const location = useLocation();
    const [activeButton, setActiveButton] = useState('');

    useEffect(() => {
        const { pathname } = location;
        setActiveButton(pathname);
    }, [location]);

    return (
        <div className="navbar">
            <ul>
                <li><Link to="/Home">
                        <button className="btn btn-home" id={activeButton === '/Home' ? 'active' : ''}></button>
                    </Link></li>
                <li><Link to={activeButton === '/Decor' ? '/Home' : '/Decor'}>
                        <button className="btn btn-decor" id={activeButton === '/Decor' ? 'active-decor' : ''}></button>
                    </Link></li>
                <DecorToggle>
                <li><Link to="/Themes">
                        <button className="btn btn-themes" id={activeButton === '/Themes' ? 'active' : ''}></button>
                    </Link></li>
                <li><Link to="/Profile">
                        <button className="btn btn-profile" id={activeButton === '/Profile' ? 'active' : ''}></button>
                    </Link></li>
                <li><Link to="/Friends">
                        <button className="btn btn-friends" id={activeButton === '/Friends' ? 'active' : ''}></button>
                    </Link></li>
                <li><Link to="/Settings">
                        <button className="btn btn-settings" id={activeButton === '/Settings' ? 'active' : ''}></button>
                    </Link></li>
                </DecorToggle>
            </ul>
        </div>
    );
}

export default NavBar;
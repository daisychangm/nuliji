import React, { useEffect, useState} from 'react';
import { Link, useLocation } from 'react-router-dom'

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
                <li><Link to="/">
                        <button className="btn btn-home" ID={activeButton === '/' ? 'active' : ''}></button>
                    </Link></li>
                <li><Link to="/Decor">
                        <button className="btn btn-decor" ID={activeButton === '/Decor' ? 'active-decor' : ''}></button>
                    </Link></li>
                <li><Link to="Themes">
                        <button className="btn btn-themes" ID={activeButton === '/Themes' ? 'active' : ''}></button>
                    </Link></li>
                <li><Link to="/Profile">
                        <button className="btn btn-profile" ID={activeButton === '/Profile' ? 'active' : ''}></button>
                    </Link></li>
                <li><Link to="/Friends">
                        <button className="btn btn-friends" ID={activeButton === '/Friends' ? 'active' : ''}></button>
                    </Link></li>
                <li><Link to="/Settings">
                        <button className="btn btn-settings" ID={activeButton === '/Settings' ? 'active' : ''}></button>
                    </Link></li>
            </ul>
        </div>
    );
}

export default NavBar;
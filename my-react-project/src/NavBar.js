import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'

function NavBar() {
    return (
        <div className="navbar">
            <ul>
                <li><button className="btn btn-home"></button></li>
                <li><button className="btn btn-gadgets"></button></li>
                <li><button className="btn btn-theme"></button></li>
                <li><Link to="/Profile"><button className="btn btn-profile"></button></Link></li>
                <li><button className="btn btn-friends"></button></li>
                <li><button className="btn btn-settings"></button></li>
            </ul>
        </div>
    );
}

export default NavBar;
import React from 'react';
import { Link } from 'react-router-dom'
import NavRouter from '../NavRouter'
 
const StartPage = () => {
    return (
        <div>
            <h1>Welcome to Nuliji!</h1>
            <Link to="/Home">
                <button>Begin</button>
            </Link>
        </div>
    );
};
 
export default StartPage;
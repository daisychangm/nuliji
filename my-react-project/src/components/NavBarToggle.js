import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';

const NavBarToggle = ({children}) => {
    const location = useLocation();
    const [showNavBar, setShowNavBar] = useState(false);

        useEffect(() => {
            setShowNavBar(location.pathname !== '/' && location.pathname !== '/LogIn' && location.pathname !== '/SignUp')
        }, [location]);
    return showNavBar ? <div>{children}</div> : null;
};
 
export default NavBarToggle;
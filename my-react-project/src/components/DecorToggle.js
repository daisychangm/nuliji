import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';

const DecorToggle = ({children}) => {
    const location = useLocation();
    const [showButtons, setShowButtons] = useState(false);

        useEffect(() => {
            setShowButtons(location.pathname !== '/Decor')
        }, [location]);
    return showButtons ? <div>{children}</div> : null;
};
 
export default DecorToggle;
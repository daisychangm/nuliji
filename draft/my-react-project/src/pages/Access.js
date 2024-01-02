import React, { useState } from 'react';
import LogIn from './LogIn'
import SignUp from './SignUp'

function Access() {
    const [currentForm, setCurrentForm] = useState('login');

    const toggleForm = (formName) => {
      setCurrentForm(formName);
    }

    return (
        <div>
            {
            currentForm === 'login' ? <LogIn onFormSwitch={toggleForm} /> : <SignUp onFormSwitch={toggleForm} />
            }
        </div>
    );
}

export default Access;
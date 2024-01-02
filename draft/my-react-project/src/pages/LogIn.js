import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const LogIn = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    // User Login info

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div style={{ textAlign: 'center', marginTop: '30vh'}}>
            <h1 style={{ fontSize: '30px' }}>Log In</h1>
            
            <div className='auth-form-container'>
                <form onSubmit={handleSubmit}>
                    <input 
                        value={email} onChange={(e) => setEmail(e.target.value)}
                        type='email'
                        placeholder='email'
                        id='email'
                        name='email'
                    />
                    <br />
                    <input 
                        value={pass} onChange={(e) => setPass(e.target.value)}
                        type='password'
                        placeholder='password'
                        id='password'
                        name='password'
                    />
                    <br />
                    <Link to="/Home">
                        <button type='submit' style={{ marginTop: '20px', paddingLeft: '10px', paddingRight: '10px', border: '5px solid black', borderRadius: '10px' }}>Log In</button>
                    </Link>
                </form>
            </div>

            <br />
            Don't have an account? <button className='btn-link' onClick={() => props.onFormSwitch('signup')}>Sign up here</button>
            
        </div>
    );
};
 
export default LogIn;
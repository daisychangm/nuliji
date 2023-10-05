import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const LogIn = () => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div style={{ textAlign: 'center', marginTop: '30vh'}}>
            <h1 style={{ fontSize: '30px' }}>Log In</h1>

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

            <br />
            Don't have an account? <Link to="/SignUp">Sign up here</Link>
            
        </div>
    );
};
 
export default LogIn;
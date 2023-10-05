import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignUp = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [username, setUsername] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div className='flex items-center justify-center h-screen'>
            <div className='text-center mt-[-30px]'>
                <h1 style={{ fontSize: '30px' }}>Sign Up</h1>

                <div className='auth-form-container'>
                    <form onSubmit={handleSubmit}>
                        <input 
                            value={username} onChange={(e) => setUsername(e.target.value)}
                            type='username'
                            placeholder='username'
                            id='username'
                            name='username'
                        />
                        <br />
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
                            <button type='submit' style={{ marginTop: '20px', paddingLeft: '10px', paddingRight: '10px', border: '5px solid black', borderRadius: '10px' }}>Enter</button>
                        </Link>
                    </form>
                </div>
                <br />
                Already have an account? <button className='btn-link' onClick={() => props.onFormSwitch('login')}>Log in here</button>
            </div>
        </div>
    );
};
 
export default SignUp;
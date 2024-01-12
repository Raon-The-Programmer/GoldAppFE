import React, { useState } from 'react';
import './signup.css';
import { Link } from 'react-router-dom';

import signup from '../services/auth';

const Signup = () => {
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSignup = async (e) => {
        e.preventDefault();
        const user = {
            name,
            username,
            password
        };
        signup(user)

        setName('')
        setUsername('')
        setPassword('')
        console.log(user)

    }

    return (
        <div>
            <h3>Register</h3>
            <form action="submit" className='register' onSubmit={handleSignup}>
                <input type="email" placeholder='Email..' required value={username} onChange={(e) => { setUsername(e.target.value) }} />
                <input type="text" placeholder='Name..' required value={name} onChange={(e) => { setName(e.target.value) }} />
                <input type="text" placeholder='Password..' required value={password} onChange={(e) => { setPassword(e.target.value) }} />
                <div>
                    <br />
                    <button type="submit">Register</button>
                </div>
            </form>
            <p>Already Registered? <Link to='/signin'>Signin</Link></p>
        </div>
    );
}

export default Signup;

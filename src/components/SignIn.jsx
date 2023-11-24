import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../services/auth';
import { useDispatch } from 'react-redux';

function SignIn() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSignIn = async (e) => {
        e.preventDefault();

        // perform signin
        const user = auth.signin({ email, password });

        console.log(user);

        setEmail('');
        setPassword('');

        if(user) {
            await dispatch({ type: 'SIGNIN_SUCCESS', payload: user });
        }

        navigate('/dashboard');
    }

  return (
      <div>
          <h3>Login</h3>

          <form onSubmit={handleSignIn}>
              <div>
                  <input 
                    type='email'
                      placeholder='email...'
                      value={email}
                        onChange={(e) => setEmail(e.target.value)}
                  />
              </div>

              <div>
                  <input 
                    type='password'
                      placeholder='password...'
                        value={password}
                            onChange={(e) => setPassword(e.target.value)}
                  />
              </div>
                <br />  
              <div>
                <button type='submit'>Sign In</button>
              </div>
          </form>

          <p>Don't have an account? <Link to='/signup'>Sign Up</Link></p>
    </div>
  )
}

export default SignIn;
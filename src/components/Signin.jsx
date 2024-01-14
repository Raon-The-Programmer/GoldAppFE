import React, { useState } from 'react';
import './signup.css';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../services/auth';
import { useDispatch } from 'react-redux';

const Signin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [username, setusername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignin = async (e) => {
    e.preventDefault();
    const user = await auth.signin({ username, password });

    if (user) {
      await dispatch({ type: 'SIGNIN_SUCCESS', payload: user });
      navigate('/dashboard');
    }

    setPassword('');
    setusername('');
    console.log(user);
  };

  return (
    <div className="glassmorphism-background signin-container">
     <div><h3 className="text-dark">Sign In</h3></div> 
      <form className="signin-form bg-white p-3 d-flex flex-column align-items-center rounded-2" onSubmit={handleSignin}>
        <input
          className="form-control mb-2 "
          type="text"
          required
          placeholder="Email.."
          value={username}
          onChange={(e) => {
            setusername(e.target.value);
          }}
        />
        <input
          className="form-control"
          type="password"
          required
          placeholder="Password.."
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <div>
          <br />
          <button className="btn btn-success">Sign In</button>
        </div>
        <p className="text-dark mt-2 ms-2">
          Not a user? <Link className="btn btn-dark ms-2" to="/signup">
            Register
          </Link>
        </p>
        <Link to="/forgotpassword" className="btn text-danger">
          Forgot Password?
        </Link>
      </form>
    </div>
  );
};

export default Signin;

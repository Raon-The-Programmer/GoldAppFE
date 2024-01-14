import React, { useState } from 'react';
import './signup.css';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../services/auth';
import Navbar from './Navbar';

const Signup = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();
    const user = {
      name,
      username,
      password,
    };
    if (auth.signup(user)) {
      navigate('/signin');
      setName('');
      setUsername('');
      setPassword('');
      console.log(user);
    }
  };

  return (
    <div className="glassmorphism-background signup-container ">
      <Navbar />
      <form className="signup-form bg-white rounded p-3" onSubmit={handleSignup}>
        <div>
          <label htmlFor="email">
            <strong>Email</strong>
          </label>
          <input
            className="form-control mb-2"
            type="email"
            placeholder="Email.."
            required
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor="name">
            <strong>Name</strong>
          </label>
          <input
            className="form-control mb-2"
            type="text"
            placeholder="Name.."
            required
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor="password">
            <strong>Password</strong>
          </label>
          <input
            className="form-control mb-2"
            type="password"
            placeholder="Password.."
            required
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <div>
          <button type="submit" className="btn btn-success">
            Register
          </button>
        </div>
        <p className="text-dark mt-2 ms-6 mr-">
          Already Registered?{' '}
          <Link to="/signin" className="btn text-light bg-dark">
            Sign in
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;

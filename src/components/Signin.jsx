import React, { useState } from 'react'
import './signup.css'
import { Link, useNavigate } from 'react-router-dom'
import auth from '../services/auth';
import { useDispatch } from 'react-redux'


const Signin = () => {
    const dispatch  = useDispatch()
    const navigate = useNavigate()
    const [username,setusername] = useState('')
    const [password,setPassword] = useState('')
    const handleSignin = async (e) => {
      e.preventDefault();
    
      try {
        const user = await auth.signin({ username, password });
    
        if (user) {
          await dispatch({ type: 'SIGNIN_SUCCESS', payload: user });
          navigate('/dashboard');
        }
    
        setPassword('');
        setusername('');
        console.log(user);
      } catch (error) {
        console.error('Error in handleSignin:', error);
    
        // Handle the error, display a message to the user, or take appropriate action
        // For example, you might want to dispatch a SIGNIN_FAILURE action
        // dispatch({ type: 'SIGNIN_FAILURE', payload: error.message });
      }
    };
    

  return (
    <div className='bg-primary vh-100 d-flex flex-column justify-content-center align-items-center'>
        <h3 className='text-light'>Sign In</h3>
        <form className='bg-white p-3 d-flex flex-column align-items-center rounded-2' action="submit"  onSubmit={handleSignin}>
            <input className='form-control mb-2 ' type="text" required placeholder='Email..' value={username} onChange={(e)=>{setusername(e.target.value)}}/>
            <input className='form-control' type="text" required placeholder='Password..' value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
            <div><br /><button className='btn btn-success'>signUp</button></div>
            <p className='text-dark mt-2 ms-2'>Not a user? <Link className='btn btn-dark ms-2' to='/signup'>Register</Link></p>
        <Link to='/forgotpassword' className='btn text-danger '>Forgot Password?</Link>
        </form>
        
       
    </div>
  )
}

export default Signin
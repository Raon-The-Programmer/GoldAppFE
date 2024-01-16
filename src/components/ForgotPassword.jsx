import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import auth from '../services/auth'

const ForgotPassword = () => {
  const navigate = useNavigate()
  const [email,setemail] = useState('')
  const handleMail = async (e) => {
    e.preventDefault();
    try {
      await auth.forgotpassword({ email });
      navigate('/signin');
      setemail('');
    } catch (error) {
      console.log('Error in handleMail:', error);
    }
  };
  return (
    <div className='bg-primary vh-100 d-flex flex-column justify-content-center align-items-center'>
        <h3 className='text-light'>Forgot Password</h3>
        <form className='bg-white p-3 pt-4 d-flex flex-column align-items-center rounded-2' action="submit" >

            <input className='form-control mb-2 ' value={email} onChange={(e)=>setemail(e.target.value)} type="text" required placeholder='Email..'/>
        </form>
        
      <button onClick={handleMail} className='btn btn-dark ms-2 mt-3'>Send Mail</button>

    </div>
  )
}

export default ForgotPassword
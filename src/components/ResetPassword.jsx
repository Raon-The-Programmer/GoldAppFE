import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import auth from '../services/auth';

const ResetPassword = () => {
  const navigate = useNavigate();
  const { id, token } = useParams();
  const [newPassword, setNewPassword] = useState('');

  const handleResetPassword = async (e) => {
    e.preventDefault();

    try {
      const res = await auth.resetPassword({ userId: id, token, newPassword });
        console.log("Hiiii")
      console.log('Password reset successful');
      navigate('/signin');
    } catch (error) {
      console.error('Password reset failed', error);
    }
  };

  return (
    <div className='bg-primary vh-100 d-flex flex-column justify-content-center align-items-center'>
      <h3 className='text-light'>Reset Password</h3>
      <form className='bg-white p-3 pt-4 d-flex flex-column align-items-center rounded-2' onSubmit={handleResetPassword}>
        <input
          className='form-control mb-2'
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          type='password'
          required
          placeholder='New Password..'
        />
        <button type='submit' className='btn btn-dark ms-2 mt-3'>
          Reset Password
        </button>
      </form>
    </div>
  );
};

export default ResetPassword;

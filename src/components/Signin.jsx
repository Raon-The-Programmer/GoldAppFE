import React, { useState } from 'react'
import './signup.css'
import { Link, useNavigate } from 'react-router-dom'
import signin from '../services/auth'
import { useDispatch } from 'react-redux'
const dispatch  = useDispatch()
const navigate = useNavigate()

const Signin = () => {
    const [username,setusername] = useState('')
    const [password,setPassword] = useState('')
    const handleSignin =async(e)=>{
        e.preventDefault()
        const user = signin({username,password})
        console.log(user)
        if(user){
            dispatch({type:'SIGNIN_SUCCESS',payload:user})
            
        }
        navigate('/dashboard')
        console.log(user)
        setPassword('')
        setusername('')
    }

  return (
    <div>
        <h3>Sign Up</h3>
        <form action="submit" className='register' onSubmit={handleSignin}>
            <input type="text" required placeholder='Email..' value={username} onChange={(e)=>{setusername(e.target.value)}}/>
            <input type="text" required placeholder='Password..' value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
            <div><br /><button>signUp</button></div>
        </form>
        <p>Not a user? <Link to='/signup'>Register</Link></p>
    </div>
  )
}

export default Signin
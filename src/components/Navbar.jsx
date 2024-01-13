import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <nav>
            <ul className='d-flex justify-content-center align-items-center'>
                <li className='mx-5'>
                    <NavLink to='/'>Home</NavLink>
                </li>
                <li>
                    <NavLink to='/signup'>Register</NavLink>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar
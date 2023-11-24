import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import userServices from '../services/users';

function Dashboard() {

    const [userProfile, setUserProfile] = useState({});
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // get the profile of the user
    useEffect(() => {
        userServices.getProfile(dispatch)
            .then((data) => {
                console.log(data);
                setUserProfile(data);
            })
            .catch((err) => {
                console.log(err);
                navigate('/signin');
            });
    }, []);

    const handleLogout = () => {
        sessionStorage.removeItem('loggedInUser');

        setUserProfile({});

        dispatch({ type: 'USER_LOGOUT' });

        navigate('/signin');
    }

  return (
      <div>
          <h3>Dashboard</h3>
          <p><b><i>{userProfile.name}</i></b> has signed in! <button onClick={handleLogout}>logout</button></p> 
          
          <ul>
              <li>
                  <NavLink to='/viewProfile'>View Profile</NavLink>
              </li>
          </ul>
    </div>
  )
}

export default Dashboard;
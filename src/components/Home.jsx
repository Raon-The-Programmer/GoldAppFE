import React from 'react';
import NavBar from './NavBar';

function Home() {
  return (
      <div>
          <NavBar />
          <h2>Welcome to the React Application</h2>
          <p>This application allows users to register, login, and view the list of users registered in the app.</p>

          <p>
              Moreover, the authenticated users can then:
          </p>
          <ul>
            <li>View their profile in the dashboard</li>
            <li>Edit Profile</li>
            <li>Delete Profile</li>
        </ul>
      </div>
  )
}

export default Home;
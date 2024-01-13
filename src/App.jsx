import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Home from './components/Home'
import Signup from './components/Signup'
import Signin from './components/Signin'
import Dashboard from './components/Dashboard'
import 'bootstrap/dist/css/bootstrap.min.css'
import ForgotPassword from './components/ForgotPassword'
import ResetPassword from './components/ResetPassword'

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/signin' element={<Signin/>}></Route>
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/forgotpassword' element={<ForgotPassword/>}/>
          <Route path='/resetpassword/:id/:token' element={<ResetPassword/>}/>
        </Routes>
      </div>
    </Router>
    
  )
}

export default App
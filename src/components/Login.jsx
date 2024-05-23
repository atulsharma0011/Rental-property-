import React from 'react'
import '../Discover.css'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <>
    <div className="containerlogin">
    <div className="form-container" id="login-form">
      <h1 className='loginh'>Login</h1>
      <form className='formlo'>
        <label className='loginlabel' for="username">Username</label>
        <input className='loginin' type="text" id="username" name="username" required/>
        <label className='loginlabel' for="password">Password</label>
        <input className='loginin' type="password" id="password" name="password" required/>
        <button className='loginbt' type="submit">Login</button>
      </form>
      <p className='loginp'>Don't have an account? <Link className='logina' to='/register' id="signup-link">Sign up</Link></p>
    </div>
    </div>
    </>
  )
}

export default Login

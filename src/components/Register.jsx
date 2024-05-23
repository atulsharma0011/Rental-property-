import React from 'react';
import '../Discover.css'
import { Link } from 'react-router-dom';

function Register() {
  return (
    <>
    <div className="containerlogin">
    <div className="form-container" id="signup-form" >
      <h1 className='loginh'>Sign Up</h1>
      <form className='formlo'>
        <label className='loginlabel' htmlFor="new-username">Username</label>
        <input className='loginin' type="text" id="new-username" name="new-username" required />
        <label className='loginlabel' htmlFor="new-email">Email</label>
        <input type="email" className='loginin' id="new-email" name="new-email" required />
        <label className='loginlabel' htmlFor="new-password">Password</label>
        <input type="password" id="new-password" className='loginin' name="new-password" required />
        <button className='loginbt' type="submit">Sign Up</button>
      </form>
      <p className='loginp'>Already have an account? <Link to='/login' className='logina' id="login-link">Login</Link></p>
    </div>
    </div>
    </>
  );
}

export default Register;

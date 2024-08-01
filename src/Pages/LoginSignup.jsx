import React from 'react';
import './CSS/LoginSignup.css';

export const LoginSignup = () => {
  return (
    <div className='loginSignup'>
      <div className="container">
        <h1>Sign Up</h1>
        <div className="fields">
          <input type="text" placeholder='Your Name'/>
          <input type="email" placeholder='Your Email'/>
          <input type="password" placeholder='Password'/>
        </div>
        <button>Continue</button>
        <p className='login'>Already have an account <span>Login</span></p>
        <div className='agree'>
          <input type="checkbox" />
          <p>Terms & Conditions</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup;
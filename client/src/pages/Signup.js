import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { app, auth } from '../firebase.js';
import './Signup.css';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const handleSignup = async () => {
    try {
      const auth = getAuth();
      await createUserWithEmailAndPassword(auth, email, password);
  
      navigate('/create-patient');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <body className='body'>
      <div className="MainContainer">
        <div className="introTextContainer">
          <h1>New to HEDOC? </h1>
          <h3>I am a Citizen</h3>
          <h3>I am a Doctor</h3>
          <h4>Already a user ? <Link className='Loginlink'> Login </Link> here.</h4>
        </div>
        <div className="loginContainer">
          <h2 className="welcometext">WELCOME</h2>
          <input 
            className='sign-up-input' 
            type="email" 
            placeholder='Enter your email' 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
          />
          <input 
            className='sign-up-input' 
            type="password" 
            placeholder='Enter your password' 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
          />
          {error && <p className="error">{error}</p>}
          <button className="signup" onClick={handleSignup}>Sign Up</button>
          <h4 className="or">or</h4>
          <div className="divider"></div>
          <div className="social">
            <Link className="social-icons">
              <img src="images/sms.png" alt="sms" className="twitter" />
              <h4>Sign Up with Mobile</h4>
            </Link>
            <Link className="social-icons">
              <img src="images/google-search.png" alt="google" className="google" />
              <h4>Sign Up with Google</h4>
            </Link>
            <Link className="social-icons">
              <img src="images/apple-logo.png" alt="apple" className="apple" />
              <h4>Sign Up with Apple</h4>
            </Link>
          </div>
        </div>
      </div>
    </body>
  );
}

export default Signup;

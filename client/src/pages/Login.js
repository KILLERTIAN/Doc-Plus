import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import './Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const auth = getAuth();
      await signInWithEmailAndPassword(auth, email, password);

      // Redirect to the dashboard after successful login
      navigate('/dashboard');
    } catch (error) {
      setError(error.message);
    }
  };
  const handleLoginWithGoogle = async () => {
    try {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      navigate('/dashboard'); // Redirect to the dashboard after successful login
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className='body'>
      <div className="sign-inMainContainer">
        <div className="loginContainer">
          <h2 className="welcometext">Welcome Back</h2>
          <input
            className='sign-in-input'
            type="email"
            placeholder='Enter your email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className='sign-in-input'
            type="password"
            placeholder='Enter your password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <p className="error">{error}</p>}
          <button className="signin" onClick={handleLogin}>Login</button>

          <div className="dividerLine">
            <div className="divider"></div>
            <h4 className="or">or</h4>
            <div className="divider"></div>
          </div>
          <div className="social">
            <Link className="social-icons">
              <img src="images/sms.png" alt="sms" className="twitter" />
              <h4>Login with Mobile</h4>
            </Link>
            <Link className="social-icons" onClick={handleLoginWithGoogle}>
              <img src="images/google-search.png" alt="google" className="google" />
              <h4>Login with Google</h4>
            </Link>
            <Link className="social-icons">
              <img src="images/apple-logo.png" alt="apple" className="apple" />
              <h4>Login with Apple</h4>
            </Link>
            <h4 className='signUplink'>New to HEDOC ? <Link to="/sign-up" className='Loginlink'> Sign Up </Link> here.</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import { getAuth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, signInWithPhoneNumber } from 'firebase/auth';
import { doc, getFirestore } from 'firebase/firestore'; // Import necessary functions from firebase/firestore

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [role, setRole] = useState('citizen');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const auth = getAuth();
      await signInWithEmailAndPassword(auth, email, password);

      // Redirect based on selected role
      if (role === 'citizen') {
        navigate('/dashboard');
      } else if (role === 'doctor') {
        navigate('/doctor-dashboard');
      }
    } catch (error) {
      const errorMessage = mapFirebaseErrorToCustomMessage(error.code);
      setError(errorMessage);
    }
  };

  const handleLoginWithGoogle = async () => {
    try {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);

      // Store the user's role in Firestore
      const db = getFirestore();
      const user = result.user;
      await db.collection('users').doc(user.uid).set({ role });

      // Redirect based on selected role
      if (role === 'citizen') {
        navigate('/dashboard');
      } else if (role === 'doctor') {
        navigate('/doctor-dashboard');
      }
    } catch (error) {
      const errorMessage = mapFirebaseErrorToCustomMessage(error.code);
      setError(errorMessage);
    }
  };

  const mapFirebaseErrorToCustomMessage = (errorCode) => {
    switch (errorCode) {
      case 'auth/invalid-email':
        return 'Invalid Email or Password';
      case 'auth/user-disabled':
        return 'Your account has been disabled';
      case 'auth/user-not-found':
        return 'No user found with this email';
      case 'auth/wrong-password':
        return 'Invalid Email or Password';
      default:
        return 'An error occurred. Please try again later.';
    }
  };

  return (
    <div className='body'>
      <div className="MainContainer">  
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
          <button className="signup" onClick={handleLogin}>Login</button>

          <div className="dividerLine">
            <div className="divider"></div>
            <h4 className="or">or</h4>
            <div className="divider"></div>
          </div>
          <div className="social">
            <Link className="social-icons">
              <img src="images/sms.png" alt="sms" className="sms" />
              <h4>Sign In with Mobile</h4>
            </Link>
            <Link className="social-icons" onClick={handleLoginWithGoogle}>
              <img src="images/google-search.png" alt="google" className="google" />
              <h4>Sign In with Google</h4>
            </Link>
            <Link className="social-icons">
              <img src="images/apple-logo.png" alt="apple" className="apple" />
              <h4>Sign In with Apple</h4>
            </Link>
            <h4 className='signUplink'>New user? <Link to="/sign-up" className='Loginlink'>Sign Up</Link> here.</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;

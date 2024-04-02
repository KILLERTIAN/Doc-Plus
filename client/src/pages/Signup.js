import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Signup.css';
import { getAuth, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, signInWithPhoneNumber } from 'firebase/auth';

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState(''); // State to hold phone number
  const [error, setError] = useState(null); // State to hold error message
  const [showPhoneNumberInput, setShowPhoneNumberInput] = useState(false); // State to control visibility of phone number input
  const navigate = useNavigate();

  const handleSignupWithEmail = async () => {
    try {
      const auth = getAuth();
      await createUserWithEmailAndPassword(auth, email, password);
      navigate('/create-patient');
    } catch (error) {
      const errorMessage = mapFirebaseErrorToCustomMessage(error.code);
      setError(errorMessage);
    }
  };

  const handleSignupWithGoogle = async () => {
    try {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      navigate('/create-patient');
    } catch (error) {
      const errorMessage = mapFirebaseErrorToCustomMessage(error.code);
      setError(errorMessage);
    }
  };

  const handleSignupWithMobile = async () => {
    try {
      const auth = getAuth();
      const recaptchaVerifier = ''; // You need to initialize reCAPTCHA verifier if required
      const confirmationResult = await signInWithPhoneNumber(auth, phoneNumber, recaptchaVerifier);
      // Proceed with the SMS verification process
    } catch (error) {
      const errorMessage = mapFirebaseErrorToCustomMessage(error.code);
      setError(errorMessage);
    }
  };

  const mapFirebaseErrorToCustomMessage = (errorCode) => {
    switch (errorCode) {
      case 'auth/email-already-in-use':
        return 'Email is already in use';
      case 'auth/invalid-email':
        return 'Invalid Email';
      case 'auth/weak-password':
        return 'The password is too weak.';
      default:
        return 'An error occurred. Please try again later.';
    }
  };

  return (
    <body className='body'>
      <div className="MainContainer">
        <div className="introTextContainer">
          <h1>New to HEDOC? </h1>
          <h3>I am a Citizen</h3>
          <h3>I am a Doctor</h3>
          <h4>Already a user ? <Link to="/login" className='Loginlink'> Login </Link> here.</h4>
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
          {showPhoneNumberInput && (
            <input 
              className='sign-up-input' 
              type="tel" 
              placeholder='Enter your phone number' 
              value={phoneNumber} 
              onChange={(e) => setPhoneNumber(e.target.value)} 
            />
          )}
          {error && <p className="error">{error}</p>} 
          <button className="signup" onClick={handleSignupWithEmail}>Sign Up</button>
          
          <div className="dividerLine">
            <div className="divider"></div>
            <h4 className="or">or</h4>
            <div className="divider"></div>
          </div>
          <div className="social">
            <Link className="social-icons">
              <img src="images/sms.png" alt="sms" className="sms" onClick={handleSignupWithMobile}/>
              <h4 onClick={() => setShowPhoneNumberInput(true)}>Sign Up with Mobile</h4>
            </Link>
            <Link className="social-icons" onClick={handleSignupWithGoogle}>
              <img src="images/google-search.png" alt="google" className="google" />
              <h4>Sign Up with Google</h4>
            </Link>

              {/* <Link className="social-icons" onClick={handleSignupWithMobile}>
                <img src="images/sms.png" alt="phone" className="phone" />
                <h4>Sign Up with Phone</h4>
              </Link> */}

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

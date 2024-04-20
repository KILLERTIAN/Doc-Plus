import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Signup.css';
import { getAuth, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, signInWithPhoneNumber, updateProfile } from 'firebase/auth';
import { setDoc, doc, getFirestore } from 'firebase/firestore'; 

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [error, setError] = useState(null);
  const [showPhoneNumberInput, setShowPhoneNumberInput] = useState(false);
  const [role, setRole] = useState('citizen');
  const navigate = useNavigate();

  const handleSignupWithEmail = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    try {
      const auth = getAuth();
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      await updateProfile(user, { displayName: role });

      navigate(getRedirectPath());
    } catch (error) {
      const errorMessage = mapFirebaseErrorToCustomMessage(error.code);
      setError(errorMessage);
    }
  };

  const handleSignupWithGoogle = async () => {
    try {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      const db = getFirestore();
      await setDoc(doc(db, 'users', user.uid), { role });

      navigate(getRedirectPath());
    } catch (error) {
      const errorMessage = mapFirebaseErrorToCustomMessage(error.code);
      setError(errorMessage);
    }
  };

  const handleSignupWithMobile = async () => {
    try {
      const auth = getAuth();
      const recaptchaVerifier = ''; 
      const confirmationResult = await signInWithPhoneNumber(auth, phoneNumber, recaptchaVerifier);

      const db = getFirestore();
      await setDoc(doc(db, 'users', confirmationResult.user.uid), { role });

      navigate(getRedirectPath());
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

  const getRedirectPath = () => {
    switch (role) {
      case 'citizen':
        return '/create-patient';
      case 'doctor':
        return '/create-doctor';
      case 'hospital':
        return '/create-hospital';
      default:
        return '/';
    }
  };

  return (
    <body className='body'>
      <div className="MainContainer">
        <div className="introTextContainer">
          <h1>New to Doc Plus? </h1>
          <div className="role-selection">
            <div
              className={`citizen-bar ${role === 'citizen' ? 'glowing-border active' : 'glowing-border'}`}
              onClick={() => setRole('citizen')}
            >
              Patient
            </div>
            <div
              className={`doctor-bar ${role === 'doctor' ? 'glowing-border active' : 'glowing-border'}`}
              onClick={() => setRole('doctor')}
            >
              Doctor
            </div>
            <div
              className={`hospital-bar ${role === 'hospital' ? 'glowing-border active' : 'glowing-border'}`}
              onClick={() => setRole('hospital')}
            >
              Hospital
            </div>
          </div>
          <h4>Already a user ? <Link to="/login" className='Loginlink'> Login </Link> here.</h4>
        </div>
        <div className="loginContainer">
          <h2 className="welcometext">WELCOME</h2>
          <form onSubmit={handleSignupWithEmail}>
            <input
              className='sign-up-input'
              type="email"
              placeholder='Enter your email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              className='sign-up-input'
              type="password"
              placeholder='Enter your password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {error && <p className="error">{error}</p>}
            <button type="submit" className="signup">Sign Up</button>
          </form>

          <div className="dividerLine">
            <div className="divider"></div>
            <h4 className="or">or</h4>
            <div className="divider"></div>
          </div>
          <div className="social">
            <Link className="social-icons">
              <img src="images/sms.png" alt="sms" className="sms" onClick={handleSignupWithMobile} />
              <h4 onClick={() => setShowPhoneNumberInput(true)}>Sign Up with Mobile</h4>
            </Link>
            <Link className="social-icons" onClick={handleSignupWithGoogle}>
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

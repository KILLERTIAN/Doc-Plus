import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { useAuth } from '../contexts/AuthContext'; // Import the useAuth hook
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import axios from 'axios'; // Import Axios for making HTTP requests

function Navbar() {
  const { currentUser, logout } = useAuth(); // Access the current user object and logout function from the auth context
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [avatar, setAvatar] = useState(null); // State to store the avatar
  const navigate = useNavigate(); // Initialize navigate

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  useEffect(() => {
    if (currentUser) {
      // Call the function to fetch avatar when currentUser changes
      fetchPatientData(currentUser.uid);
    }
  }, [currentUser]); // Fetch patient data when currentUser changes

  const fetchPatientData = async (firebaseUid) => {
    try {
      const response = await axios.get(`http://localhost:8000/backend/patients?firebaseUid=${firebaseUid}`);
      const patientData = response.data[0]; 
      // Assuming the response contains patient data
      // console.log(patientData)
      // Here you can extract the avatar URL from patientData and set it to the state
      const avatarUrl = patientData.avatar;
      setAvatar(avatarUrl);
    } catch (error) {
      console.error('Error fetching patient data:', error);
    }
  };

  const handleLogout = async () => {
    try {
      await logout();
      setAvatar(""); 
      navigate('/'); 
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };
  

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            HEDOC
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <ion-icon className={click ? "close-outline fa-times": "menu-outline fa-times"} ></ion-icon>
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/dashboard'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Dashboard
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/games'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Documents
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/about'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                About
              </Link>
            </li>

            {currentUser && avatar && ( 
              <li className='nav-item'>
                <div className="profile-container" onClick={handleClick}>
                  <img src={avatar} alt="Profile" className="profile-pic" />
                  <div className="profile-dropdown" style={{ display: click ? 'block' : 'none' }}>
                    <button className="logout-button" onClick={handleLogout}>Logout</button>
                  </div>
                </div>
              </li>
            )}
            {!currentUser && button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
          </ul>
          
        </div>
      </nav>
    </>
  );
}

export default Navbar;

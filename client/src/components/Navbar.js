import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {Button} from './Button'
import './Navbar.css';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Navbar() {
  const { currentUser, logout } = useAuth();
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [userAvatar, setUserAvatar] = useState(null);
  const navigate = useNavigate();

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

  const handleLogout = async () => {
    try {
      await logout();
      setUserAvatar("")
      navigate('/'); // Redirect to home page after logout
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  useEffect(() => {
    const fetchUserAvatar = async (firebaseUid) => {
      try {
        if (currentUser) {
          let endpointUrl = '';
  
          if (currentUser.displayName === 'doctor') {
            endpointUrl = `http://localhost:8000/backend/doctors?firebaseUid=${firebaseUid}`;
          } else if (currentUser.displayName === 'citizen') {
            endpointUrl = `http://localhost:8000/backend/patients?firebaseUid=${firebaseUid}`;
          } else {
            console.error('Invalid user role:', currentUser.displayName);
            return;
          }
  
          const response = await axios.get(endpointUrl);
          const responseData = response.data[0];
  
          if (responseData && responseData.avatar) {
            setUserAvatar(responseData.avatar);
          } else {
            console.error('Avatar URL not found in response data');
          }
        }
      } catch (error) {
        console.error('Error fetching user avatar:', error);
      }
    };

    if (currentUser) {
      fetchUserAvatar(currentUser.uid);
    }
  }, [currentUser]);

  return (
    <nav className='navbar'>
      <div className='navbar-container'>
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          DocPlus
        </Link>
        <div className='menu-icon' onClick={handleClick}>
        {click ? (
            <ion-icon className='fa-bars' name="close-outline"></ion-icon>
          ) : (
            <ion-icon className='fa-bars' name="menu-outline"></ion-icon>
          )}
          {/* <ion-icon className={click ? "close-outline fa-times" : "menu-outline fa-times"} ></ion-icon> */}
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          {currentUser && currentUser.displayName === 'doctor' ? (
            <li className='nav-item'>
              <Link to='/doctor-dashboard' className='nav-links' onClick={closeMobileMenu}>
                Dashboard
              </Link>
            </li>
          ) : (
            <li className='nav-item'>
              <Link to='/dashboard' className='nav-links' onClick={closeMobileMenu}>
                Dashboard
              </Link>
            </li>
          )}
          <li className='nav-item'>
            <Link to='/documents' className='nav-links' onClick={closeMobileMenu}>
              Documents
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
              About
            </Link>
          </li>

          {currentUser &&  (
            <li className='nav-item'>
              <div className="profile-container" onClick={handleClick}>
                <img src={userAvatar} alt="Profile" className="profile-pic" />
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
  );
}

export default Navbar;

import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { useAuth } from '../contexts/AuthContext'; // Import the useAuth hook
import { useNavigate } from 'react-router-dom'; // Import useNavigate

function Navbar() {
  const { currentUser, logout } = useAuth(); // Access the current user object and logout function from the auth context
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
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

  window.addEventListener('resize', showButton);

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/'); // Use navigate to redirect to the home page after logout
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

            {currentUser ? (
              <li className='nav-item'>
                <div className="profile-container">
                  <img src={currentUser.profilePicUrl} alt="Profile" className="profile-pic" />
                  <div className="profile-dropdown">
                    <button className="logout-button" onClick={handleLogout}>Logout</button>
                  </div>
                </div>
              </li>
            ) : (
              <li>
                <Link
                  to='/sign-up'
                  className='nav-links-mobile'
                  onClick={closeMobileMenu}
                >
                  Sign Up
                </Link>
              </li>
            )}
          </ul>
          {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;

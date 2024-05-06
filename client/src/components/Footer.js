import React from 'react';
import './Footer.css';
// import { Button } from './Button';
import { Link } from 'react-router-dom';
import { IonIcon } from '@ionic/react'; // Import IonIcon from @ionic/react
import { logoFacebook, logoInstagram, logoYoutube, logoTwitter, logoLinkedin } from 'ionicons/icons'; // Import specific Ionicons

function Footer() {
  return (
    <div className='footer-container'>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2> Important Links</h2>
            <Link to='/sign-up'>How it works</Link>
            <Link to='/dashboard'>Dashboard</Link>
            <Link to='/doctor-dashboard'>Doctors With Us</Link>
            <Link to='/document'>Documents</Link>
            <Link to='/about'>Terms and Conditions</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Connect With Us</h2>
            <Link to='/about'>Contact Us</Link>
            <Link to='/about'>Support</Link>
            <Link to='/sign-up'>Feedback</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Social Media</h2>
            <Link to='https://www.instagram.com/?hl=en'>Instagram</Link>
            <Link to='https://www.facebook.com/'>Facebook</Link>
            <Link to='https://www.youtube.com/'>Youtube</Link>
            <Link to='https://twitter.com/x.'>X</Link>
            <Link to='https://in.linkedin.com/'>LinkedIn</Link>
          </div>
        </div>

      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
            <img src="/images/docpluslogo.png" alt="logo"  />
              Doc Plus
              
            </Link>
          </div>
          <small class='website-rights'>Doc Plus © 2024 &nbsp;&nbsp; All rights reserved</small>
          { <div class='social-icons'>
            <Link to="https://www.facebook.com/"><IonIcon icon={logoFacebook} className='social-icon-link' /></Link>
            <Link to="https://www.instagram.com/?hl=en"><IonIcon icon={logoInstagram} className='social-icon-link' /></Link>
            <Link to="https://www.youtube.com/"><IonIcon icon={logoYoutube} className='social-icon-link' /></Link>
            <Link to="https://twitter.com/x"><IonIcon icon={logoTwitter} className='social-icon-link' /></Link>
            <Link to="https://in.linkedin.com/"><IonIcon icon={logoLinkedin} className='social-icon-link' /></Link>
          </div> }
        </div>
      </section>
    </div>
  );
}

export default Footer;
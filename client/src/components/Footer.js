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
            <Link to='/'>Instagram</Link>
            <Link to='/'>Facebook</Link>
            <Link to='/'>Youtube</Link>
            <Link to='/'>Twitter</Link>
            <Link to='/'>LinkedIn</Link>
          </div>
        </div>

      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
            <img src="/images/docpluslogo.png" alt="logo"  />
              DocPlus
              
            </Link>
          </div>
          <small class='website-rights'>DocPlus © 2024 &nbsp;&nbsp; All rights reserved</small>
          { <div class='social-icons'>
          <IonIcon icon={logoFacebook} className='social-icon-link' />
            <IonIcon icon={logoInstagram} className='social-icon-link' />
            <IonIcon icon={logoYoutube} className='social-icon-link' />
            <IonIcon icon={logoTwitter} className='social-icon-link' />
            <IonIcon icon={logoLinkedin} className='social-icon-link' />
          </div> }
        </div>
      </section>
    </div>
  );
}

export default Footer;
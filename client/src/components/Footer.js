import React from 'react';
import './Footer.css';
// import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        {/* <p className='footer-subscription-heading'>
          Join now for better Health
        </p> */}
        {/* <p className='footer-subscription-text'>
          You can unsubscribe at any time.
        </p> */}
        {/* <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--primary'>Subscribe</Button>
          </form>
        </div> */}
      </section>
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
        </div>
        {/* <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Games</h2>
            <Link to='/games'>Suggest games</Link>
            <Link to='/games'>Minecraft</Link>
            <Link to='/games'>Play togther</Link>
            <Link to='/games'>Influencer</Link>
          </div> */
          <div class='footer-link-items'>
            <h2>Social Media</h2>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Facebook</Link>
            <Link to='/'>Youtube</Link>
            <Link to='/'>Twitter</Link>
          </div>
          }
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              DocPlus
              {/* <i class='fab fa-typo3' /> */}
            </Link>
          </div>
          <small class='website-rights'>DocPlus © 2024</small>
          { <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
          </div> }
        </div>
      </section>
    </div>
  );
}

export default Footer;
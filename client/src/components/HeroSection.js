import React, { useEffect } from 'react';
import './HeroSection.css';
import Typed from 'typed.js';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  useEffect(() => {
    const options = {
      strings: [
        'Online Consultations',
        'Digitalize Medical Records',
        'Book Appointments',
        'Medicine Reminder',
        'Ongoing treatment record'
      ],
      typeSpeed: 40,
      backSpeed: 30,
      loop: true
    };

    const typed = new Typed('.typed-text', options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className='hero-container'>
      <svg viewBox="0 0 1440 800" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#1464FF" stop-opacity="1" />
            <stop offset="100%" stop-color="#0FA0E1 " stop-opacity="1" />
          </linearGradient>
          <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#b2ebf2" stop-opacity="1" />
            <stop offset="100%" stop-color="#80deea" stop-opacity="1" />
          </linearGradient>
        </defs>
        <path d="M0,200 C400,350 800,50 1440,200 L1440,800 L0,800 Z" fill="url(#grad1)">
          <animate
            attributeName="d"
            values="M0,200 C400,350 800,50 1440,200 L1440,800 L0,800 Z; 
              M0,250 C400,400 800,100 1440,250 L1440,800 L0,800 Z; 
              M0,200 C400,350 800,50 1440,200 L1440,800 L0,800 Z"
            dur="10s"
            repeatCount="indefinite"
          />
        </path>
        <path d="M0,300 C500,450 1000,150 1440,300 L1440,800 L0,800 Z" fill="url(#grad2)" opacity="0.8">
          <animate
            attributeName="d"
            values="M0,300 C500,450 1000,150 1440,300 L1440,800 L0,800 Z; 
              M0,350 C500,500 1000,200 1440,350 L1440,800 L0,800 Z; 
              M0,300 C500,450 1000,150 1440,300 L1440,800 L0,800 Z"
            dur="10s"
            repeatCount="indefinite"
          />
        </path>
        <path d="M0,400 C600,550 1200,250 1440,400 L1440,800 L0,800 Z" fill="url(#grad1)" opacity="0.6">
          <animate
            attributeName="d"
            values="M0,400 C600,550 1200,250 1440,400 L1440,800 L0,800 Z; 
              M0,450 C600,600 1200,300 1440,450 L1440,800 L0,800 Z; 
              M0,400 C600,550 1200,250 1440,400 L1440,800 L0,800 Z"
            dur="10s"
            repeatCount="indefinite"
          />
        </path>
        <path d="M0,500 C700,650 1400,350 1440,500 L1440,800 L0,800 Z" fill="url(#grad2)" opacity="0.4">
          <animate
            attributeName="d"
            values="M0,500 C700,650 1400,350 1440,500 L1440,800 L0,800 Z; 
              M0,550 C700,700 1400,400 1440,550 L1440,800 L0,800 Z; 
              M0,500 C700,650 1400,350 1440,500 L1440,800 L0,800 Z"
            dur="10s"
            repeatCount="indefinite"
          />
        </path>
        <path d="M0,600 C800,750 1600,450 1440,600 L1440,800 L0,800 Z" fill="url(#grad1)" opacity="0.2">
          <animate
            attributeName="d"
            values="M0,600 C800,750 1600,450 1440,600 L1440,800 L0,800 Z; 
              M0,650 C800,800 1600,500 1440,650 L1440,800 L0,800 Z; 
              M0,600 C800,750 1600,450 1440,600 L1440,800 L0,800 Z"
            dur="10s"
            repeatCount="indefinite"
          />
        </path>
        <path d="M0,700 C900,850 1800,550 1440,700 L1440,800 L0,800 Z" fill="url(#grad2)" opacity="0.1">
          <animate
            attributeName="d"
            values="M0,700 C900,850 1800,550 1440,700 L1440,800 L0,800 Z; 
              M0,750 C900,900 1800,600 1440,750 L1440,800 L0,800 Z; 
              M0,700 C900,850 1800,550 1440,700 L1440,800 L0,800 Z"
            dur="10s"
            repeatCount="indefinite"
          />
        </path>

        <path d="M0,100 C450,250 900,50 1440,100 L1440,800 L0,800 Z" fill="url(#grad1)" opacity="0.15">
          <animate
            attributeName="d"
            values="M0,100 C450,250 900,50 1440,100 L1440,800 L0,800 Z; 
              M0,150 C450,300 900,100 1440,150 L1440,800 L0,800 Z; 
              M0,100 C450,250 900,50 1440,100 L1440,800 L0,800 Z"
            dur="10s"
            repeatCount="indefinite"
          />
        </path>
        <path d="M0,150 C500,300 1000,100 1440,150 L1440,800 L0,800 Z" fill="url(#grad2)" opacity="0.1">
          <animate
            attributeName="d"
            values="M0,150 C500,300 1000,100 1440,150 L1440,800 L0,800 Z; 
              M0,200 C500,350 1000,150 1440,200 L1440,800 L0,800 Z; 
              M0,150 C500,300 1000,100 1440,150 L1440,800 L0,800 Z"
            dur="10s"
            repeatCount="indefinite"
          />
        </path>
        <path d="M0,250 C600,400 1200,200 1440,250 L1440,800 L0,800 Z" fill="url(#grad1)" opacity="0.2">
          <animate
            attributeName="d"
            values="M0,250 C600,400 1200,200 1440,250 L1440,800 L0,800 Z; 
              M0,300 C600,450 1200,250 1440,300 L1440,800 L0,800 Z; 
              M0,250 C600,400 1200,200 1440,250 L1440,800 L0,800 Z"
            dur="10s"
            repeatCount="indefinite"
          />
        </path>
        <path d="M0,350 C700,500 1400,300 1440,350 L1440,800 L0,800 Z" fill="url(#grad2)" opacity="0.25">
          <animate
            attributeName="d"
            values="M0,350 C700,500 1400,300 1440,350 L1440,800 L0,800 Z; 
              M0,400 C700,550 1400,350 1440,400 L1440,800 L0,800 Z; 
              M0,350 C700,500 1400,300 1440,350 L1440,800 L0,800 Z"
            dur="10s"
            repeatCount="indefinite"
          />
        </path>
        <path d="M0,450 C800,600 1600,400 1440,450 L1440,800 L0,800 Z" fill="url(#grad1)" opacity="0.3">
          <animate
            attributeName="d"
            values="M0,450 C800,600 1600,400 1440,450 L1440,800 L0,800 Z; 
              M0,500 C800,650 1600,450 1440,500 L1440,800 L0,800 Z; 
              M0,450 C800,600 1600,400 1440,450 L1440,800 L0,800 Z"
            dur="10s"
            repeatCount="indefinite"
          />
        </path>
      </svg>
      {/* <div className="blurscreen"></div> */}
      <div className="hero-text">
        <h1>
          <span>What we <span>do</span>?<br /> We do it <span>All</span>!</span><br />
          <span2 className="typed-text"></span2>
        </h1>
        <Link to="/sign-up" className='hero-free-trial-button'><button>Get Started</button></Link>
      </div>
      <div className="hero-gradient">
        <img className="hero-image" src="https://res.cloudinary.com/djoebsejh/image/upload/v1714755903/lkqiz2emsfutwutp5asr.png" alt="background" />
      </div>
    </div>
  );
}

export default HeroSection;

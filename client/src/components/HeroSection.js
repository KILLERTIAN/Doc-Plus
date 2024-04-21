import React, { useEffect } from 'react';
import './HeroSection.css';
import Typed from 'typed.js';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  useEffect(() => {
    // Initialize Typed.js once component is mounted
    const options = {
      strings: [
        'Discover the future of healthcare management.',
        'Digitalize Your Medical Records Effortlessly',
        'Book Doctor Appointments and Access Hospital Profiles',
        'Receive Ongoing Disease and Medicine Reminders'

      ],
      typeSpeed: 40,
      backSpeed: 30,
      loop: true
    };

    const typed = new Typed('.typed-text', options);

    // Clean up on component unmount
    return () => {
      typed.destroy();
    };
  }, []); // Empty dependency array ensures this effect runs only once on mount

  return (
    <div className='hero-container'>
      <div className="hero-gradient"></div>
      <img src="images/bg.jpg" alt="background" />

      <div className="hero-text">
        <h1>
          <span>All your health related needs </span> <br/> 
          {/* <span>Digitalize Your Medical Records Effortlessly</span> <br />
          <span>Connect with Doctors Anywhere, Anytime</span> <br />
          <span>Get AI-based Exercise Recommendations and Disease Predictions</span> <br />
          <span>Receive Ongoing Disease and Medicine Reminders</span> <br />
          <span>Book Doctor Appointments and Access Hospital Profiles</span> <br />
          <span>Stay Updated with Recent Disease Feeds</span> <br /> */}
          <span1 className="typed-text"></span1>
        </h1>
        <Link to="/sign-up" className='hero-free-trial-button'><button>Get Started</button></Link>
      </div>
    </div>
  );
}

export default HeroSection;

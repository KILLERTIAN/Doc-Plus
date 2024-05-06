import React, { useEffect } from 'react';
import './HeroSection.css';
import Typed from 'typed.js';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  useEffect(() => {
    // Initialize Typed.js once component is mounted
    const options = {
      strings: [
        'Online Consultations',
        'Digitalize Medical Records',
        'Book Appointments',
        'Medicince Reminder',
        'Ongoing treatment record'

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
      <div className="hero-text">
        <h1 >
          <span>What we do?<br /> We do it All!</span><br /> 
          <span1 className="typed-text"></span1>
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

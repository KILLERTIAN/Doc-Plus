import React, { useEffect } from 'react';
import './HeroSection.css';
import Typed from 'typed.js';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  useEffect(() => {
    const options = {
      strings: [
        'Online Consultations',
        'Digital Health Records',
        'Book Appointments',
        'Medicine Reminder',
        'Track Ongoing Treatment'
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
      
      {/* <div className="blurscreen"></div> */}
      <div className="hero-text">
        <h3 className=''>Stay on top of your health—all in one place.</h3>
        <h1>
          <span>Your Health,&nbsp;<span1>Your Way</span1> <br/> Anytime,&nbsp;<span1>Anywhere!</span1> </span><br />
          <span2 className="typed-text"></span2>
        </h1>
        <Link to="/sign-up" className='hero-free-trial-button'><button>Consult Now</button></Link>
      </div>
      <div className="hero-gradient">
        <img className="hero-image" src="https://res.cloudinary.com/djoebsejh/image/upload/v1739855037/haxu2voda91hzdzowr6v.svg" alt="background" />
      </div>
    </div>
  );
}

export default HeroSection;

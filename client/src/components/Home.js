import React from 'react';
import HeroSection from './HeroSection';
import Appointment from './Appointment';


function Home() {
  return (
    <div className="mainHomeBody">
        <div className="mainHomeContainer">
            <HeroSection/>
            <Appointment/>
        </div>
    </div>
  )
}

export default Home
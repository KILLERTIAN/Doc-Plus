import React from 'react';
import HeroSection from './HeroSection';
import Appointment from './Appointment';
import Medicalreminder from './Medicalreminder';
import MedicalFeeds from './MedicalFeeds';


function Home() {
  return (
    <div className="mainHomeBody">
        <div className="mainHomeContainer">
            <HeroSection/>
            <Appointment/>
            <Medicalreminder/>
            <MedicalFeeds/>
        </div>
    </div>
  )
}

export default Home
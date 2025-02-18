import React from 'react';
import HeroSection from './HeroSection';
import Appointment from './Appointment';
import Medicalreminder from './Medicalreminder';
import MedicalFeeds from './MedicalFeeds';
import Medicalposts from './Medicalposts.js';
import { OurFamily } from './OurFamily';


function Home() {
  return (
    <div className="mainHomeBody">
        <div className="mainHomeContainer">
            <HeroSection/>
            <Appointment/>
            <Medicalreminder/>
            {/* <MedicalFeeds/> */}
            <Medicalposts/>
            <OurFamily/>
        </div>
    </div>
  )
}

export default Home
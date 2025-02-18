import React from 'react';
import './OurFamily.css'

export const OurFamily = () => {
  return (
    <div className="ourFamilyMainContainer">
        <div className="ourFamilyTextContainer">
            <span className="ourFamilySpan">CARING FOR THE HEALTH OF YOU AND YOUR FAMILY.</span>
            <h1 className="ourFamilyH1">Our Families</h1>
            <p className="ourFamilyPara">We will work with you to develop individualised care plans, including management of chronic diseases. If we cannot assist, we can provide referrals or advice about the type of practitioner you require. We treat all enquiries sensitively and in the strictest confidence.</p>
        </div>
        <div className="ourFamilyBoxesContainer">
            <img className='ourFamilyImage' src="https://res.cloudinary.com/djoebsejh/image/upload/v1739858684/om2wdkcz867sbrxcmrtv.svg" alt="" />
        </div>
    </div>
  )
}

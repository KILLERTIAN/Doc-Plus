import React from 'react';
import './About.css';

function About() {
  return (
    <div className='mainAboutContainer'>
      <div class="head"><h1>About</h1></div>
      <div class="main-bar"></div>
      <div class="content">
        <p>DocPlus is a unique Platform where multiple types of data can be stored at one location ranging from doctor prescriptions,
           Lab Test Reports, Medical X-rays, Bills, and other relevant information easily accessible from anywhere.</p>
        <p>"Your medical information is kept private and confidential"</p>
      </div>
      <div class=" Suppport">
      <div class="head"><h1>Support</h1></div>
      <div class="main-bar"></div>
      <div class="content">
        <p>Address: S-1, Block-4, 1st Floor, Dr. Akhilesh Das Gupta Institute of Proffesional Studies, Shastri Park, Delhi 110020</p>
        <p>Contact Number: +91 98XXXXXX01</p>
        <p>Email id: info.Docplus.health@gmail.com</p>
        <p>Twiiter: DocPlus.Health</p>
        <p>Instagram: DocPlus.Health</p>
        <p>Facebbok: DocPlus.Health</p>
      </div>
      <div class="faq">
      <div class="head"><h1>FAQ's</h1></div>
      <div class="main-bar"></div>
      <div class="content">
        <p class="ques">What is DocPlus?</p>
        <p>DocPlus is a Next Generation Health Vault to improve healthcare by storing your Medical history. It Provide complete, accurate and timely information about your health.</p>
      </div>
      </div>
      </div>



    </div>
  )
}

export default About
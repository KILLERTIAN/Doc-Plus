import React from 'react';
import { IonIcon } from '@ionic/react';
import { chevronDownOutline, chevronForwardOutline,chevronUpOutline, } from 'ionicons/icons';
// import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';
import './About.css';

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="faq-item">
      <div className="faq-question" onClick={toggleAccordion}>
        <p>{question}</p>
        <IonIcon icon={isOpen ? chevronUpOutline : chevronDownOutline} />
      </div>
      {isOpen && <div className="faq-answer">{answer}</div>}
    </div>
  );
};

const About = () => {
  const faqs = [
    {
      question: 'What is DocPlus?',
      answer: 'DocPlus is a Next Generation Health Vault designed to securely store and manage various types of medical information such as prescriptions, lab reports, X-rays, bills, and more. It ensures complete confidentiality and easy accessibility from any location.',
    },
    // Add more FAQs as needed
  ];

  const keyFeatures = [
    'Securely store prescriptions, lab reports, X-rays, and medical bills.',
    'Access your medical history from anywhere, anytime.',
    'Ensure complete confidentiality of your health information.',
    'User-friendly interface for easy navigation and data management.',
    "Your medical information is kept private and confidential."
  ];

  return (
    <div className="mainAboutContainer">
      <div className="section">
        <h1>About DocPlus</h1>
        <p>
          DocPlus is a unique platform where you can store and manage comprehensive medical data, ensuring privacy and accessibility. Our mission is to provide a seamless experience for managing your health information.
        </p>
         <h2>Key Features:</h2>
        <ul className="features-list">
          {keyFeatures.map((feature, index) => (
            <li key={index}>
              <IonIcon icon={chevronForwardOutline} />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        {/* <p></p> */}
      </div>
      <div className="section">
      <div className="main-bar"></div>
        <h1>Support</h1>
        
        <div className="support-content">
          <p><strong>Address:</strong> S-1, Block-4, 1st Floor, Dr. Akhilesh Das Gupta Institute of Professional Studies, Shastri Park, Delhi 110020</p>
          <p><strong>Contact Number:</strong> +91 98XXXXXX01</p>
          <p><strong>Email:</strong> info.Docplus.health@gmail.com</p>
          <p><strong>Twitter:</strong> DocPlus.Health</p>
          <p><strong>Instagram:</strong> DocPlus.Health</p>
          <p><strong>Facebook:</strong> DocPlus.Health</p>
        </div>
      </div>
      <div className="section">
      <div className="main-bar"></div>
        <h1>FAQs</h1>
        
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <FaqItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;

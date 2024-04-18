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
    {
      question: 'Why Should use DocPlus?',
      answer: 'Maintaining your health records like prescriptions, lab test reports, immunization details, information about your allergies, medical images etc. DocPlus can help you in managing your health efficiently. DocPlus can help you in: Improving your awareness about your health. Having easy access to your health records. Sharing your health records with your doctors, family and friends. Printing your all or selected health records.',
    },
    {
      question: 'How Can DocPlus help in Improving my quality of Healthcare?',
      answer: 'DocPlus can help you to manage health and wellness information. This information include lab results, prescriptions, medications, medical images, vitals etc. Managing these at one central place (accessible from anywhere anytime).',
    },
    {
      question: 'How will DocPlus saves your time and Money?',
      answer: 'It helps you by saving your time to find health records instantly. When your doctors have complete, accurate and timely information about your health history, they can make better, more informed decisions. This makes care safer and can also reduce the need for more and increasingly expensive care in the future.',
    },
    {
      question: 'Do I have to pay to use DocPlus?',
      answer: 'No, DocPlus web Service are free of cost for all.',
    },
    {
      question: 'Is My Health Information in DocPlus safe and secure?',
      answer: 'Yes, your health information in DocPlus is absolutely safe and secure. Only you have access to it.',
    },
    {
      question: 'How Many Documents/Reports/Medical Images can I store in my profile at DocPlus?',
      answer: 'There is no limit on the number of documents / reports / medical images that can be stored in my profile at DocPlus.',
    },
    {
      question: 'For How Long Would My Health Information remain stored in DocPlus?',
      answer: 'Your health information would remain stored in Doc Plus for life time, from the date of upload.',
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

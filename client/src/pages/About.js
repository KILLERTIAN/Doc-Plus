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
      <div className="main-bar"></div>
      <div className="Policy">
          <h1>Terms and Conditions</h1>
          <p className="policy-cont">The following terms and conditions govern your use of this application, and any content made available from, including any subdomains thereof, or website. The application is made available by ADGIPS. We may change the Terms and Conditions from time to time, at any time without notice to you, by posting such changes. BY USING THE APPLICATION, YOU ACCEPT AND AGREE TO THESE TERMS AND CONDITIONS AS APPLIED TO YOUR USE IT. If you do not agree to these Terms and Conditions, you may not access or otherwise use the application.</p>
          <ul>
            <li className="list-head"><strong>Medical Advice Disclaimer</strong></li>
            <p className="policy-list">The content on application, including without limitation, text, copy, audio, video, photographs, illustrations, graphics and other visuals, is for informational purposes only and does not constitute professional medical advice, diagnosis, treatment or recommendations of any kind. You should always seek the advice of your qualified health care professionals with any questions or concerns you may have regarding your individual needs and any medical conditions. None of DocPlus or its content or service providers recommend or endorse any specific tests, physicians, products, procedures, opinions or other information that may be included. Reliance on content appearing on the application, whether provided by DocPlus, its content providers, visitors or others, is solely at your own risk. The data on application is only for storage purpose, no further conclusion should be drawn or it should not be used for further analysis for any purpose.</p>
            <li className="list-head"><strong>Proprietary Rights</strong></li>
            <p className="policy-list">As between you and ADGIPS owns, solely and exclusively, all rights, title and interest in, all the content (including, for example, audio, photographs, illustrations, graphics, other visuals, video, copy, text, software, titles, Shockwave files, etc.), code, data and materials thereon, the look and feel, design and organization, and the compilation of the content, code, data and materials, including but not limited to any copyrights, trademark rights, patent rights, database rights, moral rights, sui generis rights and other intellectual property and proprietary rights therein. We does not grant to you ownership of any content, code, data or materials you may access on.</p>
            <li className="list-head"><strong>User Information</strong></li>
            <p className="policy-list">In the course of your use of the platform and/or the services made available on or through the platform, you may be asked to provide certain personalized information to us (such information referred to hereinafter as “User Information”). ADGIPS’s information collection and use policies with respect to the privacy of such User Information are set forth in the our Privacy Policy which is incorporated herein by reference for all purposes. You acknowledge and agree that you are solely responsible for the accuracy and content of User Information.</p>
          </ul>
      </div>
    </div>
  );
};

export default About;

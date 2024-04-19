import React, { useState } from 'react';
import './Documents.css';

const Documents = () => {
  const [showTestResults, setShowTestResults] = useState(false);
  const [showPrescriptions, setShowPrescriptions] = useState(false);

  const toggleTestResults = () => {
    setShowTestResults(!showTestResults);
    if (showPrescriptions) {
      setShowPrescriptions(false);
    }
  };

  const togglePrescriptions = () => {
    setShowPrescriptions(!showPrescriptions);
    if (showTestResults) {
      setShowTestResults(false);
    }
  };

  return (
    <div className="documents-container">
      <h1>Documents</h1>
      <div className="document-options">
        <div className="document-option" onClick={toggleTestResults}>
          <div className="option-card">
            <h2>Recent Test Results</h2>
            <p>View your latest test reports</p>
          </div>
          
        </div>
        

        <div className="document-option" onClick={togglePrescriptions}>
          <div className="option-card">
            <h2>Prescriptions</h2>
            <p>Access your recent prescriptions</p>
          </div>
          
        </div>

      </div>
      {showTestResults && (
            <div className="image-section">
              <h3>Test Result Images</h3>
              <div className="images-container">
                {/* Display test result images here from public folder */}
                <img src="/images/images (1) (4).jpeg" alt="Test Result 1" />
                <img src="/images/images (1) (5).jpeg" alt="Test Result 2" />
                <img src="/images/images (1) (6).jpeg" alt="Test Result 3" />
                <img src="/images/images (1) (7).jpeg" alt="Test Result 4" />
              </div>
            </div>
          )}
      {showPrescriptions && (
            <div className="image-section">
              <h3>Prescription Images</h3>
              <div className="images-container">
                {/* Display prescription images here from public folder */}
                <img src="/images/prescription-1.jpg" alt="Prescription 1" />
                <img src="/images/prescription-2.jpg" alt="Prescription 2" />
                {/* Add more images as needed */}
              </div>
            </div>
          )}
    </div>
  );
};

export default Documents;

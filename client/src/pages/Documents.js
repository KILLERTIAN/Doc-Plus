import React, { useState } from 'react';
import './Documents.css';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

const Documents = () => {
  const [showTestResults, setShowTestResults] = useState(true);
  const [showPrescriptions, setShowPrescriptions] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [images, setImages] = useState([]);

  const toggleTestResults = () => {
    setShowTestResults(!showTestResults);
    setShowPrescriptions(false);
  };

  const togglePrescriptions = () => {
    setShowPrescriptions(!showPrescriptions);
    setShowTestResults(false);
  };

  const openLightbox = (index, imageList) => {
    setLightboxOpen(true);
    setLightboxIndex(index);
    setImages(imageList);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
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
            {['images (1) (4).jpeg', 'images (1) (5).jpeg', 'images (1) (6).jpeg', 'images (1) (7).jpeg'].map(
              (imageName, index) => (
                <img
                  key={index}
                  src={`/images/${imageName}`}
                  alt={`Test Result ${index + 1}`}
                  onClick={() => openLightbox(index, [
                    '/images/images (1) (4).jpeg',
                    '/images/images (1) (5).jpeg',
                    '/images/images (1) (6).jpeg',
                    '/images/images (1) (7).jpeg',
                  ])}
                />
              )
            )}
          </div>
        </div>
      )}

      {showPrescriptions && (
        <div className="image-section">
          <h3>Prescription Images</h3>
          <div className="images-container">
            {['pre1.png', 'pre2.jpeg', 'pre3.jpg', 'pre5.jpg'].map((imageName, index) => (
              <img
                key={index}
                src={`/images/${imageName}`}
                alt={`Prescription ${index + 1}`}
                onClick={() => openLightbox(index, [
                  '/images/pre1.png',
                  '/images/pre2.jpeg',
                  '/images/pre3.jpg',
                  '/images/pre5.jpg',
                ])}
              />
            ))}
          </div>
        </div>
      )}

      {lightboxOpen && (
        <Lightbox
          mainSrc={images[lightboxIndex]}
          nextSrc={images[(lightboxIndex + 1) % images.length]}
          prevSrc={images[(lightboxIndex + images.length - 1) % images.length]}
          onCloseRequest={closeLightbox}
          onMovePrevRequest={() => setLightboxIndex((lightboxIndex + images.length - 1) % images.length)}
          onMoveNextRequest={() => setLightboxIndex((lightboxIndex + 1) % images.length)}
          enableZoom={true}
          imageCaption={`Image ${lightboxIndex + 1} of ${images.length}`}
          reactModalStyle={{ overlay: { zIndex: 2000 } }}
        />

      )}
    </div>
  );
};

export default Documents;

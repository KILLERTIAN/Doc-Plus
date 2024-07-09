import React, { useState } from 'react';
import './MedicalFeeds.css';

const MedicalFeeds = () => {
  const feeds = [
    {
      id: 1,
      title: 'Common Summer Diseases',
      description: 'Learn about common diseases during summer and their preventive measures.',
      imageUrl: 'https://res.cloudinary.com/djoebsejh/image/upload/v1713628513/drdzhoxruwfyfiob37h5.jpg',
      fullPost: `
        <div>
          <p>In summer, common diseases like heat stroke, dehydration, and skin problems can occur due to high temperatures and humidity. These conditions can be harmful if not addressed properly. Here, we provide some useful information and tips to help you stay safe and healthy during the summer months.</p>
          <p>Here are some precautionary measures:</p>
          <ul>
            <li>Stay hydrated by drinking plenty of water.</li>
            <li>Avoid prolonged exposure to the sun during peak hours.</li>
            <li>Wear loose-fitting and light-colored clothing.</li>
            <li>Use sunscreen with a high SPF.</li>
          </ul>
          <h4>Symptoms of Heat Stroke</h4>
          <p>Common symptoms include:</p>
          <ul>
            <li>High body temperature</li>
            <li>Rapid heartbeat</li>
            <li>Headache</li>
            <li>Dizziness</li>
          </ul>
          <div class="images-container">
            <img src="https://res.cloudinary.com/djoebsejh/image/upload/v1713628513/drdzhoxruwfyfiob37h5.jpg" alt="Image 1" />
            <img src="https://res.cloudinary.com/djoebsejh/image/upload/v1713628487/ssctjzy2zn6xhtkbtg2t.jpg" alt="Image 2" />
            <img src="https://res.cloudinary.com/djoebsejh/image/upload/v1713629731/xdfxxcgfr7udippr2slu.jpg" alt="Image 3" />
          </div>
        </div>
      `,
    },
    {
      id: 2,
      title: 'Preventing Sunburn',
      description: 'Tips to protect your skin from sunburn this summer.',
      imageUrl: 'https://res.cloudinary.com/djoebsejh/image/upload/v1713628487/ssctjzy2zn6xhtkbtg2t.jpg',
      fullPost: `
        <div>
          <p>Sunburn occurs when your skin is exposed to excessive ultraviolet (UV) radiation from the sun. It can cause pain, redness, and long-term damage to the skin, including an increased risk of skin cancer. Taking steps to protect your skin is essential to prevent sunburn.</p>
          <p>Precautionary measures:</p>
          <ul>
            <li>Avoid sun exposure during peak hours (10 AM - 4 PM).</li>
            <li>Apply sunscreen with a high SPF rating.</li>
            <li>Wear protective clothing and hats.</li>
            <li>Seek shade when outdoors.</li>
          </ul>
          <div class="images-container">
            <img src="https://res.cloudinary.com/djoebsejh/image/upload/v1713628487/ssctjzy2zn6xhtkbtg2t.jpg" alt="Sunburn Image" />
          </div>
        </div>
      `,
    },
    {
      id: 3,
      title: 'Heat Stroke: Causes and Prevention',
      description: 'Learn about heat stroke, its causes, symptoms, and prevention.',
      imageUrl: 'https://res.cloudinary.com/djoebsejh/image/upload/v1713629731/xdfxxcgfr7udippr2slu.jpg',
      fullPost: `
        <div>
          <p>Heat stroke is a serious condition that occurs when the body overheats, typically due to prolonged exposure to or physical exertion in high temperatures. Without prompt treatment, heat stroke can damage your brain, heart, kidneys, and muscles. Preventing heat stroke is crucial, especially during hot weather.</p>
          <p>Causes and prevention:</p>
          <ul>
            <li>High temperatures and humidity can lead to heat stroke.</li>
            <li>Stay hydrated and avoid strenuous activities in hot weather.</li>
            <li>Wear lightweight and breathable clothing.</li>
            <li>Seek immediate medical attention if experiencing symptoms.</li>
          </ul>
          <div class="images-container">
            <img src="https://res.cloudinary.com/djoebsejh/image/upload/v1713629731/xdfxxcgfr7udippr2slu.jpg" alt="Heat Stroke Image" />
          </div>
        </div>
      `,
    },
    {
      id: 4,
      title: 'Malaria and Dengue Prevention',
      description: 'Tips to prevent mosquito-borne diseases like malaria and dengue.',
      imageUrl: 'https://res.cloudinary.com/djoebsejh/image/upload/v1713628503/mkn3b8kgvjsdthbhdlqo.jpg',
      fullPost: `
        <div>
          <p>Malaria and dengue are serious diseases transmitted by mosquitoes, common in tropical and subtropical regions. Both diseases can cause severe illness and even death if not treated promptly. Here are some tips to help you prevent mosquito bites and reduce the risk of contracting these diseases.</p>
          <p>Preventive measures:</p>
          <ul>
            <li>Use mosquito repellents and insecticide-treated bed nets.</li>
            <li>Eliminate breeding sites by removing standing water.</li>
            <li>Wear protective clothing and use screens on windows.</li>
            <li>Seek medical care if experiencing symptoms.</li>
          </ul>
          <div class="images-container">
            <img src="https://res.cloudinary.com/djoebsejh/image/upload/v1713628503/mkn3b8kgvjsdthbhdlqo.jpg" alt="Mosquito-borne Diseases" />
            <img src="https://res.cloudinary.com/djoebsejh/image/upload/v1713628506/b7ivctlrcsmca07dizdv.webp" alt="Mosquito-borne Diseases" />
          </div>
        </div>
      `,
    },
  ];
  
  const [activeFeed, setActiveFeed] = useState(feeds[0]);

  const handleFeedClick = (feed) => {
    setActiveFeed(feed);
  };

  return (
    <div className="medical-feeds-container">
      <h2>Medical Feeds</h2>
      <div className="feeds-wrapper">
        <div className="active-feed-container">
          <div className="feed-item expanded">
            <div className="feed-preview">
              <div className="feed-image">
                <img src={activeFeed.imageUrl} alt={activeFeed.title} />
              </div>
              <div className="feed-content">
                <h3 className="feed-title">{activeFeed.title}</h3>
                <p className="feed-description">{activeFeed.description}</p>
              </div>
            </div>
            <div className="full-post" dangerouslySetInnerHTML={{ __html: activeFeed.fullPost }} />
          </div>
        </div>
        <div className="feeds-list">
          {feeds.map((feed) => (
            <div
              key={feed.id}
              className={`feed-item ${activeFeed.id === feed.id ? 'hidden' : ''}`}
              onClick={() => handleFeedClick(feed)}
            >
              <div className="feed-preview">
                <div className="feed-image">
                  <img src={feed.imageUrl} alt={feed.title} />
                </div>
                <div className="feed-content">
                  <h3 className="feed-title">{feed.title}</h3>
                  <p className="feed-description">{feed.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MedicalFeeds;

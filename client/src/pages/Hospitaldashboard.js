import React from 'react';
import './Hospitaldashboard.css';
import Filter from '../components/Filter';
import { IonIcon } from '@ionic/react';
import { locationOutline, callOutline, star,arrowForwardOutline } from 'ionicons/icons';

function Hospitaldashboard() {
  const handleNewAppointment = () => {
    // Handle logic for creating a new appointment
    console.log('New appointment button clicked!');
    // Add your logic here to navigate to the appointment creation page or perform other actions
  };

  return (
    <div className="hospitalDashboardContainer">
      <div className="dashboardContent">
        <div className="userInfoContainer">
          <div className="profileImageName">
            <div className="profileImageSection">
              <img src="https://res.cloudinary.com/djoebsejh/image/upload/v1713684678/sruz6hlpfaukvpppie2o.png" alt="Profile" />
            </div>
            <div className="userNameId">
              <span>Recover +</span> <br />
              5679382098
            </div>
          </div>
          <div className="userDetails">
            <ul>
              <li>Location<IonIcon icon={locationOutline} />: 234 Street, Block-3, Dwarka, Delhi, India</li>
              <li>Contact<IonIcon icon={callOutline} />: +1234567890</li>
            </ul>
            <ul>

              <li>Rating:
                <span>
                  {[1, 2, 3, 4, 5].map((star) => (
                    <ion-icon key={star} name={star <= 4 ? 'star' : 'star-outline'}></ion-icon>
                  ))}
                </span>
              </li>
              <li>Doctors: 200+</li>
            </ul>
          </div>
        </div>
        <div className="userHistorySection">
          <div className="userSideBar">
            <section className="hospitalBar">
              <h3>Services Offered</h3>
              <p>Service A, Service B, Service C</p>
              <h3>Facilities</h3>
              <p>Facility X, Facility Y</p>
              <button className="newAppointmentButton" onClick={handleNewAppointment}>
                Add Appointment<ion-icon name="add-circle"></ion-icon>
              </button>
              <button className="newAppointmentButton up" >
                Upcoming Appointment<IonIcon icon={arrowForwardOutline} />
              </button>
              <button className="newAppointmentButton past" >
                Past Appointment<IonIcon icon={arrowForwardOutline} />
              </button>
            </section>
          </div>
          <div className="userPastRecords">
            <div className="headingandfilter">
              <h2>Past Appointments</h2>
              <Filter />
            </div>
            <div className="accordionContainer">
              {/* Sample interaction 1 */}
              <div>
                <div className="meetTime">20-04-2024</div>
                <div className="accordionSummary" onClick={() => { }}>
                  <p>Dr. Mathew</p>
                  <p>John</p>
                </div>
                <div className="accordianDetails">
                  <p>Symptoms: Headache, Body pain</p>
                  <p>Medicines Provided: Paracetamol, Cough Syrup</p>
                  <p>Documents: Document 1, Document 2</p>
                </div>
              </div>

              {/* Sample interaction 2 */}
              <div>
                <div className="meetTime">15-04-2024</div>
                <div className="accordionSummary" onClick={() => { }}>
                  <p>Dr. Smith</p>
                  <p>Alice</p>
                </div>
                <div className="accordianDetails">
                  <p>Symptoms: Fever, Sore throat</p>
                  <p>Medicines Provided: Antibiotics</p>
                  <p>Documents: Prescription</p>
                </div>
              </div>

              {/* Sample interaction 3 */}
              <div>
                <div className="meetTime">10-04-2024</div>
                <div className="accordionSummary" onClick={() => { }}>
                  <p>Dr. Johnson</p>
                  <p>Michael</p>
                </div>
                <div className="accordianDetails">
                  <p>Symptoms: Back pain, Fatigue</p>
                  <p>Medicines Provided: Painkillers, Rest advised</p>
                  <p>Documents: X-ray report</p>
                </div>
              </div>

              {/* Sample interaction 4 */}
              <div>
                <div className="meetTime">05-04-2024</div>
                <div className="accordionSummary" onClick={() => { }}>
                  <p>Dr. Williams</p>
                  <p>Sarah</p>
                </div>
                <div className="accordianDetails">
                  <p>Symptoms: Allergy reaction</p>
                  <p>Medicines Provided: Antihistamines, Cream</p>
                  <p>Documents: Allergy test results</p>
                </div>
              </div>

              {/* Sample interaction 5 */}
              <div>
                <div className="meetTime">01-04-2024</div>
                <div className="accordionSummary" onClick={() => { }}>
                  <p>Dr. Anderson</p>
                  <p>David</p>
                </div>
                <div className="accordianDetails">
                  <p>Symptoms: Cough, Congestion</p>
                  <p>Medicines Provided: Cough syrup, Inhaler</p>
                  <p>Documents: None</p>
                </div>
              </div>

              {/* Sample interaction 6 */}
              <div>
                <div className="meetTime">25-03-2024</div>
                <div className="accordionSummary" onClick={() => { }}>
                  <p>Dr. Garcia</p>
                  <p>Emily</p>
                </div>
                <div className="accordianDetails">
                  <p>Symptoms: Headache, Dizziness</p>
                  <p>Medicines Provided: Painkillers, Rest advised</p>
                  <p>Documents: MRI scan report</p>
                </div>
              </div>

              {/* Sample interaction 7 */}
              <div>
                <div className="meetTime">20-03-2024</div>
                <div className="accordionSummary" onClick={() => { }}>
                  <p>Dr. Martinez</p>
                  <p>Chris</p>
                </div>
                <div className="accordianDetails">
                  <p>Symptoms: Stomach ache, Nausea</p>
                  <p>Medicines Provided: Digestive enzymes</p>
                  <p>Documents: Ultrasound report</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Hospitaldashboard;

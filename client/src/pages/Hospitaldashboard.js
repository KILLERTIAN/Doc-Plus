import React, { useState, useEffect } from 'react';
import './Hospitaldashboard.css';
import Filter from '../components/Filter';
import { IonIcon } from '@ionic/react';
import axios from 'axios';
import { useAuth } from '../contexts/AuthContext.js';
import Loader from '../components/Loader';
import { locationOutline, callOutline, arrowForwardOutline } from 'ionicons/icons';

function Hospitaldashboard() {
  const { currentUser } = useAuth();
  const [loading, setLoading] = useState(true);
  const [hospital, setHospital] = useState(null);

  useEffect(() => {
    if (currentUser) {
      fetchData(currentUser.uid); 
    }
  }, [currentUser]);

  const fetchData = async (firebaseUid) => {
    try {
      const hospitalResponse = await axios.get(`http://localhost:8000/backend/hospitals?firebaseUid=${firebaseUid}`);
      const currentHospital = hospitalResponse.data[0]; 
      setHospital(currentHospital);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching hospital data:', error);
    }
  };
  

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="hospitalDashboardContainer">
      <div className="dashboardContent">
        <div className="userInfoContainer">
          <div className="profileImageName">
            <div className="profileImageSection">
              <img src={hospital.avatar} alt="Profile" />
            </div>
            <div className="userNameId">
              <span>{hospital.name}</span> <br />
              {hospital.h_id}
            </div>
          </div>
          <div className="userDetails">
            <ul>
              <li>Location<IonIcon icon={locationOutline} />: {hospital.location.address}, {hospital.location.city}, {hospital.location.state}, {hospital.location.country}</li>
              <li>Contact<IonIcon icon={callOutline} />: {hospital.contact.phone}</li>
            </ul>
            <ul>
              <li>Rating:
                <span>
                  {[1, 2, 3, 4, 5].map((star) => (
                    <ion-icon key={star} name={star <= 4 ? 'star' : 'star-outline'}></ion-icon>
                  ))}
                </span>
              </li>
              <li>Email: {hospital.contact.email}</li>
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
              <button className="newAppointmentButton" >
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
              <h2>Upcoming Appointments</h2>
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

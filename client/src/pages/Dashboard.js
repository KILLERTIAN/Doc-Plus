import React, { useState, useEffect } from 'react';
import './Dashboard.css';
import Filter from '../components/Filter.js';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';
import { useAuth } from '../contexts/AuthContext.js'; // Import the useAuth hook

function Dashboard() {
  const { currentUser } = useAuth(); // Access the current user object from the auth context
  const [patient, setPatient] = useState(null);
  const [doctors, setDoctors] = useState([]);
  const [interactions, setInteractions] = useState([]);

  useEffect(() => {
    console.log('Current User:', currentUser);
    if (currentUser) {
      // Fetch data only if currentUser exists
      fetchData(currentUser.uid); // Pass the Firebase UID to the fetchData function
    }
  }, [currentUser]);

  const fetchData = async (firebaseUid) => {
    try {
      // Fetch patient data based on Firebase UID
      const patientResponse = await axios.get(`http://localhost:8000/backend/patients?firebaseUid=${firebaseUid}`);
      const currentPatient = patientResponse.data[0]; // Assuming only one patient is associated with the user
      setPatient(currentPatient);

      // Fetch interactions data filtered by patient ID
      const interactionsResponse = await axios.get(`http://localhost:8000/backend/pdinteraction?patientId=${currentPatient.p_id}`);
      setInteractions(interactionsResponse.data);

      // Fetch all doctors
      const doctorsResponse = await axios.get('http://localhost:8000/backend/doctors');
      setDoctors(doctorsResponse.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  // Function to get doctor's name and specialization by doctor ID
  const getDoctorInfo = (doctorId) => {
    const doctor = doctors.find(d => d.d_id === doctorId);
    return doctor ? `${doctor.d_name} (${doctor.d_specialization})` : 'Unknown';
  };

  // Function to toggle visibility of details section for a specific interaction
  const toggleDetails = (id) => {
    setInteractions(prevInteractions =>
      prevInteractions.map(interaction =>
        interaction._id === id ? { ...interaction, open: !interaction.open } : interaction
      )
    );
  };

  return (
    <div className="dashboardMainContainer">
      <div className="dashboardContainer">
        {patient && (
          <div className="userInfoContainer">
            <div className="profileImageName">
              <div className="profileImageSection">
                <img src={patient.avatar} alt="" />
              </div>
              <div className="userNameId">
                <span>{patient.p_name}</span> <br />
                {patient.p_id}
              </div>
            </div>
            <div className="userDetails">
              <ul>
                <li>Gender: {patient.p_gender}</li>
                <li>Age: {patient.p_age}</li>
              </ul>
              <ul>
                <li>Blood Group: {patient.p_bloodgroup}</li>
                <li>Address: {patient.p_address}</li>
              </ul>
            </div>
          </div>
        )}
        <div className="userHistorySection">
          <div className="userSideBar">
            <section className="patientInfo">
              <h3>Family History</h3>
              <h5>Sugar </h5>
              &nbsp;
              <h3>Ongoing Treatment/Medication</h3>
              <h5>You are not undergoing through any medical issue.<br />
                Stay Healthy</h5>
            </section>
          </div>
          <div className="userPastRecords">
            <h2>Past Doctor Visits</h2>
            <Filter/>
            <div className="accordionContainer">
              {interactions.map(interaction => (
                <div key={interaction._id}>
                  <div className="fiterTime">
                    {new Date(interaction.meeting_date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: '2-digit',
                      day: '2-digit'
                    })}
                  </div>
                  <div className="accordionSummary" onClick={() => toggleDetails(interaction._id)}>
                    <p>{getDoctorInfo(interaction.d_id)}</p>
                    <p>{interaction.hospital}
                      <FontAwesomeIcon className="accordionArrow" icon={interaction.open ? faCaretUp : faCaretDown} />
                    </p>
                  </div>
                  {interaction.open && (
                    <div className="accordianDetails">
                      <p>Symptoms: {interaction.symptoms.join(', ')}</p>
                      <p>Medicines Provided: {interaction.medicines_provided.join(', ')}</p>
                      <p>Documents: {interaction.documents.join(', ')}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

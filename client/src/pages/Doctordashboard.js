import React, { useState, useEffect } from 'react';
import './Doctordashboard.css';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';
import { useAuth } from '../contexts/AuthContext.js'; // Import the useAuth hook

function DoctorDashboard() {
  const { currentUser } = useAuth();
  const [doctor, setDoctor] = useState(null);
  const [patientInteractions, setPatientInteractions] = useState([]);

  useEffect(() => {
    if (currentUser) {
      fetchData(currentUser.uid);
    }
  }, [currentUser]);

  const fetchData = async (firebaseUid) => {
    try {
      // Fetch doctor data
      const doctorResponse = await axios.get(`https://doc-plus.onrender.com/backend/doctors?firebaseUid=${firebaseUid}`);
      const currentDoctor = doctorResponse.data[0];
      console.log('Doctor Response:', currentDoctor);
      setDoctor(currentDoctor);

      // Fetch patient interactions data for the current doctor
      const interactionsResponse = await axios.get(`https://doc-plus.onrender.com/backend/pdinteraction?doctorId=${currentDoctor.d_id}`);
      const interactionsData = interactionsResponse.data;
      console.log('Interactions Response:', interactionsData);
      setPatientInteractions(interactionsData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const getPatientName = (patientId) => {
    const interaction = patientInteractions.find(i => i.p_id === patientId);
    return interaction ? interaction.p_name : 'Unknown';
  };

  const toggleDetails = (id) => {
    setPatientInteractions(prevInteractions =>
      prevInteractions.map(interaction =>
        interaction._id === id ? { ...interaction, open: !interaction.open } : interaction
      )
    );
  };

  return (
    <div className="doctorDashboardMainContainer">
      <div className="doctorDashboardContainer">
        {doctor && (
          <div className="doctorInfoContainer">
            <div className="profileImageName">
              <div className="profileImageSection">
                <img src={doctor.avatar} alt="" />
              </div>
              <div className="doctorNameId">
                <span>{doctor.d_name}</span> <br />
                {doctor.d_id}
              </div>
            </div>
            <div className="doctorDetails">
              <ul>
                <li>Gender : {doctor.d_gender}</li>
                <li>Age : {doctor.d_age}</li>
              </ul>
              <ul>
                <li>Qualifications: {doctor.d_qualifications}</li>
                <li>Email: {doctor.email}</li>
              </ul>
            </div>
          </div>
        )}
        <div className="patientInteractionSection">
          <h2>Patient Interactions</h2>
          <div className="accordionContainer">
            {patientInteractions.map(interaction => (
              <div key={interaction._id}>
                <div className="fiterTime">
                  {new Date(interaction.meeting_date).toLocaleDateString('en-GB', {
                    year: 'numeric',
                    month: '2-digit',
                    day: '2-digit'
                  })}
                </div>
                <div className="accordionSummary" onClick={() => toggleDetails(interaction._id)}>
                  <p>{getPatientName(interaction.p_id)}</p>
                  <FontAwesomeIcon className="accordionArrow" icon={interaction.open ? faCaretUp : faCaretDown} />
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
  );
}

export default DoctorDashboard;

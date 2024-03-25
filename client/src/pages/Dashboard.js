import React, { useState, useEffect } from 'react';
import './Dashboard.css';
import axios from 'axios';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function Dashboard() {
  const [patient, setPatient] = useState(null);
  const [doctors, setDoctors] = useState([]);
  const [interactions, setInteractions] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      // Fetch patient data
      const patientResponse = await axios.get('http://localhost:8000/backend/patients');
      const currentPatient = patientResponse.data[0]; // Assuming the first patient in the response data is displayed
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

  return (
    <div className="dashboardMainContainer">
      <div className="dashboardContainer">
        {patient && (
          <div className="userInfoContainer">
            <div className="profileImageName">
              <div className="profileImageSection">
                <img src="https://robohash.org/sintessequaerat.png?size=70x70&set=set1" alt="" />
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
            {/* Display past doctor visits using Accordion */}
            {interactions.map(interaction => (
              <Accordion key={interaction._id}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                  <Typography>Date: {new Date(interaction.meeting_date).toLocaleDateString()}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <p>Doctor: {getDoctorInfo(interaction.d_id)}</p>
                    {/* <p>Specialization: {getDoctorSpecialization(interaction.d_id)}</p> */}
                    <p>Hospital: {interaction.hospital}</p>
                    <p>Symptoms: {interaction.symptoms.join(', ')}</p>
                    <p>Medicines Provided: {interaction.medicines_provided.join(', ')}</p>
                    <p>Documents: {interaction.documents.join(', ')}</p>
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

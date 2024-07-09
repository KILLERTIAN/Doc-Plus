import React, { useState, useEffect } from 'react';
import './Dashboard.css';
import Filter from '../components/Filter.js';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';
import { useAuth } from '../contexts/AuthContext.js';
import Loader from '../components/Loader';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

function Dashboard() {
  const { currentUser } = useAuth(); // Access the current user object from the auth context
  const [loading, setLoading] = useState(true); // State to manage loading indicator
  const [patient, setPatient] = useState(null);
  const [doctors, setDoctors] = useState([]);
  const [interactions, setInteractions] = useState([]);
  const [ongoingTreatments, setOngoingTreatments] = useState([]);
  const [filters, setFilters] = useState({});
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  // Function to calculate time remaining for a treatment
  const calculateTimeRemaining = (treatment) => {
    const now = new Date();
    const meetingDate = new Date(treatment.meeting_date);
    const endDate = new Date(meetingDate.getTime() + treatment.treatment_duration * 24 * 60 * 60 * 1000); // Calculate end date based on meeting date and treatment duration
    const timeDiff = endDate - now;
    const daysRemaining = Math.ceil(timeDiff / (1000 * 60 * 60 * 24)); // Convert milliseconds to days and round up
    return `${daysRemaining} days`;
  };

  const handleFilterChange = (name, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
    // Perform filtering logic here based on the updated filters state
    console.log("Filters:", filters);
  };

  useEffect(() => {
    if (currentUser) {
      fetchData(currentUser.uid);
    }
  }, [currentUser]);

  const fetchData = async (firebaseUid) => {
    try {
      const patientResponse = await axios.get(`https://doc-plus.onrender.com/backend/patients?firebaseUid=${firebaseUid}`);
      const currentPatient = patientResponse.data[0];
      setPatient(currentPatient);

      const interactionsResponse = await axios.get(`https://doc-plus.onrender.com/backend/pdinteraction?patientId=${currentPatient.p_id}`);
      const interactionsData = interactionsResponse.data;
      setInteractions(interactionsData);

      // Store interactions data in local storage
      localStorage.setItem('interactions', JSON.stringify(interactionsData));

      const doctorsResponse = await axios.get('https://doc-plus.onrender.com/backend/doctors');
      setDoctors(doctorsResponse.data);

      // Calculate ongoing treatments
      const now = new Date();
      const ongoing = interactionsData.filter(interaction => {
        const meetingDate = new Date(interaction.meeting_date);
        const formattedDate = meetingDate.toLocaleDateString('en-GB', {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit'
        });
        const durationDate = new Date(formattedDate);
        durationDate.setDate(durationDate.getDate() + interaction.treatment_duration);
        return durationDate > now;
      });
      setOngoingTreatments(ongoing);

      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    if (patient && !localStorage.getItem('isReloaded')) {

      const storedInteractions = JSON.parse(localStorage.getItem('interactions'));
      if (storedInteractions) {
        setInteractions(storedInteractions);


        const now = new Date();
        const ongoing = storedInteractions.filter(interaction => {
          const meetingDate = new Date(interaction.meeting_date);
          const formattedDate = meetingDate.toLocaleDateString('en-GB', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit'
          });
          const durationDate = new Date(formattedDate);
          durationDate.setDate(durationDate.getDate() + interaction.treatment_duration);
          return durationDate > now;
        });
        setOngoingTreatments(ongoing);
      }

      localStorage.setItem('isReloaded', true);
      window.location.reload();
    }
  }, [patient]);

  const getDoctorInfo = (doctorId) => {
    const doctor = doctors.find(d => d.d_id === doctorId);
    return doctor ? `${doctor.d_name} (${doctor.d_specialization})` : 'Unknown';
  };

  const toggleDetails = (id) => {
    setInteractions(prevInteractions =>
      prevInteractions.map(interaction =>
        interaction._id === id ? { ...interaction, open: !interaction.open } : interaction
      )
    );
  };


  const openLightbox = (index, documentUrls) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };


  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  return (
    <div className="dashboardMainContainer">
      <div className="dashboardContainer">
        {loading ? (
          <Loader /> // Render the Loader component while data is being fetched
        ) : (
          <>
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
                  <p>{patient ? patient.Family_History : 'Loading...'}</p>
                  <h3>Allergies</h3>
                  <p>{patient ? patient.Allergies : 'Loading...'}</p>
                  <div className="ongoingTreatments">
                    <h3>Ongoing Treatments</h3>
                    <ul className="treatmentList">
                      {ongoingTreatments.map(treatment => (
                        <li key={treatment._id} className="treatmentItem">
                          <div className="treatmentInfo">
                            <p className="treatmentName">{treatment.treatment_name}</p>
                            <p className="medicineTaken">Medicine Taken: {treatment.medicines_provided.join(', ')}</p>
                            <p className="timeRemaining">Time Remaining: {calculateTimeRemaining(treatment)}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </section>
              </div>
              <div className="userPastRecords">
                <div className="headingandfilter">
                  <h2>Past Doctor Visits</h2>
                  <Filter onFilterChange={handleFilterChange} />
                </div>
                <div className="accordionContainer">
                  {interactions.map(interaction => (
                    <div key={interaction._id}>
                      <div className="fiterTime">
                        {new Date(interaction.meeting_date).toLocaleDateString('en-GB', {
                          year: 'numeric',
                          month: '2-digit',
                          day: '2-digit'
                        })}
                      </div>
                      <div className="accordionSummary" onClick={() => toggleDetails(interaction._id)}>
                        <p>{getDoctorInfo(interaction.d_id)}</p>
                        <p>
                          {interaction.hospital}
                          <FontAwesomeIcon className="accordionArrow" icon={interaction.open ? faCaretUp : faCaretDown} />
                        </p>
                      </div>
                      {interaction.open && (
                        <div className="accordianDetails">
                          <p>Symptoms: {interaction.symptoms.join(', ')}</p>
                          <p>Medicines Provided: {interaction.medicines_provided.join(', ')}</p>
                          {/* Render document previews */}
                          <div className="document-previews">
                            {interaction.documents.map((document, index) => (
                              <img
                                key={index}
                                src={document.document_url}
                                alt={`Document ${index + 1}`}
                                onClick={() => openLightbox(index, interaction.documents)}
                                className="document-preview"
                              />
                            ))}
                          </div>

                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
      {lightboxOpen && (
        <Lightbox
          mainSrc={interactions[lightboxIndex]?.documents[0]?.document_url}
          onCloseRequest={closeLightbox}
          nextSrc={interactions[(lightboxIndex + 1) % interactions.length]?.documents[0]?.document_url}
          prevSrc={interactions[(lightboxIndex + interactions.length - 1) % interactions.length]?.documents[0]?.document_url}
          onMovePrevRequest={() => setLightboxIndex((lightboxIndex + interactions.length - 1) % interactions.length)}
          onMoveNextRequest={() => setLightboxIndex((lightboxIndex + 1) % interactions.length)}
          enableZoom={true}
        />
      )}



    </div>
  );
}

export default Dashboard;

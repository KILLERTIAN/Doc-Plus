import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './Createpatient.css';
import { useAuth } from '../contexts/AuthContext';

function Createpatient() {
  const navigate = useNavigate();
  const { currentUser } = useAuth(); // Get currentUser from useAuth hook
  const [patient, setPatient] = useState({
    p_id: '',
    p_name: '',
    p_age: 0,
    p_gender: '',
    p_bloodgroup: '',
    p_address: '',
    firebaseUid: currentUser ? currentUser.uid : '' // Include Firebase UID
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPatient(prevPatient => ({
      ...prevPatient,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8000/backend/patients', patient);
      alert('Patient created successfully!');
      setPatient({
        p_id: '',
        p_name: '',
        p_age: 0,
        p_gender: '',
        p_bloodgroup: '',
        p_address: '',
        firebaseUid: currentUser ? currentUser.uid : '' // Include Firebase UID
      });
      navigate('/dashboard');
    } catch (error) {
      console.error('Error creating patient:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <div className="create-patient-container">
      <h2>Create Patient</h2>
      <div className="card">
        <form onSubmit={handleSubmit}>
          <label>
            Patient ID:
            <input type="text" name="p_id" value={patient.p_id} onChange={handleChange} required />
          </label>
          <label>
            Patient Name:
            <input type="text" name="p_name" value={patient.p_name} onChange={handleChange} required />
          </label>
          <label>
            Age:
            <input type="number" name="p_age" value={patient.p_age} onChange={handleChange} required />
          </label>
          <label>
            Gender:
            <input type="text" name="p_gender" value={patient.p_gender} onChange={handleChange} required />
          </label>
          <label>
            Blood Group:
            <input type="text" name="p_bloodgroup" value={patient.p_bloodgroup} onChange={handleChange} />
          </label>
          <label>
            Address:
            <input type="text" name="p_address" value={patient.p_address} onChange={handleChange} required />
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Createpatient;

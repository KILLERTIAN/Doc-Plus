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
    avatar: null, // Add avatar field to state
    firebaseUid: currentUser ? currentUser.uid : '' // Include Firebase UID
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPatient(prevPatient => ({
      ...prevPatient,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    setPatient(prevPatient => ({
      ...prevPatient,
      avatar: e.target.files[0] // Store the selected file in state
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('p_id', patient.p_id);
      formData.append('p_name', patient.p_name);
      formData.append('p_age', patient.p_age);
      formData.append('p_gender', patient.p_gender);
      formData.append('p_bloodgroup', patient.p_bloodgroup);
      formData.append('p_address', patient.p_address);
      formData.append('avatar', patient.avatar); // Append avatar file to form data
      formData.append('firebaseUid', patient.firebaseUid);

      await axios.post('http://localhost:8000/backend/patients', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      alert('Patient created successfully!');
      setPatient({
        p_id: '',
        p_name: '',
        p_age: 0,
        p_gender: '',
        p_bloodgroup: '',
        p_address: '',
        avatar: null,
        firebaseUid: currentUser ? currentUser.uid : ''
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
        <form onSubmit={handleSubmit} encType="multipart/form-data">
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
          <label>
            Avatar:
            <input type="file" name="avatar" accept="image/*" onChange={handleFileChange} />
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Createpatient;

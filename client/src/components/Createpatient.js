import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Createpatient.css';
import { useAuth } from '../contexts/AuthContext';

function Createpatient() {
  const navigate = useNavigate();
  const { currentUser } = useAuth();
  const [patient, setPatient] = useState({
    p_id: '',
    p_name: '',
    p_age: '',
    p_gender: 'Male',
    p_bloodgroup: '',
    p_address: '',
    Allergies: '',
    Family_History: '',
    avatar: null,
    firebaseUid: currentUser ? currentUser.uid : ''
  });

  const [otherAllergy, setOtherAllergy] = useState('');
  const [otherFamilyHistory, setOtherFamilyHistory] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'Allergies' && value === 'Other') {
      setOtherAllergy('');
    }
    if (name === 'Family_History' && value === 'Other') {
      setOtherFamilyHistory('');
    }
    setPatient(prevPatient => ({
      ...prevPatient,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    setPatient(prevPatient => ({
      ...prevPatient,
      avatar: e.target.files[0]
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
      formData.append('Allergies', patient.Allergies === 'Other' ? otherAllergy : patient.Allergies);
      formData.append('Family_History', patient.Family_History === 'Other' ? otherFamilyHistory : patient.Family_History);
      formData.append('avatar', patient.avatar);
      formData.append('firebaseUid', patient.firebaseUid);

      await axios.post('http://localhost:8000/backend/patients', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      setPatient({
        p_id: '',
        p_name: '',
        p_age: '',
        p_gender: 'Male',
        p_bloodgroup: '',
        p_address: '',
        Allergies: '',
        Family_History: '',
        avatar: null,
        firebaseUid: currentUser ? currentUser.uid : ''
      });
      setOtherAllergy('');
      setOtherFamilyHistory('');
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
            <select name="p_gender" value={patient.p_gender} onChange={handleChange} required>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
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
            Allergies:
            <select name="Allergies" value={patient.Allergies} onChange={handleChange} required>
              <option value="">Select Allergy</option>
              <option value="Pollen">Pollen</option>
              <option value="Dust">Dust</option>
              <option value="Peanuts">Peanuts</option>
              <option value="None">None</option>
              <option value="Other">Other</option>
            </select>
            {patient.Allergies === 'Other' && (
              <input type="text" value={otherAllergy} onChange={(e) => setOtherAllergy(e.target.value)} placeholder="Specify Allergy" />
            )}
          </label>
          <label>
            Family History:
            <select name="Family_History" value={patient.Family_History} onChange={handleChange} required>
              <option value="">Select Family History</option>
              <option value="Heart Disease">Heart Disease</option>
              <option value="Diabetes">Diabetes</option>
              <option value="Cancer">Cancer</option>
              <option value="None">None</option>
              <option value="Other">Other</option>
            </select>
            {patient.Family_History === 'Other' && (
              <input type="text" value={otherFamilyHistory} onChange={(e) => setOtherFamilyHistory(e.target.value)} placeholder="Specify Family History" />
            )}
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

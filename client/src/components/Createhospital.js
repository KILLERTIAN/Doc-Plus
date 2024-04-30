import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Createhospital.css';
import { useAuth } from '../contexts/AuthContext';

function CreateHospital() {
  const navigate = useNavigate();
  const { currentUser } = useAuth();
  const [previewUrl, setPreviewUrl] = useState('');
  const [h_id, setH_id] = useState('');
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [country, setCountry] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [avatar, setAvatar] = useState(null);
  const firebaseUid = currentUser ? currentUser.uid : '';
  const [loading, setLoading] = useState(false); // State to manage loading state
  const [error, setError] = useState(null); // State to manage error message

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      setAvatar(file);

      const reader = new FileReader();
      reader.onload = () => {
        setPreviewUrl(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if all required fields are filled out
    if (!h_id || !name || !address || !city || !state || !country || !phone || !email) {
      alert('Please fill out all required fields.');
      return;
    }

    // Set loading state to true
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append('h_id', h_id);
      formData.append('name', name);
      formData.append('address', address);
      formData.append('city', city);
      formData.append('state', state);
      formData.append('country', country);
      formData.append('phone', phone);
      formData.append('email', email);
      formData.append('avatar', avatar);
      formData.append('firebaseUid', firebaseUid);
      const locationObj = { address, city, state, country };
      formData.append('location', JSON.stringify(locationObj));

      const contactObj = { phone, email };
      formData.append('contact', JSON.stringify(contactObj));

      const response = await axios.post('http://localhost:8000/backend/hospitals', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      // Reset form fields
      setH_id('');
      setName('');
      setAddress('');
      setCity('');
      setState('');
      setCountry('');
      setPhone('');
      setEmail('');
      setAvatar(null);
      setPreviewUrl('');

      // Set loading state to false
      setLoading(false);

      // Redirect to hospital dashboard
      navigate('/hospital-dashboard');
    } catch (error) {
      console.error('Error creating hospital:', error);
      // Set error state to display error message
      setError('An error occurred. Please try again.');
      // Set loading state to false
      setLoading(false);
    }
  };

  return (
    <div className="create-hospital-container">
      <h2>Create Hospital</h2>
      <div className="card">
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <label htmlFor="avatar" className="profile-image-preview">
            {previewUrl ? (
              <img src={previewUrl} alt="Preview" className="preview-image" />
            ) : (
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/1/14/9-94702_user-outline-icon-clipart-png-download-profile-icon.png"
                alt=""
                className="preview-image"
              />
            )}
            <input type="file" id="avatar" name="avatar" accept="image/*" onChange={handleFileChange} />
          </label>

          <label>
            Hospital ID:
            <input type="text" value={h_id} onChange={(e) => setH_id(e.target.value)} placeholder="Enter Hospital ID" required />
          </label>
          <label>
            Hospital Name:
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter Hospital Name" required />
          </label>
          <label>
            Address:
            <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Enter Address" required />
          </label>
          <label>
            City:
            <input type="text" value={city} onChange={(e) => setCity(e.target.value)} placeholder="Enter City" required />
          </label>
          <label>
            State:
            <input type="text" value={state} onChange={(e) => setState(e.target.value)} placeholder="Enter State" required />
          </label>
          <label>
            Country:
            <input type="text" value={country} onChange={(e) => setCountry(e.target.value)} placeholder="Enter Country" required />
          </label>
          <label>
            Phone Number:
            <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Enter Phone Number" required />
          </label>
          <label>
            Email:
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email" required />
          </label>

          {/* Display error message if there's an error */}
          {error && <div className="error">{error}</div>}

          {/* Display loading spinner while submitting */}
          {loading ? (
            <div className="loading">Submitting...</div>
          ) : (
            <button type="submit">Submit</button>
          )}
        </form>
      </div>
    </div>
  );
}

export default CreateHospital;

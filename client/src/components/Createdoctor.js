import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Createdoctor.css';
import { useAuth } from '../contexts/AuthContext';

function Createdoctor() {
    const navigate = useNavigate();
    const { currentUser } = useAuth();
    const [previewUrl, setPreviewUrl] = useState('');
    const [doctor, setDoctor] = useState({
        d_id: '',
        d_name: '',
        d_age: '',
        d_gender: 'Male',
        d_qualifications: '',
        d_specialization: '',
        d_hospital: '',
        email: '',
        phone_number: '',
        availability: '',
        educations: [],
        work_experience: [],
        bio: '',
        avatar: null,
        firebaseUid: currentUser ? currentUser.uid : ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setDoctor(prevDoctor => ({
            ...prevDoctor,
            [name]: value
        }));
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];

        if (file) {
            setDoctor(prevDoctor => ({
                ...prevDoctor,
                avatar: file
            }));

            const reader = new FileReader();
            reader.onload = () => {
                setPreviewUrl(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append('d_id', doctor.d_id);
            formData.append('d_name', doctor.d_name);
            formData.append('d_age', doctor.d_age);
            formData.append('d_gender', doctor.d_gender);
            formData.append('d_qualifications', doctor.d_qualifications);
            formData.append('d_specialization', doctor.d_specialization);
            formData.append('d_hospital', doctor.d_hospital);
            formData.append('email', doctor.email);
            formData.append('phone_number', doctor.phone_number);
            formData.append('availability', doctor.availability);
            formData.append('bio', doctor.bio);
            formData.append('avatar', doctor.avatar);
            formData.append('educations', doctor.educations);
            formData.append('work_experience', doctor.work_experience);
            formData.append('firebaseUid', doctor.firebaseUid);

            await axios.post('http://localhost:8000/backend/doctors', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            setDoctor({
                d_id: '',
                d_name: '',
                d_age: '',
                d_gender: 'Male',
                d_qualifications: '',
                d_specialization: '',
                d_hospital: '',
                email: '',
                phone_number: '',
                availability: '',
                educations: [],
                work_experience: [],
                bio: '',
                avatar: null,
                firebaseUid: currentUser ? currentUser.uid : ''
            });
            navigate('/dashboard');
            window.location.reload();
        } catch (error) {
            console.error('Error creating doctor:', error);
            alert('An error occurred. Please try again.');
        }
    };

    const addEducation = () => {
        setDoctor(prevDoctor => ({
            ...prevDoctor,
            educations: [...prevDoctor.educations, { degree: '', institution: '', year: '' }]
        }));
    };

    const addWorkExperience = () => {
        setDoctor(prevDoctor => ({
            ...prevDoctor,
            work_experience: [...prevDoctor.work_experience, { position: '', hospital: '', start_year: '', end_year: '' }]
        }));
    };

    const handleEducationChange = (index, e) => {
        const { name, value } = e.target;
        const updatedEducations = [...doctor.educations];
        updatedEducations[index][name] = value;
        setDoctor(prevDoctor => ({
            ...prevDoctor,
            educations: updatedEducations
        }));
    };

    const handleWorkExperienceChange = (index, e) => {
        const { name, value } = e.target;
        const updatedWorkExperience = [...doctor.work_experience];
        updatedWorkExperience[index][name] = value;
        setDoctor(prevDoctor => ({
            ...prevDoctor,
            work_experience: updatedWorkExperience
        }));
    };

    return (
        <div className="create-doctor-container">
            <h2>Create Doctor</h2>
            <div className="card">
                <form onSubmit={handleSubmit} encType="multipart/form-data">
                    <label htmlFor="avatar" className="profile-image-preview">
                        {previewUrl ? (
                            <img src={previewUrl} alt="Preview" className="preview-image" />
                        ) : (
                            <img src="https://upload.wikimedia.org/wikipedia/commons/1/14/9-94702_user-outline-icon-clipart-png-download-profile-icon.png" alt="" className="preview-image" />
                        )}
                        <input type="file" id="avatar" name="avatar" accept="image/*" onChange={handleFileChange} />
                    </label>

                    <label>
                        Doctor ID:
                        <input type="text" name="d_id" value={doctor.d_id} onChange={handleChange} placeholder="Enter Doctor ID" required />
                    </label>
                    <label>
                        Doctor Name:
                        <input type="text" name="d_name" value={doctor.d_name} onChange={handleChange} placeholder="Enter Doctor Name" required />
                    </label>
                    <label>
                        Age:
                        <input type="number" name="d_age" value={doctor.d_age} onChange={handleChange} placeholder="Enter Age" required />
                    </label>
                    <label>
                        Gender:
                        <select name="d_gender" value={doctor.d_gender} onChange={handleChange} required>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                        </select>
                    </label>
                    <label>
                        Qualifications:
                        <input type="text" name="d_qualifications" value={doctor.d_qualifications} onChange={handleChange} placeholder="Enter Qualifications" required />
                    </label>
                    <label>
                        Specialization:
                        <input type="text" name="d_specialization" value={doctor.d_specialization} onChange={handleChange} placeholder="Enter Specialization" required />
                    </label>
                    <label>
                        Hospital:
                        <input type="text" name="d_hospital" value={doctor.d_hospital} onChange={handleChange} placeholder="Enter Hospital" required />
                    </label>
                    <label>
                        Email:
                        <input type="email" name="email" value={doctor.email} onChange={handleChange} placeholder="Enter Email" required />
                    </label>
                    <label>
                        Phone Number:
                        <input type="tel" name="phone_number" value={doctor.phone_number} onChange={handleChange} placeholder="Enter Phone Number" required />
                    </label>
                    <label>
                        Availability:
                        <input type="text" name="availability" value={doctor.availability} onChange={handleChange} placeholder="Enter Availability" required />
                    </label>
                    <label>
                        Bio:
                        <textarea name="bio" value={doctor.bio} onChange={handleChange} placeholder="Enter Bio" required></textarea>
                    </label>
                    <div className="education-section">
                        <label>Education:
                            {doctor.educations.map((education, index) => (
                                <div key={index}>
                                    <input type="text" name="degree" value={education.degree} onChange={(e) => handleEducationChange(index, e)} placeholder="Degree" required />
                                    <input type="text" name="institution" value={education.institution} onChange={(e) => handleEducationChange(index, e)} placeholder="Institution" required />
                                    <input type="text" name="year" value={education.year} onChange={(e) => handleEducationChange(index, e)} placeholder="Year" required />
                                </div>
                            ))}

                        </label>

                        <button type="button" onClick={addEducation}>Add Education</button>
                    </div>
                    <div className="work-experience-section">
                        <label>Work Experience:
                            {doctor.work_experience.map((experience, index) => (
                                <div key={index}>
                                    <input type="text" name="position" value={experience.position} onChange={(e) => handleWorkExperienceChange(index, e)} placeholder="Position" required />
                                    <input type="text" name="hospital" value={experience.hospital} onChange={(e) => handleWorkExperienceChange(index, e)} placeholder="Hospital" required />
                                    <input type="text" name="start_year" value={experience.start_year} onChange={(e) => handleWorkExperienceChange(index, e)} placeholder="Start Year" required />
                                    <input type="text" name="end_year" value={experience.end_year} onChange={(e) => handleWorkExperienceChange(index, e)} placeholder="End Year" required />
                                </div>
                            ))}
                        </label>

                        <button type="button" onClick={addWorkExperience}>Add Work Experience</button>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default Createdoctor;

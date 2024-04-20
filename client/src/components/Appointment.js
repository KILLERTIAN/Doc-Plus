// import React from 'react';
// import React, { useEffect } from 'react';
import React, { useState } from 'react';
// import '../App.css';
// import { Button } from './Button';
import './Appointment.css';
import { Link } from 'react-router-dom';

const ReminderPage = () => {
    // State to manage appointments and reminders
    const [appointments, setAppointments] = useState([]);
    const [medicineReminders, setMedicineReminders] = useState([]);
  
    // Function to add appointment
    const addAppointment = (newAppointment) => {
      setAppointments([...appointments, newAppointment]);
    };
  
    // Function to add medicine reminder
    const addMedicineReminder = (newReminder) => {
      setMedicineReminders([...medicineReminders, newReminder]);
    };
  
    return (
      <div>
        <h1>Doctor Appointment and Medicine Reminder Page</h1>
  
        {/* Form to add new appointment */}
        <h2>Appointments</h2>
        <form onSubmit={(e) => {
          e.preventDefault();
          const newAppointment = e.target.appointment.value;
          addAppointment(newAppointment);
          e.target.reset();
        }}>
          <input type="text" name="appointment" placeholder="Enter appointment details" />
          <button type="submit">Add Appointment</button>
        </form>
  
        {/* Display list of appointments */}
        <div>
          
          <ul>
            {appointments.map((appointment, index) => (
              <li key={index}>{appointment}</li>
            ))}
          </ul>
        </div>
  
        {/* Form to add new medicine reminder */}
        <h2>Medicine Reminders</h2>
        <form onSubmit={(e) => {
          e.preventDefault();
          const newReminder = e.target.reminder.value;
          addMedicineReminder(newReminder);
          e.target.reset();
        }}>
          <input type="text" name="reminder" placeholder="Enter medicine reminder details" />
          <button type="submit">Add Reminder</button>
        </form>
  
        {/* Display list of medicine reminders */}
        <div>
          
          <ul>
            {medicineReminders.map((reminder, index) => (
              <li key={index}>{reminder}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  };
  
  export default ReminderPage;
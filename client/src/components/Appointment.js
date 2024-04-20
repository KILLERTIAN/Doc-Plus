import React from 'react';
import './Appointment.css';


function Appointments() {
  // Placeholder data for upcoming appointments
  const upcomingAppointments = [
    { time: '10:00 AM', location: 'Hospital A', date: '2024-04-25' },
    { time: '02:30 PM', location: 'Clinic B', date: '2024-04-28' },
    { time: '11:15 AM', location: 'Specialist Center', date: '2024-05-02' }
  ];

  // Helper function to format date for display
  const formatDate = (dateStr) => {
    const dateObj = new Date(dateStr);
    return `${dateObj.toLocaleDateString('en-GB', { weekday: 'short' })}, ${dateObj.getDate()} ${dateObj.toLocaleDateString('en-GB', { month: 'short' })}`;
  };

  return (
    <div className='mainAppointmentContainer'>
      <h2>Upcoming Appointments</h2>
      <div className="calendar-container">
        {upcomingAppointments.map((appointment, index) => (
          <div key={index} className="calendar-item">
            <div className="calendar-date">{formatDate(appointment.date)}</div>
            <div className="calendar-time">{appointment.time}</div>
            <div className="calendar-location">{appointment.location}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Appointments;

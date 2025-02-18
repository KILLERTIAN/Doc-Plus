import React from 'react';
import './Appointment.css';
import { IoLocationSharp, IoTimeOutline } from 'react-icons/io5';

function Appointments() {
  const upcomingAppointments = [
    { time: '10:00 AM', location: 'Hospital A', date: '2024-04-25' },
    { time: '02:30 PM', location: 'Clinic B', date: '2024-04-28' },
    { time: '11:15 AM', location: 'Specialist Center', date: '2024-05-02' }
  ];

  const formatDate = (dateStr) => {
    const dateObj = new Date(dateStr);
    return {
      day: dateObj.toLocaleDateString('en-GB', { weekday: 'short' }),
      date: dateObj.getDate(),
      month: dateObj.toLocaleDateString('en-GB', { month: 'short' }),
    };
  };

  return (
    <div className='mainAppointmentContainer'>
      <h2>Upcoming Appointments</h2>
      <div className="calendar-container">
        {upcomingAppointments.map((appointment, index) => {
          const { day, date, month } = formatDate(appointment.date);
          return (
            <div key={index} className="calendar-card">
              <div className="calendar-date-box">
                <div className="date-number">{date}</div>
                <div className="date-text">
                  <span>{day}</span>
                  <span>{month}</span>
                </div>
              </div>
              <div className="calendar-details">
                <div className="calendar-time">
                  <IoTimeOutline className="icon" /> {appointment.time}
                </div>
                <div className="calendar-location">
                  <IoLocationSharp className="icon" /> {appointment.location}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Appointments;

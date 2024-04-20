import React, { useState, useEffect } from 'react';
import './Medicalreminder.css';
import { IonIcon } from '@ionic/react';
import { checkmarkCircleOutline, closeCircleOutline } from 'ionicons/icons';

const Medicalreminder = () => {
  // Load completed doses from localStorage on component mount
  const initialCompletedDoses = JSON.parse(localStorage.getItem('completedDoses')) || [];
  const [completedDoses, setCompletedDoses] = useState(initialCompletedDoses);

  const medicationReminders = [
    { id: 1, medicineName: 'Medicine A', dosage: '500mg', time: 'Morning' },
    { id: 2, medicineName: 'Medicine B', dosage: '250mg', time: 'Afternoon' },
    { id: 3, medicineName: 'Medicine C', dosage: '100mg', time: 'Evening' }
  ];

  useEffect(() => {
    // Save completed doses to localStorage whenever completedDoses state changes
    localStorage.setItem('completedDoses', JSON.stringify(completedDoses));
  }, [completedDoses]);

  const handleToggleCompleted = (id) => {
    if (completedDoses.includes(id)) {
      setCompletedDoses(completedDoses.filter((doseId) => doseId !== id));
    } else {
      setCompletedDoses([...completedDoses, id]);
    }
  };

  return (
    <div className="medical-reminder-container">
      <h2>Medication Reminders</h2>
      <div className="reminderContainer">
        {medicationReminders.map((reminder) => (
          <div
            key={reminder.id}
            className={`reminder-card ${completedDoses.includes(reminder.id) ? 'completed' : ''}`}
          >
            <div className="medicine-name">{reminder.medicineName}</div>
            <div className="dosage">Dosage: {reminder.dosage}</div>
            <div className="time">Time: {reminder.time}</div>
            <div className="completion-icon" onClick={() => handleToggleCompleted(reminder.id)}>
              <span className={`done-text ${completedDoses.includes(reminder.id) ? 'completed' : ''}`}>
                {completedDoses.includes(reminder.id) ? 'Done' : 'Mark Done'}
              </span>
              <IonIcon
                icon={checkmarkCircleOutline}
                color={completedDoses.includes(reminder.id) ? 'success' : 'medium'}
              />
              {completedDoses.includes(reminder.id) ? (
                <IonIcon
                  icon={closeCircleOutline}
                  color="danger"
                  onClick={() => handleToggleCompleted(reminder.id)}
                  className="close-icon"
                />
              ) : null}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Medicalreminder;

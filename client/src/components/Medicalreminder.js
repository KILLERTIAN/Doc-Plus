import React, { useState, useEffect } from "react";
import "./Medicalreminder.css";
import { IonIcon } from "@ionic/react";
import { checkmarkCircleOutline, closeCircleOutline } from "ionicons/icons";

const Medicalreminder = () => {
  const initialCompletedDoses =
    JSON.parse(localStorage.getItem("completedDoses")) || [];
  const [completedDoses, setCompletedDoses] = useState(initialCompletedDoses);

  const medicationReminders = [
    { id: 1, medicineName: "Medicine A", dosage: "500mg", time: "Morning" },
    { id: 2, medicineName: "Medicine B", dosage: "250mg", time: "Afternoon" },
    { id: 3, medicineName: "Medicine C", dosage: "100mg", time: "Evening" },
  ];

  useEffect(() => {
    localStorage.setItem("completedDoses", JSON.stringify(completedDoses));
  }, [completedDoses]);

  const handleToggleCompleted = (id) => {
    setCompletedDoses((prev) =>
      prev.includes(id) ? prev.filter((doseId) => doseId !== id) : [...prev, id]
    );
  };

  return (
    <div className="medical-reminder-container">
      <h2>🩺 Medication Reminders</h2>
      <div className="reminderContainer">
        {medicationReminders.map((reminder) => (
          <div
            key={reminder.id}
            className={`reminder-card ${
              completedDoses.includes(reminder.id) ? "completed" : ""
            }`}
          >
            <div className="medicine-name">{reminder.medicineName}</div>
            <div className="dosage">💊 Dosage: {reminder.dosage}</div>
            <div className="time">⏰ Time: {reminder.time}</div>
            <button
              className={`mark-btn ${
                completedDoses.includes(reminder.id) ? "done" : ""
              }`}
              onClick={() => handleToggleCompleted(reminder.id)}
            >
              {completedDoses.includes(reminder.id) ? "Undo" : "Mark Done"}
              <IonIcon size="medium"
                icon={
                  completedDoses.includes(reminder.id)
                    ? closeCircleOutline
                    : checkmarkCircleOutline
                }
              />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Medicalreminder;

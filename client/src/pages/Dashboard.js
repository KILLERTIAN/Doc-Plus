import React, { useState, useEffect } from 'react';
import './Dashboard.css';
import axios from 'axios';

function Dashboard() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:8000/backend/patients');
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  return (
    <div className="dashboardMainContainer">
      <div className="dashboardContainer">
        <div className="userInfoContainer">
          <div className="profileImageName">
            <div className="profileImageSection">
              <img src="https://robohash.org/sintessequaerat.png?size=70x70&set=set1" alt="" />
            </div>
            <div className="userNameId">
              <span>Om Sharma </span> <br />
              7297394892
            </div>
          </div>
          <div className="userDetails">
            <ul>
              <li>Gender : Male</li>
              <li>Age : 19</li>
            </ul>
            <ul>
              <li>BloodGroup : O+</li>
              <li>Address : Palam,Delhi,India</li>
            </ul>
          </div>
        </div>
        <div className="userHistorySection">
          <div className="userSideBar">
            <section className="patientInfo">
              <h3>Family History</h3>
              <h5>Sugar </h5>
              &nbsp;
              <h3>Ongoing Treatement/Medication</h3>
              <h5>You are not undergoing through any medical issue.<br />
              Stay Healty</h5>
            </section>
          </div>
          <div className="userPastRecords">
            <h2>Past Doctor Visits</h2>

            {users.map(user => (
              <div key={user._id}>
                <p>{user.name}</p>
                <p>{user.age}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

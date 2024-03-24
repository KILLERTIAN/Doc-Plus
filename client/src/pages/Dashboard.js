import React from 'react';
import './Dashboard.css';
import Filter from '../components/Filter';

function Dashboard() {
    return (
        <div className="dashboardMainContainer">
            <div className="dashboardContainer">

                <div className="userInfoContainer">
                    <div className="profileImageName">
                        <div className="profileImageSection">
                            <img src="https://robohash.org/sintessequaerat.png?size=70x70&set=set1" alt="" />
                        </div>
                        <div className="userNameId">
                            <span>Om Sharma </span> <br/>
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
                            <h5>You are not undergoing through any medical issue.<br/> 
                            Stay Healty</h5>
                        </section>
                    </div>
                    <div className="userPastRecords">
                        <h2>Past Doctor Visits</h2>
                        <Filter/>
                        
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Dashboard
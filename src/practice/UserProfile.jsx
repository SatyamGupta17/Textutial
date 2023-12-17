import React from "react"; 
import './userprofile.css';
import {useState} from 'react';   
import PersonalDetail from "./PersonalDetail";
import BookingDetail from "./BookingDetail";
import CancelledBooking from "./CancelledBooking";

export const logout = () => { 
  localStorage.removeItem('authToken');
};
const UserProfile = () => { 
  const handleLogout = () => {
    logout();
  }; 
  const [selectedOption, setSelectedOption] = useState("PersonalDetails");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const user = "Satyam Gupta";
  return (
    <div className="container-fluid top-container">
      <div className="topbar">
        <div className = 'row row2' style = {{color : 'white'}}>
          <div className = 'col-8 mx-4'>
            <h3>User Profile</h3></div>
          <div className = 'col-2'><h6>{user}</h6></div>
          <div className = "col-1"><button onClick={handleLogout}  style = {{backgroundColor : '#0275d8', color: 'white', border : '0px'}}><strong>Logout</strong></button></div>
        </div>
      </div> 
      <div className = 'container-fluid'>
        <div className="user-content" >
          <div className="d-inline mx-4" style = {{backgroundColor : '#f5f9fe'}}>
            <label>
            <input type="radio" 
            value = "PersonalDetails"
            checked= {selectedOption === 'PersonalDetails'} onChange={handleOptionChange} />
              <span>Personal Details</span>
            </label>
          </div>
          <div className="d-inline mx-4" style = {{backgroundColor : '#f5f9fe'}}>
            <label>
            <input type="radio" 
            value = "BookingDetails"
            checked= {selectedOption === 'BookingDetails'} onChange={handleOptionChange}/>
              <span>Booking Details </span>
            </label>
          </div>
          <div className="d-inline mx-4" style = {{backgroundColor : '#f5f9fe'}}>
            <label>
            <input type="radio" 
            value = "CancelledBooking"
            checked= {selectedOption === 'CancelledBooking'} onChange={handleOptionChange}/>
              <span>Cancelled Bookings</span>
            </label>
          </div>
          {selectedOption === "PersonalDetails" && <PersonalDetail />}
          {selectedOption === "BookingDetails" && <BookingDetail />}
          {selectedOption === "CancelledBooking" && <CancelledBooking/>}
        </div>
      </div>
    </div>
  );
};


export default UserProfile;

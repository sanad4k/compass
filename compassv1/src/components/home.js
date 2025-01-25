import React, { useState } from 'react';
import './home.css';
import './popup.css';

const HomeContainer = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handleLogin = () => {
    setShowPopup(true);
  };

  const handlePopupSubmit = () => {
    // Add your popup form submission logic here
    setIsLoggedIn(true);
    setShowPopup(false);
  };

  if (!isLoggedIn) {
    return (
      <div className="login-container">
        <div className="login-box">
          <h2>Login</h2>
          <input type="text" placeholder="Username" />
          <input type="text" placeholder="Roll No" />
          <button type="submit" onClick={handleLogin}>Next</button>
        
        </div>
        {showPopup && (
          <div className="popup-container">
            <div className="popup-box">
              <h3>Additional Details</h3>
              <input type="text" placeholder="Batch" />
              <input type="text" placeholder="Year" />
              <input type="text" placeholder="Branch" />
              <input type="text" placeholder="Skills" />
              <button type="submit" onClick={handlePopupSubmit}>Submit</button>
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="home-container">
      <div className="navbar">
        <a href="#">Home</a>
        <a href="#">Companies</a>
        <a href="#">More</a>
      </div>
      <div className="home-header">
        <h1>INTERVIEW</h1>
        <h2>DIARIES</h2>
      </div>
      <div className="content">
        <div className="search-container">
          <input type="text" placeholder="Ask the LLM model..." />
          <div className="response-area">
            <p>Response from Compass :</p>
          </div>
          <div className="summary-box">
            <p><strong>Summary:</strong></p>
            <ul>
              <li>Name of the candidate: </li>
              <li>Offering Company: </li>
              <li>Academic Year: </li>
              <li>Stipend/Salary: </li>
              <li>Internship/Job: </li>
              <li>Skills Required: </li>
              <li>Job Role: </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="parent-container">
        <div class="company-area">
          <p>TOP RECRUITERS :</p>
        </div>
      </div>
      <div className="footer">
        <p>&copy; 2023 Compass. All rights reserved.</p>
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Service</a>
      </div>
    </div>
  );
};

export default HomeContainer;
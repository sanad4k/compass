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
          <input type="text" placeholder="ASK YOUR DOUBTS TO COMPASS :)" />
          <div className="response-area">
            <p>RESPONSE FROM COMPASS :</p>
          </div>
          <div className="summary-box">
            <p><strong>SUMMARY:</strong></p>
            <ul>
              <li>NAME OF THE CANDIDATE: </li>
              <li>OFFERING COMPANY: </li>
              <li>ACADEMIC YEAR: </li>
              <li>STIPEND/SALARY: </li>
              <li>INTERNSHIP/JOB: </li>
              <li>SKILLS REQUIRED: </li>
              <li>JOB ROLE: </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="parent-container">
        <div class="company-area">
          <img src="https://1000logos.net/wp-content/uploads/2017/04/Oracle-Logo-1.png" alt="Company 3" class="company-logo"></img>
          <img src="https://1000logos.net/wp-content/uploads/2016/12/Goldman-Sachs-Logo-2020.png" alt="Company 3" class="company-logo"></img>
          <img src="https://1000logos.net/wp-content/uploads/2018/01/Wells-Fargo-Logo-768x432.png" alt="Company 3" class="company-logo"></img>
          <img src="https://1000logos.net/wp-content/uploads/2021/05/Texas-Instruments-logo.png" alt="Company 3" class="company-logo"></img>
          <img src="https://1000logos.net/wp-content/uploads/2016/10/American-Express-logo-768x432.png" alt="Company 3" class="company-logo"></img>
          <img src="https://1000logos.net/wp-content/uploads/2017/03/John-Deere-Logo-640x400.png" alt="Company 3" class="company-logo"></img>
          <img src="https://1000logos.net/wp-content/uploads/2016/10/Amazon-Logo-768x432.png" alt="Company 3" class="company-logo"></img>
          <img src="https://1000logos.net/wp-content/uploads/2020/08/Qualcomm-Logo-640x400.png" alt="Company 3" class="company-logo"></img>
          <img src="https://1000logos.net/wp-content/uploads/2021/05/Google-logo-768x432.png" alt="Company 3" class="company-logo"></img>
          <img src="https://1000logos.net/wp-content/uploads/2017/09/Deutsche-Bank-Logo-768x432.png" alt="Company 3" class="company-logo"></img>
          <img src="https://1000logos.net/wp-content/uploads/2021/04/MATLAB-logo-768x432.png" alt="Company 3" class="company-logo"></img>
        </div>
      </div>
      <div className="footer">
        <p>&copy; An initiative by the Computer Science and Engineering Association, Interview Diaries is all about trying to help the novices avoid sweaty palms when they face the interview desk for the first time. Every company in this vast industrial world has its own way of filtering and selecting its candidates for employment. While we cannot pinpoint the exact procedure that each of them follow, what we can do is provide you with the advice sought from the ones who have successfully tackled their tests. </p>
        <p>&copy; 2023 Compass. All rights reserved.</p>
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Service</a>
      </div>
    </div>
  );
};

export default HomeContainer;
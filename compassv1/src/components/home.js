import React from 'react';
import './home.css';

const HomeContainer = () => {
  return (
    <div className="home-container hidden">
      <div className="home-header">
        <h1>INTERVIEW DIARIES</h1>
      </div>
      <div className="navbar">
        <a href="#">Home</a>
        <a href="#">Companies</a>
        <a href="#">More</a>
      </div>
      <div className="content">
        <div className="search-container">
          <input type="text" placeholder="Ask the LLM model..." />
          <div className="response-area">
            <p>Response from the model will appear here...</p>
          </div>
          <div className="summary-box">
            <p><strong>Summary:</strong></p>
            <ul>
              <li>Name: </li>
              <li>Company: </li>
              <li>Academic Year: </li>
              <li>Stipend: </li>
              <li>Internship or Job: </li>
              <li>Skills: </li>
              <li>Job Role: </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer">
        <p>Interview Diaries &copy; 2025. All rights reserved.</p>
        <a href="#">WhatsApp</a>
        <a href="#">Facebook</a>
        <a href="#">Instagram</a>
      </div>
    </div>
  );
};

export default HomeContainer;
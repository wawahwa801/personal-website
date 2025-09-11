import React from 'react';

const Projects = () => {
  return (
    <section className="section">
      <h2 className="section-title">Projects</h2>
      
      <div className="card">
        <div className="card-title">Competitive Programming</div>
        <div className="card-subtitle">C++, Python, Visual Studio Code | March 2022 – Present</div>
        <div className="card-content">
          <p>Prepared for the Canadian Coding Competition by completing 100+ Leetcode questions and practice contests.</p>
        </div>
      </div>

      <div className="card">
        <div className="card-title">Project Proposal (Plant Analyzer App - SmartPlant)</div>
        <div className="card-subtitle">LaTeX, Android Libraries, Python, Java | December 2024</div>
        <div className="card-content">
          <ul>
            <li>Created an Android application using Java and Android Studio to calculate ticket prices for trips to museums in NYC.</li>
            <li>Processed user inputted information in the back-end of the app to return a subtotal price based on the tickets selected.</li>
            <li>Utilized the layout editor to create a UI for the application in order to allow different scenes to interact with each other.</li>
          </ul>
        </div>
      </div>

      <div className="card">
        <div className="card-title">Indie Puzzle Game (Power Outage)</div>
        <div className="card-subtitle">C#, Unity, Visual Studio | December 2024</div>
        <div className="card-content">
          <ul>
            <li>Submitted a 2D platformer for the 111st Mini Jam to reach a top 300 finish.</li>
            <li>Utilized Unity to create a game that supports multiple platforms and methods of interaction.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Projects;

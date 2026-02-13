import React from "react";

function Dashboard() {
  return (
    <>
      <h2>Dashboard</h2>
      <p className="subtitle">My Technical Skill Set</p>

      <div className="skill-grid">
        <div className="skill-card">
          <h3>Frontend</h3>
          <p>React, HTML, CSS, JavaScript</p>
        </div>

        <div className="skill-card">
          <h3>Backend</h3>
          <p>Java, Spring Boot, REST APIs</p>
        </div>

        <div className="skill-card">
          <h3>Database</h3>
          <p>MySQL, MongoDB</p>
        </div>

        <div className="skill-card">
          <h3>Tools</h3>
          <p>Git, GitHub, Postman</p>
        </div>
      </div>
    </>
  );
}

export default Dashboard;

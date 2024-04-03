import React from 'react';
import './Resume.css'; // Ensure you have a Resume.css file for styling

const Resume = () => {
  return (
    <section className="resume">
      <h2>Resume</h2>
      <p>Download my resume to learn more about my professional background.</p>
      <a href="url-to-your-resume.pdf" target="_blank" rel="noopener noreferrer">Download Resume</a>
      <h3>Proficiencies</h3>
      <ul>
        <li>JavaScript (ES6+)</li>
        <li>React</li>
        <li>Node.js</li>
        <li>Express</li>
        <li>MongoDB</li>
        <li>HTML & CSS</li>
        <li>Git</li>
        
      </ul>
    </section>
  );
};

export default Resume;

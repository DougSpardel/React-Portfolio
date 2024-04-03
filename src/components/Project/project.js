import React from 'react';
import './project.css'; // Assuming you have a corresponding CSS file for styling

const Project = ({ title, description, imageUrl, projectUrl, githubUrl }) => {
  return (
    <div className="project">
      <img src={imageUrl} alt={title} />
      <div className="project-info">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="project-links">
          <a href={projectUrl} target="_blank" rel="noopener noreferrer">Live Demo</a>
          <a href={githubUrl} target="_blank" rel="noopener noreferrer">GitHub Repo</a>
        </div>
      </div>
    </div>
  );
};

export default Project;

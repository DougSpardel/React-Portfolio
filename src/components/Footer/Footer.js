import React from 'react';
import './footer.css'; // Assuming you have a corresponding CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <span>© {(new Date().getFullYear())} Your Name. All Rights Reserved.</span>
        <div className="social-links">
          <a href="https://github.com/DougSpardel" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/douglas-spardel-057a47142" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://soundcloud.com/douglas-spardel" target="_blank" rel="noopener noreferrer">SoundCloud</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from 'react';
import Project from '../components/Project/project'; // Adjust the path as necessary
import './Portfolio.css'; // Ensure you have a Portfolio.css file for styling

const Portfolio = () => {
  const projects = [
    {
      title: 'MechaTracker',
      description: 'A tracking app for mech enthusiasts.',
      imageUrl: '/assets/images/mechatracker.png', // Replace with your image URL
      projectUrl: 'url-to-live-project', // Replace with your live project URL
      githubUrl: 'https://github.com/DougSpardel/MechaTracker',
    },
    {
      title: 'Sun and Whimsy Co',
      description: 'A vibrant and welcoming e-commerce platform.',
      imageUrl: '/assets/images/whimsysun.jpeg', // Replace with your image URL
      projectUrl: 'url-to-live-project', // Replace with your live project URL
      githubUrl: 'https://github.com/LizzieAmes/Sun-and-Whimsy-Co',
    },
    {
      title: 'CranBerry Stuffing',
      description: 'A recipe sharing platform for holiday favorites.',
      imageUrl: '/assets/images/mtv-music-generator_1.jpg', // Replace with your image URL
      projectUrl: 'url-to-live-project', // Replace with your live project URL
      githubUrl: 'https://github.com/DougSpardel/CranBerryStuffing',
    },
    {
      title: 'SVG Logo Maker',
      description: 'An interactive tool for designing SVG logos.',
      imageUrl: '/assets/images/FVs3VPLWIAATXow.jpg-large.jpeg', // Replace with your image URL
      projectUrl: 'url-to-live-project', // Replace with your live project URL
      githubUrl: 'https://github.com/DougSpardel/SVGLogoMaker',
    },
    {
      title: 'Web Dev Quiz',
      description: 'A quiz app for testing web development knowledge.',
      imageUrl: '/assets/images/quiz.webp', // Replace with your image URL
      projectUrl: 'url-to-live-project', // Replace with your live project URL
      githubUrl: 'https://github.com/DougSpardel/WebDevQuiz',
    },
    {
      title: 'E-Commerce Back End',
      description: 'Starter code for building an e-commerce site back end.',
      imageUrl: '/assets/images/codete-backend-developers-in-2021-the-greatest-challlenges-main.jpg', // Replace with your image URL
      projectUrl: 'url-to-live-project', // Replace with your live project URL
      githubUrl: 'https://github.com/DougSpardel/E-Commerce-Back-End-Starter-Code',
    },
  ];

  return (
    <section className="portfolio">
      <h2>My Portfolio</h2>
      <div className="projects">
        {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;

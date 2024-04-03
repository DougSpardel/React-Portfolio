import React from 'react';
import './AboutMe.css'; // Ensure you have an AboutMe.css file for styling

const AboutMe = () => {
  return (
    <section className="about-me">
      <h2>About Me</h2>
      <img src={process.env.PUBLIC_URL + '/assets/images/60s-spider-man-funny-pfp-11.jpg'} alt="60's Spider-Man"/>
      <p>
        Hello! I am a web developer with a passion for creating engaging and dynamic user experiences. I love automating tasks and developing useful applications! I specialize in React, JavaScript, and CSS. When I'm not coding, I am locking in on skiing and music!
      </p>
    </section>
  );
};

export default AboutMe;

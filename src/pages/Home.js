import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Ensure you have a Home.css file for styling

const Home = () => {
  return (
    <section className="home">
      <h1>Welcome to My Portfolio</h1>
      <p>I'm a web developer with a knack for building engaging, modern web applications.</p>
      <Link to="/aboutme">Learn More About Me</Link>
    </section>
  );
};

export default Home;

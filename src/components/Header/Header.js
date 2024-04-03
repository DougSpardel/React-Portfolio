import React from 'react';
import Navigation from '../Navigation/Nav'; // Adjust the path as necessary
import './header.css'; // Assuming you have a corresponding CSS file for styling

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <h1>Doug Spardel</h1>
        <Navigation />
      </div>
    </header>
  );
};

export default Header;

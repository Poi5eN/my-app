import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Import your CSS file

function Home() {
  return (
    <div className="home-container">
      <h1>Welcome to My App</h1>
      <div className="options-container">
        <Link to="/login" className="link-button">
          Login
        </Link>
        <Link to="/signup" className="link-button">
          Sign Up
        </Link>
      </div>
    </div>
  );
}

export default Home;

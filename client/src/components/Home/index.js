// client/src/components/Home/index.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <h1>Scotland Yard Tracker</h1>
      <p>Track player movements for the Scotland Yard board game</p>
      
      <div className="home-buttons">
        <Link to="/setup" className="btn btn-primary">
          New Game
        </Link>
        <Link to="/join" className="btn btn-secondary">
          Join Game
        </Link>
      </div>
    </div>
  );
};

export default Home;
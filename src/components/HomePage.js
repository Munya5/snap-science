// src/components/HomePage.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import facts from '../data/facts'; // Your facts array
import './HomePage.css'; // Ensure this path is correct

const HomePage = () => {
  const fullMessage = "They say science is just a game, but to me, it’s the ultimate adventure! It's a journey through the cosmos, unraveling the mysteries of the universe."
  const [displayedMessage, setDisplayedMessage] = useState('');

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      setDisplayedMessage(fullMessage.slice(0, index + 1));
      index++;
      if (index === fullMessage.length) {
        clearInterval(typingInterval);
      }
    }, 50); // Adjust the typing speed here

    return () => clearInterval(typingInterval); // Clean up on unmount
  }, [fullMessage]);

  return (
    <div className="homepage">
      {/* Welcome message card */}
      <div className="welcome-card">
        <h1 className="welcome-message">
          {displayedMessage}
        </h1>
      </div>
      <div className="card-container">
        {facts.map((fact, index) => (
          <Link to={`/fact/${fact.id}`} key={fact.id} style={{ textDecoration: 'none' }}>
            <div 
              className={`card card-${index + 1}`}
              style={{
                backgroundColor: fact.color,
                color: fact.textColor,
                fontFamily: fact.font
              }}
            >
              <div className="card-inner">
                {/* Front of the card */}
                <div className="card-front">
                  <h3 className="card-title">{fact.title}</h3>
                  <p className="card-detail">{fact.info}</p>
                  
                </div>

                {/* Back of the card */}
                <div className="card-back">
                  <button className="view-button">Click to View</button>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
       {/* Goodbye Message Card */}
<div className="goodbye-card">
  <p className="goodbye-message">
    Thank you for exploring the wonders of science with me! I hope you enjoyed your journey through knowledge. Welcome to Snap Science, where curiosity never ends!
  </p>
  <h1 className="name">MUNYAR</h1>
</div>

    </div>
  );
};

export default HomePage;

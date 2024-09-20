// src/components/CardDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';
import facts from '../data/facts';
import './CardDetail.css'; // Optional: For custom styles

const CardDetail = () => {
  const { id } = useParams();
  const fact = facts.find(f => f.id === parseInt(id));

  if (!fact) return <p>Fact not found!</p>;

  return (
    <div className="card-detail-container">
      <div className="card-detail">
        <h2 style={{ color: fact.color }}>{fact.title}</h2>
        <p>{fact.details}</p>
        <button onClick={() => window.history.back()} className="back-button">
          Go Back
        </button>
      </div>
    </div>
  );
};

export default CardDetail;

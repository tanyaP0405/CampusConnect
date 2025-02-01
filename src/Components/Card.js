import React from 'react';
import './Card.css';
import { Link } from 'react-router-dom';

const Card = ({ subjectName, year, category, type, marks, time }) => {
  return (
    <div className="card">
      <div className="card-content">
        <h3 className="card-title">{category}</h3>
        <div className="card-details">
          <p><strong>Year:</strong> {year}</p>
          {/* <p><strong>Category:</strong> {category}</p> */}
          <p><strong>Type:</strong> {type}</p>
          <p><strong>Marks:</strong> {marks}</p>
          <p><strong>Time:</strong> {time}</p>
        </div>
        <Link to="/details" className="card-link">View Details</Link>
      </div>
    </div>
  );
};

export default Card;

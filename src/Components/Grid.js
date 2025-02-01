import React from 'react';
import Card from './Card';
import './Gridresource.css';
import Navbar from './Navbar';

const Grid = () => {
  return (
    <div className="gallery-container">
      <Navbar></Navbar>
      <h1>Courses</h1>
      <div className="scroll-container">
        <Card 
          year="2023" 
          category="Quiz-1" 
          type="Written - MCQ" 
          marks="10" 
          time="30min" 
        />
        <Card 
          year="2023" 
          category="Quiz-2" 
          type="Online - MCQ" 
          marks="10" 
          time="30min" 
        />
        <Card 
          year="2023" 
          category="Mid-sem" 
          type="Written" 
          marks="25" 
          time="2 hr" 
        />
        <Card 
          year="2023" 
          category="End-sem" 
          type="Written" 
          marks="40" 
          time="3 hr" 
        />
         <Card 
          year="2022" 
          category="Quiz-1" 
          type="Written - MCQ" 
          marks="10" 
          time="30min" 
        />
         <Card 
          year="2022" 
          category="Quiz-2" 
          type="Written - MCQ" 
          marks="10" 
          time="30min" 
        />
         <Card 
          year="2022" 
          category="End-sem" 
          type="Written" 
          marks="40" 
          time="3 hr" 
        />
        
      </div>
    </div>
  );
};

export default Grid;

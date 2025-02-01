import React from 'react';
import './Gridresource.css';
import ResourceCard from './ResouceCard';

const Gridresource = () => {
  return (
    <div className="gallery-container">
      <h1>Faculty</h1> 
      <div className="scroll-container">
        {/* Replace these sample data with real faculty data */}
        <ResourceCard 
          name="Dr. Anjali Gautam" 
          image="https://it.iiita.ac.in/photo/anjaligautam.jpg"
          description="Assistant Professor"
        />
        <ResourceCard 
          name="Dr.Mohammad Javed" 
          image="https://it.iiita.ac.in/photo/javed.jpg"
          description="Asst. Prof"
        />
        <ResourceCard 
          name="Dr. Triloki Pant" 
          image="https://it.iiita.ac.in/photo/tpant.jpg"
          description="Assistant Professor"
        />
         <ResourceCard 
          name="Dr. Surya Prakash" 
          image="https://scholar.googleusercontent.com/citations?view_op=medium_photo&user=nKq0S5UAAAAJ&citpid=7"
          description="Asst. Prof , ECE"
        />
         <ResourceCard 
          name="Dr. Abdullah" 
          image="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT-LUYIJ3tGHqsryPpGf8LSwSzOvpV2sv5ksa69V6TGNap5OgVg"
          description="Asst Professor, Applied Sciences"
        />
         <ResourceCard 
          name="Dr. Surya Prakash" 
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2nuSGO-cC-vHUervMH0qPzu_UHk63vNx48ej4zjD-hAhslQCt"
          description="Assoc. Prof, Applied Sciences"
        />
        
        {/* Add more ResourceCard components as needed */}
      </div>
    </div>
  );
};

export default Gridresource;

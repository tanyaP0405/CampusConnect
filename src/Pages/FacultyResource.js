import React from "react";

import { useNavigate } from 'react-router-dom';
import Navbar from "../Components/Navbar";

// import Grid from "../Components/Grid";
// import Gridresource from "../Components/Gridresource";

const coursesData = [
    { name: 'Introduction to Programming', semester: 'Semester 1' },
    { name: 'Design and Analysis of Algorithms ', semester: 'Semester 4' },
    { name: 'Data Structures', semester: 'Semester 2' },
    { name: 'Mathematics', semester: 'Semester 2' },
    { name: 'Data Structures', semester: 'Semester 3' },
    { name: 'Operating Systems', semester: 'Semester 3' },
    { name: 'Algorithms', semester: 'Semester 4' },
    { name: 'Software Engineering', semester: 'Semester 4' },
  ];
  
  function FacultyResource() {
    const navigate = useNavigate();
  
    const handleOpen = () => {
      navigate('/grid'); // Navigate to the grid page
    };
  
    return (
      <div>
        <Navbar />
        <h1>Faculty Courses</h1>
        <div className="courses-grid">
          {coursesData.map((course, index) => (
            <div className="course-item" key={index}>
              <h3>{course.name}</h3>
              <p>{course.semester}</p>
              <button className="open-button" onClick={handleOpen}>Open</button>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  export default FacultyResource;
  
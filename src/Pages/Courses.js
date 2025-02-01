import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Courses.css';

const coursesData = [
    { name: 'Linear Algebra ', semester: 'Semester 1' },
    { name: 'Engineering Physics', semester: 'Semester 1' },
    { name: 'Problem Solving ', semester: 'Semester 1' },
    { name: 'Fundamental of Electronics', semester: 'Semester 1' },
   { name: 'Discrete Mathematical Structure ', semester: 'Semester 2' },
  { name: 'Data Structures ', semester: 'Semester 2' },
  { name: 'Web Development', semester: 'Semester 2' },
  { name: 'Operating Systems', semester: 'Semester 3' },
  { name: 'OOPS', semester: 'Semester 3' },
  { name: 'Software Engineering ', semester: 'Semester 3' },
   { name: 'Algorithms', semester: 'Semester 4' },
  { name: 'DAA', semester: 'Semester 4' },
   { name: 'TOC', semester: 'Semester 4' },
];

function Courses() {
  const navigate = useNavigate();

  const handleOpen = () => {
    navigate('/grid'); // Navigate to the grid page
  };

  return (
    <div>
      <h1>Courses</h1>
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

export default Courses;

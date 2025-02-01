import React, { useState } from "react";
import './Navbar.css';
import { Link } from "react-router-dom";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <h1>CampusConnect</h1> 
            </div>
          
            <div className={`navbar-links ${isOpen ? 'open' : ''}`}>
                <Link to="/home" className="nav-item">Home</Link>
                <Link to="/pyqs" className="nav-item">Courses</Link>
                <Link to="/resources" className="nav-item">Faculty</Link>
                
                <Link to="/profile" className="nav-item">Profile</Link>
                <Link to="/admin" className="nav-item">Faculty Profile</Link>
                <Link to="/" className="nav-item">Logout</Link>
            </div>
            <div className="navbar-toggle" onClick={toggleMenu}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
        </nav>
    );
}

export default Navbar;

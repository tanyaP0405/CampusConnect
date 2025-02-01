import React from "react";
import './Login.css';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
// import Home from "./Home";

function Login() {
    const navigate = useNavigate(); 

    const handleSubmit = (event) => {
        event.preventDefault(); 
        navigate('/home');
    };

    return (
        <div className="login-container">
            <div className="login-left">
                <div className="branding">
                <h1>CampusConnect</h1> 
                </div>
            </div>
            <div className="login-right">
                <div className="login-box">
                    <h1>Login</h1>
                    <form onSubmit={handleSubmit}> 
                        <div className="input-group">
                            <input type="text" id="rollno" name="rollno" placeholder="Enter your roll number" />
                        </div>
                        <div className="input-group">
                            <input type="password" id="password" name="password" placeholder="Enter your password" />
                        </div>
                        <button type="submit" className="submit-btn">Login</button> {/* Remove the incorrect onClick */}
                    </form>
                    <Link to="/reset-password" className="forgot-password">Forgot password?</Link>
                </div>
            </div>
        </div>
    );
}

export default Login;

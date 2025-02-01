// import logo from './logo.svg';
import './App.css';
import Login from './Pages/Login';
import Home from './Pages/Home';
// import Doubts from './Pages/Doubts';
import Resources from './Pages/Resouces';
import Profile from './Pages/Profile';
import PYQs from './Pages/PYQs';
// import Fillform from './Pages/FIllform';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Admin from './Pages/Admin';
import Grid from './Components/Grid'
import FacultyResource from './Pages/FacultyResource';
import TA from './Pages/TA';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<YourComponent />} /> */}
        
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Login />} />
        {/* <Route path="/doubts" element={<Doubts />} /> */}
        <Route path="/pyqs" element={<PYQs />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/profile" element={<Profile />} />
        {/* <Route path="/upload" element={<Fillform />} /> */}
        {/* <Route path="/admin" element={<Admin />} /> */}
        <Route path="/grid" element={<Grid />} />
        <Route path="/faculty-resource" element={<FacultyResource />} />
        <Route path="/TA" element={<TA />} />
       
       
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;

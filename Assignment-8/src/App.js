// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import RegisterStudent from './pages/RegisterStudent';
import EditStudent from './pages/EditStudent';
import StudentDetails from './pages/StudentDetails';
import StudentList from './pages/StudentList';
import NavBar from './components/Navbar';


const App = () => {
  return (
    <Router>
        <NavBar className="bg-light"></NavBar>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/register" element={<RegisterStudent />} />
          <Route path="/edit/:id" element={<EditStudent />} />
          <Route path="/students/:id" element={<StudentDetails />} />
          <Route path="/students" element={<StudentList />} />
        
         
        </Routes>
    </Router>
  );
};

export default App; 
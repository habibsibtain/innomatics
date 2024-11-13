import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Design from './pages/services/Design';
import Development from './pages/services/Development';
import Contact from './pages/Contact';
import  './App.css';
const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />}>
        <Route path="design" element={<Design />} />
        <Route path="development" element={<Development />} />
      </Route>
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<h2>404: Page Not Found</h2>} />
    </Routes>
  </Router>
);

export default App;


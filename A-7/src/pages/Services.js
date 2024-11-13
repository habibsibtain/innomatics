import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Services = () => (
  <div>
    <h2>Our Services</h2>
    <nav>
      <NavLink to="design">Design</NavLink> | <NavLink to="development">Development</NavLink>
    </nav>
    <Outlet />
  </div>
);

export default Services;

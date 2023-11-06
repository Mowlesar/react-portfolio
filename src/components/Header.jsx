import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-primary text-white p-3">
      <div className="container">
        <nav className="nav">
          <h1 className="me-auto">Mowlesar</h1>
          <NavLink to="/about-me" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
            About Me
          </NavLink>
          <NavLink to="/portfolio" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
            Portfolio
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
            Contact
          </NavLink>
          <NavLink to="/resume" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
            Resume
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;

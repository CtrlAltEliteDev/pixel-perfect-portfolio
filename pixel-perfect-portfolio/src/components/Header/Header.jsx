import React from 'react';
import './Header.scss';

const Header = () => {
  return (
    <header className="site-header">
    <div className="logo">
  <h1 className="avenger-logo">Riya Biswas</h1>
</div>
      <nav className="navbar">
        <a href="#hero">Home</a>
        <a href="#about">About</a>
        <a href="#experience">Experience</a>
        <a href="#skills">Skills</a>
        <a href="#education">Education</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
};

export default Header;

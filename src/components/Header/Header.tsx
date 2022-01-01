import React from 'react';
import './Header.scss';
import logo from '../../logo.svg';

export const Header = () => {
  return (
    <header className="App-header">
      <div className="header-logo">
        <img className="header-icon" src={logo} alt="header-logo" />
        <p className="header-text">My Portfolio</p>
      </div>
      <nav className="header-nav">
        <ul className="header-nav-list">
          <li>Home</li>
          <li>About</li>
          <li>Projects</li>
          <li>My CV</li>
          <li>Contacts</li>
        </ul>
      </nav>
    </header>
  );
};

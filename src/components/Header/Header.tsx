import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.scss';
import logo from '../../assets/images/logo.svg';
import homeIcon from '../../assets/icons/home.png';
import aboutIcon from '../../assets/icons/id-card.png';
import projectsIcon from '../../assets/icons/presentation.png';
import cvIcon from '../../assets/icons/curriculum-vitae.png';
import contactIcon from '../../assets/icons/arroba.png';
import { WeatherAPI } from '../../api/WeatherApi/WeatherApi';

export const Header: React.FC = () => {
  return (
    <header className="App-header">
      <div className="header-logo">
        <img className="header-icon" src={logo} alt="header-logo" />
        <p className="header-text">My Portfolio</p>
      </div>
      <nav className="header-nav">
        <ul className="header-nav-list">
          <li className="header-nav-list-li">
            <NavLink className="nav-link" to="/">
              <img
                className="menu-icon"
                src={homeIcon}
                alt="home-icon"
                style={{ width: 24, height: 24 }}
              />
              Home
            </NavLink>
          </li>
          <li className="header-nav-list-li">
            <NavLink className="nav-link" to="about">
              <img
                className="menu-icon"
                src={aboutIcon}
                alt="about-icon"
                style={{ width: 24, height: 24 }}
              />
              About
            </NavLink>
          </li>
          <li className="header-nav-list-li">
            <NavLink className="nav-link" to="projects">
              <img
                className="menu-icon"
                src={projectsIcon}
                alt="about-icon"
                style={{ width: 24, height: 24 }}
              />
              Projects
            </NavLink>
          </li>
          <li className="header-nav-list-li">
            <NavLink className="nav-link" to="my-cv">
              <img
                className="menu-icon"
                src={cvIcon}
                alt="cv-icon"
                style={{ width: 24, height: 24 }}
              />
              My CV
            </NavLink>
          </li>
          <li className="header-nav-list-li">
            <NavLink className="nav-link" to="contacts">
              <img
                className="menu-icon"
                src={contactIcon}
                alt="contact-icon"
                style={{ width: 24, height: 24 }}
              />
              Contacts
            </NavLink>
          </li>
        </ul>
      </nav>
      <WeatherAPI />
    </header>
  );
};

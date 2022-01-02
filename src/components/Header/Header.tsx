import React from 'react';
import './Header.scss';
import logo from '../../logo.svg';
import { WeatherAPI } from '../../api/WeatherApi/WeatherApi';

export const Header = () => {
  return (
    <header className="App-header">
      <div className="header-logo">
        <img className="header-icon" src={logo} alt="header-logo" />
        <p className="header-text">My Portfolio</p>
      </div>
      <nav className="header-nav">
        <ul className="header-nav-list">
          <li className="header-nav-list-li">
            <a className="nav-link" href="#">
              Home
            </a>
          </li>
          <li className="header-nav-list-li">
            <a className="nav-link" href="#">
              About
            </a>
          </li>
          <li className="header-nav-list-li">
            <a className="nav-link" href="#">
              Projects
            </a>
          </li>
          <li className="header-nav-list-li">
            <a className="nav-link" href="#">
              My CV
            </a>
          </li>
          <li className="header-nav-list-li">
            <a className="nav-link" href="#">
              Contacts
            </a>
          </li>
        </ul>
      </nav>
      <WeatherAPI />
    </header>
  );
};

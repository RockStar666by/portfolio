import React, { useEffect, useRef, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './Header.scss';
import homeIcon from '../../assets/icons/home.png';
import aboutIcon from '../../assets/icons/id-card.png';
import projectsIcon from '../../assets/icons/presentation.png';
import cvIcon from '../../assets/icons/curriculum-vitae.png';
import contactIcon from '../../assets/icons/arroba.png';

export const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const burgerMenu = useRef<HTMLInputElement>(null);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', () =>
        setScrolled(window.pageYOffset > 100)
      );
    }
  }, []);

  const onMenuButtonClick = () => {
    if (burgerMenu.current) {
      if (window.innerWidth < 1025) burgerMenu.current.click();
    }
  };

  const preventScroll = () => {
    if (burgerMenu.current) {
      burgerMenu.current.checked
        ? document.body.setAttribute('style', 'overflow: hidden;')
        : document.body.setAttribute('style', 'overflow: visible;');
    }
  };

  return (
    <header className={`App-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-logo">
        <p className="header-text">S A U C H U K</p>
      </div>
      <input
        ref={burgerMenu}
        id="menu__toggle"
        type="checkbox"
        onChange={preventScroll}
      />
      <label className="menu__btn" htmlFor="menu__toggle">
        <span></span>
      </label>
      <div className="burger-prevent-click"></div>
      <nav className="header-nav">
        <ul className="header-nav-list">
          <li className="header-nav-list-li">
            <NavLink className="nav-link" to="/" onClick={onMenuButtonClick}>
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
            <NavLink
              className="nav-link"
              to="about"
              onClick={onMenuButtonClick}
            >
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
            <NavLink
              className="nav-link"
              to="projects"
              onClick={onMenuButtonClick}
            >
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
            <NavLink
              className="nav-link"
              to="my-cv"
              onClick={onMenuButtonClick}
            >
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
            <NavLink
              className="nav-link"
              to="contacts"
              onClick={onMenuButtonClick}
            >
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
    </header>
  );
};

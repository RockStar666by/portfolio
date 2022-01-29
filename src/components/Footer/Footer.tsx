import React from 'react';
import './Footer.scss';
import { Social } from '../Social/Social';

export const Footer: React.FC = () => {
  return (
    <footer className="App-footer">
      <div className="copyright">
        Copyright © {new Date().getFullYear()} Artsiom Sauchuk
      </div>
      <div className="contacts-wrapper">
        <Social />
      </div>
    </footer>
  );
};

import React from 'react';
import './App.scss';
import { Header } from './components/Header/Header';
import { BrowserRouter as Router } from 'react-router-dom';
import { AppRouter } from './components/Router/Router';

export const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        <main className="page-container">
          <AppRouter />
        </main>
      </Router>
    </div>
  );
};

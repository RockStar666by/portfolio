import React from 'react';
import './App.scss';
import { Header } from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <main style={{ height: 2200 }}></main>
    </div>
  );
}

export default App;

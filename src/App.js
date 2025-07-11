// App.jsx
import React from 'react';
import './App.css';
import Game from './components/Game';

const App = () => {
  return (
    <div className="App">
      <h1>Random Blue Box Game</h1>
      <Game />
      <h3>
        rules:<p>green +1points</p>
        <p> blue -1 points</p>
        <p> grey game over</p>
      </h3>
    </div>
  );
};

export default App;

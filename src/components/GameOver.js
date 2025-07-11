import React from 'react';
import './css/GameOver.css';

function GameOver({ onRestart }) {
  return (
    <div className="game-over">
      <h2>Game Over</h2>
      <button className="restart-button" onClick={onRestart}>
        Restart
      </button>
    </div>
  );
}

export default GameOver;
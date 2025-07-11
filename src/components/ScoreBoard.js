import React from 'react';
import './css/Scoreboard.css';

function ScoreBoard({ score }) {
  return <div className="score">Score: {score}</div>;
}

export default ScoreBoard;
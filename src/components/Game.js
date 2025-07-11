import React, { useState, useEffect } from 'react';
import Grid from './Grid';
import ScoreBoard from './ScoreBoard';
import GameOver from './GameOver';
import ControlButtons from './ControlButtons';
import { initializeGrid, updateGrid } from '../utils/helpers';
import './css/Game.css';

const GRID_SIZE = 5;
const INTERVAL = 5000;
const GREY_PROBABILITY = 0.2;

function Game() {
  const [grid, setGrid] = useState(initializeGrid(GRID_SIZE));
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  const resetGame = () => {
    setScore(0);
    setGameOver(false);
    setGrid(initializeGrid(GRID_SIZE));
  };

  const handleCellClick = (row, col) => {
    if (!gameOver) {
      if (grid[row][col] === 'green') {
        setScore((prevScore) => prevScore + 1);
        const newGrid = [...grid];
        newGrid[row][col] = 'white';
        setGrid(newGrid);
      } else if (grid[row][col] === 'blue') {
        setScore((prevScore) => prevScore - 1);
        const newGrid = [...grid];
        newGrid[row][col] = 'white';
        setGrid(newGrid);
      } else if (grid[row][col] === 'grey') {
        setScore(0);
        setGameOver(true);
        setGrid(initializeGrid(GRID_SIZE));
      }
    }
  };

  const handleBackButtonClick = () => {
    setScore(0);
    setGameOver(true);
    setGrid(initializeGrid(GRID_SIZE));
  };

  useEffect(() => {
    if (gameOver) return;

    const changeColor = () => {
      setGrid((prevGrid) => updateGrid(prevGrid, GRID_SIZE, GREY_PROBABILITY));
    };

    const intervalId = setInterval(changeColor, INTERVAL);
    return () => clearInterval(intervalId);
  }, [gameOver]);

  return (
    <div className="game">
      {/* <h1>Random Blue Box Game</h1> */}
      <ScoreBoard score={score} />
      {gameOver ? (
        <GameOver onRestart={resetGame} />
      ) : (
        <>
          <Grid grid={grid} onCellClick={handleCellClick} />
          <ControlButtons onBackClick={handleBackButtonClick} />
        </>
      )}
    </div>
  );
}

export default Game;
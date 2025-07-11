import React from 'react';
import Cell from './Cell';
import './css/Grid.css';

function Grid({ grid, onCellClick }) {
  return (
    <div className="grid">
      {grid.map((row, rowIndex) => (
        <div key={rowIndex} className="row">
          {row.map((color, colIndex) => (
            <Cell
              key={`${rowIndex}-${colIndex}`}
              color={color}
              onClick={() => onCellClick(rowIndex, colIndex)}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

export default Grid;
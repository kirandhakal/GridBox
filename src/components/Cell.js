import React from 'react';
import './css/Cell.css';

function Cell({ color, onClick }) {
  return (
    <div
      className="cell"
      style={{ backgroundColor: color }}
      onClick={onClick}
    />
  );
}

export default Cell;
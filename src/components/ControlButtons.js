import React from 'react';
import './css/ControlButton.css';

function ControlButtons({ onBackClick }) {
  return (
    <div className="control-buttons">
      <button className="red-button" onClick={onBackClick}>
        back
      </button>
    </div>
  );
}

export default ControlButtons;
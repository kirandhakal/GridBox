import React, { useEffect, useState } from "react";
import GridBox from "./GridBox";

const Grid = ({ gridSize = 20, intervalMs = 800, activeDuration = 1000 }) => {
  const totalBoxes = gridSize * gridSize;
  const [activeBoxes, setActiveBoxes] = useState(new Set());

  useEffect(() => {
    const interval = setInterval(() => {
      const count = Math.floor(Math.random() * 2) + 1; 
      const newIndices = new Set();

      while (newIndices.size < count) {
        const randomIndex = Math.floor(Math.random() * totalBoxes);
        newIndices.add(randomIndex);
      }

      setActiveBoxes((prev) => {
        const updated = new Set(prev);
        newIndices.forEach((i) => updated.add(i));
        return updated;
      });

      setTimeout(() => {
        setActiveBoxes((prev) => {
          const updated = new Set(prev);
          newIndices.forEach((i) => updated.delete(i));
          return updated;
        });
      }, activeDuration);
    }, intervalMs);

    return () => clearInterval(interval);
  }, [totalBoxes, intervalMs, activeDuration]);

  return (
    <div className="grid-container">
      {Array.from({ length: totalBoxes }).map((_, idx) => (
        <GridBox key={idx} isActive={activeBoxes.has(idx)} />
      ))}
    </div>
  );
};

export default Grid;

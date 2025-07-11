export const initializeGrid = (size) => {
  return Array(size)
    .fill()
    .map(() => Array(size).fill('white'));
};

export const updateGrid = (prevGrid, size, greyProbability) => {
  const newGrid = prevGrid.map((row) => [...row].fill('white'));
  
  // Select one random cell for blue
  const randomRowBlue = Math.floor(Math.random() * size);
  const randomColBlue = Math.floor(Math.random() * size);
  newGrid[randomRowBlue][randomColBlue] = 'blue';

  // Select one random cell for green (not same as blue)
  let randomRowGreen, randomColGreen;
  do {
    randomRowGreen = Math.floor(Math.random() * size);
    randomColGreen = Math.floor(Math.random() * size);
  } while (randomRowGreen === randomRowBlue && randomColGreen === randomColBlue);
  newGrid[randomRowGreen][randomColGreen] = 'green';

  // Select one random cell for grey with lower probability
  if (Math.random() < greyProbability) {
    let randomRowGrey, randomColGrey;
    do {
      randomRowGrey = Math.floor(Math.random() * size);
      randomColGrey = Math.floor(Math.random() * size);
    } while (
      (randomRowGrey === randomRowBlue && randomColGrey === randomColBlue) ||
      (randomRowGrey === randomRowGreen && randomColGrey === randomColGreen)
    );
    newGrid[randomRowGrey][randomColGrey] = 'grey';
  }

  return newGrid;
};
import startGame from '..';
import randomNumber from '../utils';

const progressionGameFunc = () => {
  const numQuantity = 10;
  const start = randomNumber();
  const position = Math.floor(Math.random() * 10);
  const progression = Math.floor(Math.random() * 10) + 1;
  let expression = [];
  let result = 0;

  for (let i = 0, j = start; i < numQuantity; i += 1, j += progression) {
    expression[i] = j;
    if (i === position) {
      expression[i] = '..';
      result = j;
    }
  }
  expression = expression.join(' ');
  return [expression, result];
};

const startProgressionGame = () => {
  const gameRules = 'What number is missing in the progression?';
  const gamesCount = 3;
  const gameFunc = progressionGameFunc;
  return startGame(gameRules, gamesCount, gameFunc);
};

export default startProgressionGame;

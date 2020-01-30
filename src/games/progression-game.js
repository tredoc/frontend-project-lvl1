import startGame from '..';
import getRandomNumber from '../utils';

const generateProgressionRoundData = () => {
  const progressionLength = 10;
  const start = getRandomNumber(1, 100);
  const position = getRandomNumber(1, 9);
  const progression = getRandomNumber(1, 10);
  let expression = [];
  let result = 0;

  for (let i = 0, j = start; i < progressionLength; i += 1, j += progression) {
    expression[i] = j;
    if (i === position) {
      expression[i] = '..';
      result = j;
    }
  }

  expression = expression.join(' ');
  result = result.toString();

  return [expression, result];
};

const gameRules = 'What number is missing in the progression?';

const startProgressionGame = () => startGame(gameRules, generateProgressionRoundData);

export default startProgressionGame;

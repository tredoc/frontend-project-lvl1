import startGame from '..';
import randomNumber from '../utils';

const progressionGameFunc = () => {
  const progressionLength = 10;
  const start = randomNumber(1, 100);
  const position = randomNumber(1, 9);
  const progression = randomNumber(1, 10);
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
  return [expression, result];
};

const gameRules = 'What number is missing in the progression?';
const gameFunc = progressionGameFunc;

const startProgressionGame = () => startGame(gameRules, gameFunc);

export default startProgressionGame;

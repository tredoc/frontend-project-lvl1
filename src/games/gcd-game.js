import startGame from '..';
import getRandomNumber from '../utils';

const getGcd = (a, b) => {
  let result = 1;
  const smallerNumber = a <= b ? a : b;

  for (let i = 2; i <= smallerNumber; i += 1) {
    if (a % i === 0 && b % i === 0) {
      result = i;
    }
  }
  return result;
};

const genQuestionAndAnswer = () => {
  const a = getRandomNumber(1, 100);
  const b = getRandomNumber(1, 100);

  const expression = `${a} ${b}`;
  const result = getGcd(a, b).toString();

  return [expression, result];
};

const gameRules = 'Find the greatest common divisor of given numbers';

const startGcdGame = () => startGame(gameRules, genQuestionAndAnswer);

export default startGcdGame;

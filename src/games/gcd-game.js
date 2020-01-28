import startGame from '..';
import randomNumber from '../utils';

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

const gcdGameFunc = () => {
  const a = randomNumber(1, 100);
  const b = randomNumber(1, 100);

  const expression = `${a} ${b}`;
  const result = getGcd(a, b);

  return [expression, result];
};

const gameRules = 'Find the greatest common divisor of given numbers';
const gameFunc = gcdGameFunc;

const startGcdGame = () => startGame(gameRules, gameFunc);

export default startGcdGame;

import startGame from '..';
import randomNumber from '../utils';

const gcdGameFunc = () => {
  const a = randomNumber();
  const b = randomNumber();

  const expression = `${a} ${b}`;
  let result = 1;
  const smaller = a <= b ? a : b;

  for (let i = 2; i <= smaller; i += 1) {
    if (a % i === 0 && b % i === 0) {
      result = i;
    }
  }
  return [expression, result];
};

const startGcdGame = () => {
  const gameRules = 'Find the greatest common divisor of given numbers';
  const gamesCount = 3;
  const gameFunc = gcdGameFunc;
  return startGame(gameRules, gamesCount, gameFunc);
};

export default startGcdGame;

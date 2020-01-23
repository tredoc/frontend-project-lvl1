import startGame from '..';
import randomNumber from '../utils';

const isPrimeGameFunc = () => {
  const x = randomNumber();
  let result = 'yes';
  if (x > 1) {
    for (let i = 2; i < x; i += 1) {
      if (x % i === 0) {
        result = 'no';
      }
    }
  }
  return [x, result];
};

const startPrimeGame = () => {
  const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const gamesCount = 3;
  const gameFunc = isPrimeGameFunc;
  return startGame(gameRules, gamesCount, gameFunc);
};

export default startPrimeGame;

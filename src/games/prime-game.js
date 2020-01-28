import startGame from '..';
import randomNumber from '../utils';

const isPrimeGameFunc = () => {
  const num = randomNumber(1, 100);
  let answer = 'yes';
  if (num > 1) {
    for (let i = 2; i < num; i += 1) {
      if (num % i === 0) {
        answer = 'no';
      }
    }
  }
  return [num, answer];
};

const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const gameFunc = isPrimeGameFunc;

const startPrimeGame = () => startGame(gameRules, gameFunc);

export default startPrimeGame;

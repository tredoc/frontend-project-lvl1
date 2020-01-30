import startGame from '..';
import getRandomNumber from '../utils';

const isPrime = (num) => {
  if (num > 1) {
    for (let i = 2; i < num; i += 1) {
      if (num % i === 0) {
        return false;
      }
    }
  }
  return true;
};

const genQuestionAndAnswer = () => {
  const num = getRandomNumber(1, 100);
  const answer = isPrime(num) ? 'yes' : 'no';

  return [answer, num];
};

const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const startPrimeGame = () => startGame(gameRules, genQuestionAndAnswer);

export default startPrimeGame;

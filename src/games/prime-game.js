import startGame from '..';
import getRandomNumber from '../utils';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i <= num / 2; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const genQuestionAndAnswer = () => {
  const question = getRandomNumber(1, 100);
  const answer = isPrime(question) ? 'yes' : 'no';

  return [question.toString(), answer];
};

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const startPrimeGame = () => startGame(gameDescription, genQuestionAndAnswer);

export default startPrimeGame;

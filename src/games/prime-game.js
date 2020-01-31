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
  let question = getRandomNumber(1, 100);
  const answer = isPrime(question) ? 'yes' : 'no';
  question = question.toString;

  return [question, answer];
};

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const startPrimeGame = () => startGame(gameDescription, genQuestionAndAnswer);

export default startPrimeGame;

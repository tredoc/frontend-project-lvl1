import { game } from '..';
import {
  randomNumber, getUserName, askQuestion, checkResult, isWinner,
} from '../utils';

const isPrime = (x) => {
  if (x > 1) {
    for (let i = 2; i < x; i += 1) {
      if (x % i === 0) {
        return 'no';
      }
    }
  }
  return 'yes';
};

const generateIsPrimeQuestion = () => {
  const num = randomNumber();
  return [num, isPrime(num)];
};

const startPrimeGame = () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  const userName = getUserName();
  console.log(`Hello, ${userName}!`);

  let points = 0;
  const gamesCount = 3;

  const failText = `Let's try again, ${userName}!`;

  for (let i = 1; i <= gamesCount; i += 1) {
    const question = generateIsPrimeQuestion();
    const expression = question[0];
    const rightAnswer = question[1];
    const userAnswer = askQuestion(expression);
    const isWinRound = checkResult(userAnswer, rightAnswer);

    if (isWinRound) {
      points += 1;
    } else {
      console.log(failText);
      break;
    }
  }
  return isWinner(points, gamesCount, userName);
};

export default startPrimeGame;

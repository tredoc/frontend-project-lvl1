import { game } from '..';
import {
  randomNumber, getUserName, askQuestion, checkResult, isWinner,
} from '../utils';

const isEven = (x) => {
  if (x % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

const generateEvenQuestion = () => {
  const num = randomNumber();
  return [num, isEven(num)];
};

const startEvenGame = () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  const userName = getUserName();
  console.log(`Hello, ${userName}!`);

  let points = 0;
  const gamesCount = 3;

  const failText = `Let's try again, ${userName}!`;

  for (let i = 1; i <= gamesCount; i += 1) {
    const question = generateEvenQuestion();
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

export default startEvenGame;

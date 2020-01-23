import { game } from '..';
import {
  randomNumber, getUserName, askQuestion, checkResult, isWinner,
} from '../utils';

const getSmallerNum = (a, b) => {
  if (a >= b) {
    return a;
  }
  return b;
};

const getGcdExpression = (a, b) => {
  const expression = `${a} ${b}`;
  let result = 1;
  const smaller = getSmallerNum(a, b);
  for (let i = 2; i <= smaller; i += 1) {
    if (a % i === 0 && b % i === 0) {
      result = i;
    }
  }
  return [expression, result];
};

const generateGcdQuestion = () => {
  const expression = getGcdExpression(randomNumber(), randomNumber());
  return expression;
};

const startGcdGame = () => {
  console.log('Welcome to the Brain Games!');
  console.log('Find the greatest common divisor of given numbers.');

  const userName = getUserName();
  console.log(`Hello, ${userName}!`);

  let points = 0;
  const gamesCount = 3;

  const failText = `Let's try again, ${userName}!`;

  for (let i = 1; i <= gamesCount; i += 1) {
    const question = generateGcdQuestion();
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

export default startGcdGame;

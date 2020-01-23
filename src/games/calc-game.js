import { game } from '..';
import {
  randomNumber, getUserName, askQuestion, checkResult, isWinner,
} from '../utils';

const getCalcExpression = (a, b) => {
  const num = Math.floor(Math.random() * 3) + 1;
  let expression = '';
  let result = 0;

  if (num === 1) {
    expression = `${a} + ${b}`;
    result = a + b;
  }
  if (num === 2) {
    expression = `${a} - ${b}`;
    result = a - b;
  } else {
    expression = `${a} * ${b}`;
    result = a * b;
  }
  return [expression, result];
};

const generateCalcQuestion = () => {
  const expression = getCalcExpression(randomNumber(), randomNumber());
  return expression;
};


const startCalcGame = () => {
  console.log('Welcome to the Brain Games!');
  console.log('What is the result of the expression?');

  const userName = getUserName();
  console.log(`Hello, ${userName}!`);

  let points = 0;
  const gamesCount = 3;

  const failText = `Let's try again, ${userName}!`;

  for (let i = 1; i <= gamesCount; i += 1) {
    const question = generateCalcQuestion();
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

export default startCalcGame;

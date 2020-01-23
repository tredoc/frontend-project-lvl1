import { game } from '..';
import {
  randomNumber, getUserName, askQuestion, checkResult, isWinner,
} from '../utils';

const pickRandom = () => Math.floor(Math.random() * 10);

export const generateProgressionQuestion = () => {
  const numQuantity = 10;
  const start = randomNumber();
  const position = pickRandom();
  const progression = pickRandom() + 1;
  let expression = [];
  let result = 0;

  for (let i = 0, j = start; i < numQuantity; i += 1, j += progression) {
    expression[i] = j;
    if (i === position) {
      expression[i] = '..';
      result = j;
    }
  }
  expression = expression.join(' ');
  return [expression, result];
};

const startProgressionGame = () => {
  console.log('Welcome to the Brain Games!');
  console.log('What number is missing in the progression?');

  const userName = getUserName();
  console.log(`Hello, ${userName}!`);

  let points = 0;
  const gamesCount = 3;

  const failText = `Let's try again, ${userName}!`;

  for (let i = 1; i <= gamesCount; i += 1) {
    const question = generateProgressionQuestion();
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

export default startProgressionGame;

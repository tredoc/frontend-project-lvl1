import startGame from '..';
import randomNumber from '../utils';

const calcGameFunc = () => {
  const a = randomNumber();
  const b = randomNumber();
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

const startCalcGame = () => {
  const gameRules = 'What is the result of the expression?';
  const gamesCount = 3;
  const gameFunc = calcGameFunc;
  return startGame(gameRules, gamesCount, gameFunc);
};

export default startCalcGame;

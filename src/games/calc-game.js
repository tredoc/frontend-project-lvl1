import startGame from '..';
import randomNumber from '../utils';

const operators = ['+', '-', '*'];
const getRandomOperator = () => {
  const num = randomNumber(1, operators.length);
  const operator = operators[num - 1];
  return operator;
};

const calcGameFunc = () => {
  const a = randomNumber(1, 100);
  const b = randomNumber(1, 100);
  const operator = getRandomOperator();

  const expression = `${a} ${operator} ${b}`;
  let result;

  switch (operator) {
    case '+':
      result = a + b;
      break;
    case '-':
      result = a - b;
      break;
    case '*':
      result = a * b;
      break;
    default:
      console.log('Unknown operator');
  }
  return [expression, result];
};

const gameRules = 'What is the result of the expression?';
const gameFunc = calcGameFunc;

const startCalcGame = () => startGame(gameRules, gameFunc);

export default startCalcGame;

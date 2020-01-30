import startGame from '..';
import getRandomNumber from '../utils';

const operators = ['+', '-', '*'];

const getRandomOperator = () => {
  const num = getRandomNumber(1, operators.length);
  const operator = operators[num - 1];
  return operator;
};

const calculateExpression = (a, b, operator) => {
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

  return result;
};

const generateCalcRoundData = () => {
  const a = getRandomNumber(1, 100);
  const b = getRandomNumber(1, 100);
  const operator = getRandomOperator();

  const expression = `${a} ${operator} ${b}`;
  let result = calculateExpression(a, b, operator);
  result = result.toString();

  return [expression, result];
};

const gameRules = 'What is the result of the expression?';

const startCalcGame = () => startGame(gameRules, generateCalcRoundData);

export default startCalcGame;

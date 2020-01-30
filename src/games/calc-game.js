import startGame from '..';
import getRandomNumber from '../utils';

const operators = ['+', '-', '*'];

const getRandomOperator = () => {
  const num = getRandomNumber(1, operators.length);
  const operator = operators[num - 1];
  return operator;
};

const calculateExpression = (a, b, operator) => {
  switch (operator) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    default:
      return console.log('Unknown operator');
  }
};

const genQuestionAndAnswer = () => {
  const a = getRandomNumber(1, 100);
  const b = getRandomNumber(1, 100);
  const operator = getRandomOperator();

  const expression = `${a} ${operator} ${b}`;
  let result = calculateExpression(a, b, operator);
  result = result.toString();

  return [expression, result];
};

const gameRules = 'What is the result of the expression?';

const startCalcGame = () => startGame(gameRules, genQuestionAndAnswer);

export default startCalcGame;

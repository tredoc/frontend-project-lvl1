import startGame from '..';
import getRandomNumber from '../utils';

const operators = ['+', '-', '*'];

const getRandomOperator = () => {
  const index = getRandomNumber(1, operators.length - 1);
  const operator = operators[index];
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
      return null;
  }
};

const genQuestionAndAnswer = () => {
  const a = getRandomNumber(1, 100);
  const b = getRandomNumber(1, 100);
  const operator = getRandomOperator();

  const question = `${a} ${operator} ${b}`;
  const answer = calculateExpression(a, b, operator).toString();

  return [question, answer];
};

const gameDescription = 'What is the result of the expression?';

const startCalcGame = () => startGame(gameDescription, genQuestionAndAnswer);

export default startCalcGame;

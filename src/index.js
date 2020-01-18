import readlineSync from 'readline-sync';

export const greeting = (x) => console.log(`Welcome to the Brain Games! ${x}`);
export const getUserName = () => readlineSync.question('Mai I have your name? ');
export const getAnswer = (x) => readlineSync.question(x);
export const isWinner = (games, points, userName) => {
  if (games === points) {
    return console.log(`Congratulations, ${userName}!`);
  }
  return null;
};

const randomNumber = () => Math.floor(Math.random() * 100) + 1;
const pickRandom = () => Math.floor(Math.random() * 10);
const isEven = (x) => {
  if (x % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

const getSmallerNum = (a, b) => {
  if (a >= b) {
    return a;
  }
  return b;
};

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

export const generateIsPrimeQuestion = () => {
  const num = randomNumber();
  return [num, isPrime(num)];
};

export const generateGcdQuestion = () => {
  const expression = getGcdExpression(randomNumber(), randomNumber());
  return expression;
};

export const generateEvenQuestion = () => {
  const num = randomNumber();
  return [num, isEven(num)];
};

export const generateCalcQuestion = () => {
  const expression = getCalcExpression(randomNumber(), randomNumber());
  return expression;
};

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

export const askQuestion = (expression) => {
  console.log(`Question: ${expression}`);
  const answer = getAnswer('Your answer: ');
  return answer;
};

export const checkResult = (userAnswer, rightAnswer) => {
  let result = Boolean;
  if (userAnswer === rightAnswer.toString()) {
    console.log('Correct!');
    result = true;
  } else {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
    result = false;
  }
  return result;
};

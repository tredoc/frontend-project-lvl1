import readlineSync from 'readline-sync';

export const greeting = (x) => console.log(`Welcome to the Brain Games! ${x}`);
export const getUserName = () => readlineSync.question('Mai I have your name? ');
export const getAnswer = (x) => readlineSync.question(x);
export const isWinner = (games, points) => games === points;

const randomNumber = () => Math.floor(Math.random() * 100) + 1;
const isEven = (x) => (x % 2 === 0) ? 'yes' : 'no';
const getPhrase = (a, b) => {
  const num = randomNumber();
  let phrase = '';
  let result = 0;

  if (num < 33) {
    phrase = `${a} + ${b}`;
    result = a + b;
  }
  if (num > 33 && num < 66) {
    phrase = `${a} - ${b}`;
    result = a - b;
  } else {
    phrase = `${a} * ${b}`;
    result = a * b;
  }
  return [phrase, result];
};

export const generateEvenQuestion = () => {
  const num = randomNumber();
  return [num, isEven(num)];
};

export const generateCalcQuestion = () => {
  const phrase = getPhrase(randomNumber(), randomNumber());
  return phrase;
};

export const askQuestion = (expression) => {
  console.log(`Question: ${expression}`);
  const answer = getAnswer('Your answer: ');
  return answer;
};

export const checkResult = (userAnswer, rightAnswer) => {
  let result = Boolean;
  if (userAnswer == rightAnswer) {
    console.log('Correct!');
    result = true;
  } else {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
    result = false;
  }
  return result;
};

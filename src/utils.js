import readlineSync from 'readline-sync';

export const getUserName = () => readlineSync.question('Mai I have your name? ');
export const getAnswer = (x) => readlineSync.question(x);
export const isWinner = (games, points, userName) => {
  if (games === points) {
    return console.log(`Congratulations, ${userName}!`);
  }
  return null;
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

export const randomNumber = () => Math.floor(Math.random() * 100) + 1;

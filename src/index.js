import readlineSync from 'readline-sync';

const getUserName = () => readlineSync.question('Mai I have your name? ');
const getAnswer = (x) => readlineSync.question(x);
const isWinner = (games, points, userName) => {
  if (games === points) {
    return console.log(`Congratulations, ${userName}!`);
  }
  return null;
};

const askQuestion = (expression) => {
  console.log(`Question: ${expression}`);
  const answer = getAnswer('Your answer: ');
  return answer;
};

const checkResult = (userAnswer, rightAnswer) => {
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

const startGame = (gameRules, gamesCount, gameFunc) => {
  console.log('Welcome to the Brain Games!');
  console.log(gameRules);

  const userName = getUserName();
  console.log(`Hello, ${userName}!`);

  let points = 0;

  for (let i = 1; i <= gamesCount; i += 1) {
    const question = gameFunc();
    const expression = question[0];
    const rightAnswer = question[1];
    const userAnswer = askQuestion(expression);
    const isWinRound = checkResult(userAnswer, rightAnswer);

    if (isWinRound) {
      points += 1;
    } else {
      console.log(`Let's try again, ${userName}!`);
      break;
    }
  }
  return isWinner(points, gamesCount, userName);
};

export default startGame;

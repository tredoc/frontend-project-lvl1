import { greeting, getUserName, askQuestion, generateGcdQuestion, checkResult, isWinner } from '..';

const startGcdGame = () => {
  greeting('\nFind the greatest common divisor of given numbers.');

  const userName = getUserName();
  console.log(`Hello, ${userName}!`);

  let points = 0;
  const gamesCount = 3;

  const failText = `Let's try again, ${userName}!`;

  for (let i = 1; i <= gamesCount; i += 1) {
    const question = generateGcdQuestion();
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

  if (isWinner(points, gamesCount)) {
    return console.log(`Congratulations, ${userName}!`);
  }
};

export default startGcdGame;

import {
  greeting, getUserName, askQuestion, generateIsPrimeQuestion, checkResult, isWinner,
} from '..';

const startPrimeGame = () => {
  greeting('\nAnswer "yes" if given number is prime. Otherwise answer "no".');

  const userName = getUserName();
  console.log(`Hello, ${userName}!`);

  let points = 0;
  const gamesCount = 3;

  const failText = `Let's try again, ${userName}!`;

  for (let i = 1; i <= gamesCount; i += 1) {
    const question = generateIsPrimeQuestion();
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
  return isWinner(points, gamesCount, userName);
};

export default startPrimeGame;

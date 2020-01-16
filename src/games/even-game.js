import { greeting, getUserName, generateEvenQuestion, askQuestion, checkResult, isWinner } from '..'; 

const startEvenGame = () => {
  greeting('\nAnswer "yes" if the number is even, otherwise answer "no".');

  const userName = getUserName();
  console.log(`Hello, ${userName}!`);

  let points = 0;
  const gamesCount = 3;

  const failText = `Let's try again, ${userName}!`;

  for (let i = 1; i <= gamesCount; i += 1) {
    const question = generateEvenQuestion();
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

export default startEvenGame;

import readlineSync from 'readline-sync';

const isWinner = (games, points) => {
  if (games === points) {
    return true;
  }
  return false;
};

const isWinRound = (userAnswer, rightAnswer) => {
  if (userAnswer === rightAnswer.toString()) {
    return true;
  }
  return false;
};

const startGame = (gameRules, gameFunc) => {
  console.log('Welcome to the Brain Games!');
  console.log(gameRules);

  const userName = readlineSync.question('Mai I have your name? ');
  console.log(`Hello, ${userName}!`);

  let result = '';
  let points = 0;
  const gamesCount = 3;

  for (let i = 1; i <= gamesCount; i += 1) {
    const question = gameFunc();
    const expression = question[0];
    const rightAnswer = question[1];

    console.log(`Question: ${expression}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (isWinRound(userAnswer, rightAnswer)) {
      points += 1;
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      break;
    }
  }
  if (isWinner(points, gamesCount)) {
    result = `Congratulations, ${userName}!`;
  }
  return console.log(result);
};

export default startGame;

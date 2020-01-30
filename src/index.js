import readlineSync from 'readline-sync';

const isWinRound = (userAnswer, rightAnswer) => {
  if (userAnswer === rightAnswer) {
    return true;
  }
  return false;
};

const gamesCount = 3;

const startGame = (gameRules, generateRoundData) => {
  console.log('Welcome to the Brain Games!');
  console.log(gameRules);

  const userName = readlineSync.question('Mai I have your name? ');
  console.log(`Hello, ${userName}!`);

  for (let i = 1; i <= gamesCount; i += 1) {
    const roundData = generateRoundData();
    const expression = roundData[0];
    const rightAnswer = roundData[1];

    console.log(`Question: ${expression}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (isWinRound(userAnswer, rightAnswer)) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
      return console.log(`Let's try again, ${userName}!`);
    }
  }

  return console.log(`Congratulations, ${userName}!`);
};

export default startGame;

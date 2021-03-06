import readlineSync from 'readline-sync';

const gamesCount = 3;

const startGame = (gameDescription, genQuestionAndAnswer) => {
  console.log('Welcome to the Brain Games!');
  console.log(gameDescription);

  const userName = readlineSync.question('Mai I have your name? ');
  console.log(`Hello, ${userName}!`);

  for (let i = 1; i <= gamesCount; i += 1) {
    const questionAndAnswer = genQuestionAndAnswer();
    const [question, rightAnswer] = questionAndAnswer;

    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === rightAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
};

export default startGame;

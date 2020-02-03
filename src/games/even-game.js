import startGame from '..';
import getRandomNumber from '../utils';

const isEven = (num) => num % 2 === 0;

const genQuestionAndAnswer = () => {
  const question = getRandomNumber(1, 100);
  const answer = isEven(question) ? 'yes' : 'no';

  return [question.toString(), answer];
};

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const startEvenGame = () => startGame(gameDescription, genQuestionAndAnswer);

export default startEvenGame;

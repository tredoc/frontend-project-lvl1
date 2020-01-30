import startGame from '..';
import getRandomNumber from '../utils';

const isEven = (num) => num % 2 === 0;

const genQuestionAndAnswer = () => {
  const randomNum = getRandomNumber(1, 100);
  const result = isEven(randomNum) ? 'yes' : 'no';
  return [randomNum, result];
};

const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';

const startEvenGame = () => startGame(gameRules, genQuestionAndAnswer);

export default startEvenGame;

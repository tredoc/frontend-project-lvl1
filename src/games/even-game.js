import startGame from '..';
import randomNumber from '../utils';

const isEven = (num) => {
  if (num % 2 === 0) {
    return true;
  }
  return false;
};

const evenGameFunc = () => {
  const randomNum = randomNumber(1, 100);
  let result = 'no';
  if (isEven(randomNum)) {
    result = 'yes';
  }
  return [randomNum, result];
};

const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';
const gameFunc = evenGameFunc;

const startEvenGame = () => startGame(gameRules, gameFunc);

export default startEvenGame;

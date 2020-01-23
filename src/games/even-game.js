import startGame from '..';
import randomNumber from '../utils';

const isEvenGameFunc = () => {
  const x = randomNumber();
  let result = '';
  if (x % 2 === 0) {
    result = 'yes';
  } else {
    result = 'no';
  }
  return [x, result];
};

const startEvenGame = () => {
  const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';
  const gamesCount = 3;
  const gameFunc = isEvenGameFunc;
  return startGame(gameRules, gamesCount, gameFunc);
};

export default startEvenGame;

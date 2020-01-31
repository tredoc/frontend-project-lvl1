import startGame from '..';
import getRandomNumber from '../utils';

const progressionLength = 10;

const genQuestionAndAnswer = () => {
  const start = getRandomNumber(1, 100);
  const hiddenMemberIndex = getRandomNumber(0, progressionLength - 1);
  const progressionStep = getRandomNumber(1, 10);
  const expression = [];
  let result = 0;

  for (let i = 0, j = start; i < progressionLength; i += 1, j += progressionStep) {
    expression[i] = j;
    if (i === hiddenMemberIndex) {
      expression[i] = '..';
      result = j;
    }
  }

  const question = expression.join(' ');
  const answer = result.toString();

  return [question, answer];
};

const gameDescription = 'What number is missing in the progression?';

const startProgressionGame = () => startGame(gameDescription, genQuestionAndAnswer);

export default startProgressionGame;

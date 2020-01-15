import readlineSync from 'readline-sync';

export const getAnswer = (x) => readlineSync.question(x);

const randomNumber = () => Math.floor(Math.random() * 100) + 1;
const isEven = (x) => (x % 2 === 0) ? 'yes' : 'no';
const isWinner = (games, points) => games === points;

const getPhrase = (a,b) => {
  const num = randomNumber();
  let phrase = '';
  let result = 0;

  if (num < 33 ) {
    phrase = `${a} + ${b}`;
    result = a + b;
  }
  if (num > 33 && num < 66) {
    phrase = `${a} - ${b}`;
    result = a - b;
  } else { 
    phrase = `${a} * ${b}`;
    result = a * b;
  }
  return [phrase, result];
}; 

export const calcGame = (gamesCount, user) => {
  let points = 0;

  for (let i = 1; i <= gamesCount; i += 1) {
    const phrase = getPhrase(randomNumber(), randomNumber());
    console.log(`Question: ${phrase[0]}`);
    const answer = getAnswer('Your answer: ');
    if (phrase[1] === Number(answer)) {
      points += 1;
      console.log('Correct!');
    } else {
      return console.log(`'${answer}' is wrong answer ;(. Correct answer was '${phrase[1]}'.`
      + `\nLet's try again, ${user}!`); 
    }
  }
  if (isWinner(points, gamesCount)) {
    return console.log(`Congratulations, ${user}!`);
  }
};

export const evenGame = (gamesCount, user) => {
  let points = 0;

  for (let i = 1; i <= gamesCount; i += 1) {
    const num = randomNumber();
    console.log(`Question: ${num}`);
    const answer = getAnswer('Your answer: ');
    if (isEven(num) === answer) {
      points += 1;
      console.log('Correct!');
    } else {
      return console.log(`'${answer}' is wrong answer ;(. Correct answer was '${isEven(num)}'.`
      + `\nLet's try again, ${user}!`);
    }
  }

  if (isWinner(points, gamesCount)) {
    return console.log(`Congratulations, ${user}!`);
  }
};

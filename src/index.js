import readlineSync from 'readline-sync';

var getUserName = x => readlineSync.question(x);

export {getUserName};

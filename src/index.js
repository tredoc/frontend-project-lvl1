import readlineSync from 'readline-sync';

const getUserName = (x) => readlineSync.question(x);

export default getUserName;

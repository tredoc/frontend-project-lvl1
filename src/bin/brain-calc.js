#!/usr/bin/env node
import { getAnswer, calcGame } from '..';

console.log('Welcome to the Brain Games!' +
'\nAnswer "yes" if the number is even, otherwise answer "no".');

const user = getAnswer('Mai I have your name? ');
console.log(`Hello, ${user}!`);

const gamesCount = 3;
calcGame(gamesCount, user);
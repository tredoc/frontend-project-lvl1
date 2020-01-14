#!/usr/bin/env node
import { getAnswer } from '..';

console.log('Welcome to the Brain Games!');

const user = getAnswer('Mai I have your name? ');
console.log(`Hello, ${user}!`);

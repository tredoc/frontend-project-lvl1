#!/usr/bin/env node
import {getUserName} from '..';
console.log('Welcome to the Brain Games!');

const user = getUserName('Mai I have your name? ');
console.log('Hello, ' + user + '!');

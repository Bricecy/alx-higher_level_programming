#!/usr/bin/node

const fs = require('fs');

const filePath = './myFile.js';
const newContent = 'const myVar = 333;';

fs.writeFile(filePath, newContent, function (err) {
  if (err) {
    console.error('Error modifying myVar:', err);
    return;
  }

  console.log('myVar has been modified to 333');
});


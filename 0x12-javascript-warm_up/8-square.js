#!/usr/bin/node

const argument = process.argv[2];
const size = parseInt(argument);

if (!isNaN(size)) {
  if (size > 0) {
    for (let i = 0; i < size; i++) {
      let line = '';
      for (let j = 0; j < size; j++) {
        line += 'X';
      }
      console.log(line);
    }
  } else {
    console.log('Size must be a positive number');
  }
} else {
  console.log('Missing size');
}


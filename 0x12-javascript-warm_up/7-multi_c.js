#!/usr/bin/node

const argument = process.argv[2];
const count = parseInt(argument);

if (!isNaN(count)) {
  for (let i = 0; i < count; i++) {
    console.log('C is fun');
  }
} else {
  console.log('Missing number of occurrences');
}


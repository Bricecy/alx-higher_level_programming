#!/usr/bin/node

function factorial(n) {
  if (isNaN(n)) {
    return 1;
  } else if (n <= 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

const argument = process.argv[2];
const num = parseInt(argument);

console.log(factorial(num));


#!/usr/bin/node

function findSecondLargest(numbers) {
  if (numbers.length < 2) {
    return 0;
  }

  let largest = Number.MIN_SAFE_INTEGER;
  let secondLargest = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i < numbers.length; i++) {
    const num = parseInt(numbers[i]);
    if (num > largest) {
      secondLargest = largest;
      largest = num;
    } else if (num > secondLargest && num < largest) {
      secondLargest = num;
    }
  }

  return secondLargest;
}

const arguments = process.argv.slice(2);
const secondLargest = findSecondLargest(arguments);

console.log(secondLargest);


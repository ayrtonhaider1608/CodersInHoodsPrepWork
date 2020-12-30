const myName = "John"; // SET YOUR NAME

const visitors = ["Alex", "Mike", "Sam"]; // Add at least 5 names

/**
 * Exercise 1
 *
 * create a function {greetVisitors} and inside it write for loop which
 * will greet all people from "visitors" for each person you should
 * console.log "Hi {name}, my name is {myName}!"
 */

// ========================
const numbers = [2, 123, 13, 1, 6, 84, 23, 12, 45]; // DON'T TOUCH THIS LINE :)

function greetVisitors() {
  for (let visitor = 0; visitor < visitors.length; visitor++) {
    console.log(`Hi ${visitor}, my name is ${myName}!`);
  }
}
/**
 * Exercise 2
 * Create a function {getElementIndex} that uses a for loop to find the index of a
 * given item in {numbers}.
 * If the item is not present, return a string "Item not found"
 */
// ========================

function getElementIndex(element) {
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === element) {
      return i;
    }
  }
  return "Item not found";
}

getElementIndex(1);

/**
 * Exercise 3
 * Create a function {total} that will return sum of all numbers
 * from {numbers} array
 */

// ========================

const numbersForIndexes = [6, 2, 16, 23, 84, 21, 9, 3]; // DON'T TOUCH THIS LINE :)

function total() {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}

/**
 * Exercise 4
 * Create a function {addIndex} that takes {numbersForIndexes} array,
 * and returns a new array which includes each number + it's index
 */

const forLowestNumber = [5, 234, 96, 34, -34, 0, 23]; // DON'T TOUCH THIS LINE :)
// [5, 235, 98, 37, 5, 29]

function addIndex() {
  let num = [];
  for (let i = 0; i < numbersForIndexes.length; i++) {
    num.push(numbersForIndexes[i] + i);
  }
  return num;
}

/**
 * Exercise 5
 *  create function {lowestNumber} which will return the lowest integer
 * from {forLowestNumber}
 */

function lowestNumber() {
  return Math.min(...forLowestNumber);
}
lowestNumber();

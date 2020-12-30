/**
 * Exercise 1
 *
 * Create an array "wildAnimals" and add 'tiger', 'rabbit',
 * 'panda' and 'giraffe' into it as strings
 */

 let wildAnimals = ['tiger', 'rabbit', 'panda', 'giraffe'];
 
/**
 * Exercise 2
 *
 * Create an array "pets" and add 'cat', 'dog' and 'hamster'
 * into it as strings(must contains dog)
 */

let pets = ['cat', 'dog', 'hamster'];

/**
 * Exercise 3
 *
 * Create a variable "animals". It should include all wildAnimals
 * and all pets. Find the way to concatenate your arrays with JS
 */

let animals = wildAnimals.concat(pets);

/**
 * Exercise 4
 *
 * create a dogIndex variable and by using "findIndex" JS method
 * find dog index in "animals" array
 */

const dogIndex = animals.findIndex(animal => {
    return animal === 'dog';
  });

/**
 * Exercise 5
 *
 * create a pandaIndex variable and by using "indexOf" JS method
 * find panda index in "animals" array
 */

let pandaIndex = animals.indexOf('panda');


/**
 * create a variable with name "numbers"  which will be an array
 * and contain numbers from 1 to 9(ascending) and from 9 to 1(descending)
 * (each number should be twice in this array).
 */

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 8, 7, 6, 5, 4, 3, 2, 1];

/**
 * Exercise 6
 *
 * Create variable "first4DigitIndex" and from "numbers"
 * find index of first instance of digit 4
 */
const first4DigitIndex = numbers.findIndex(num => {
    return num === 4;
});
console.log(first4DigitIndex[3]);

/**
 * Exercise 7
 *
 * Create variable "last4DigitIndex" and from "numbers"
 * find index of last instance of digit 4
 */

const last4DigitIndex = numbers.lastIndexOf(4);
console.log(last4DigitIndex);

/**
 * Exercise 8
 *
 * Create variable "hasSeven" check does "numbers"
 * contains 7
 */

 const hasSeven = numbers == 7 ? false:true;
 console.log(hasSeven);
//Why did this pass when true and false were swapped round?

/**
 * Exercise 9
 *
 * Create variable "hasTwenty" check does "numbers"
 * contains 20
 */

const hasTwenty = numbers == 20 ? true:false;
console.log(hasTwenty);

//Same here with the above query.

/**
 * Exercise 10
 *
 * Create variable "moreThanFour" returns first number
 * from "numbers" that is more than 4
 */

const moreThanFour = numbers.findIndex(num => {
    return num > 5;
});
console.log(moreThanFour);

/**
 * Exercise 11
 *
 * Create variable "moreThanSevenIndex" returns first number
 * from "numbers" that are more or equal 7
 */

const moreThanSevenIndex = numbers.findIndex(num => {
    return num >= 8;
});
console.log(moreThanSevenIndex);


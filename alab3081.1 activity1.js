const l1 = 20;
const l2 = 5;
const l3 = 9;
const l4 = 16;

const thesum = l1 + l2 + l3 + l4;

console.log("the sum is " + thesum);

// check if two numbers at list are odd

const istwoofthemodd = (l1 % 2) + (l2 % 2) + (l3 % 2) + (l4 % 2) >= 2;
console.log("is two of those numbers are odd ==>" + istwoofthemodd);

// Check if all numbers are divisible by 5. Cache the result in a variable.

const checkifallnumbersdivisibleby5 =
  (l1 % 5) + (l2 % 5) + (l3 % 5) + (l4 % 5) == 0;
console.log(
  "is all numbers are divisible by 5 ==>" + checkifallnumbersdivisibleby5
);

// Check if the first number is larger than the last. Cache the result in a variable

const compl1tol2 = l1 > l4;
console.log(
  "is the first number is greater than the last number ==>" + compl1tol2
);

// Accomplish the following arithmetic chain:
// Subtract the first number from the second number.
// Multiply the result by the third number.
// Find the remainder of dividing the result by the fourth numbe

const arithmeticoperation1 = (l2 - l1) * l3;
const arithmeticoperation2 = ((l2 - l1) * l3) / l4;
console.log("the result of those operation is ==>" + arithmeticoperation2);

// Change the way that isOver25 calculates
// so that we do not need to use the NOT operator (!) in other
//  logic comparisons. Rename the variable as appropriate.

const isanynumber_sup25 = l1 > 25 || l2 > 25 || l3 > 25 || l4 > 25;
console.log("is any number over 25 ==>" + isanynumber_sup25);


const 
function checkEvenOrOdd(number: number): string {
  if (number % 2 === 0) {
    return `Even`;
  } else {
    return `Odd`;
  }
}
//Example;\: Check if a given number is even or odd
let exampleNumber = 7;
let reult = checkEvenOrOdd(exampleNumber);
console.log(` The number ${exampleNumber} is ${reult}`);
export {};

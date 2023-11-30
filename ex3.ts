function checkNumberSign(number: number): string {
  if (number > 0) {
    return `positive`;
  } else if (number < 0) {
    return `negative`;
  } else {
    return `Zero`;
  }
}
// Exapmle: check the sign of the number
let exampleNumber = 55;
let sign = checkNumberSign(exampleNumber);
console.log(`The number ${exampleNumber} is ${sign}`);

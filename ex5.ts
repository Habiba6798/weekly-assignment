function checkEligibilityToVote(age: number): string {
  if (age >= 18) {
    return `Eligible to vote`;
  } else {
    return `Not Eligible To Vote`;
  }
}
// Example: Check eligiblity based on age
let age = 22;
let eligiblity = checkEligibilityToVote(age);
console.log(`A person aged ${age} is ${eligiblity}`);

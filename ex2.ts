function calculateCubeVolume(sideLenght: number): number {
  return Math.pow(sideLenght, 3);
}
// Example: Calculate voulume of a cube with a sideLength 10
let sideLength = 10;
let voulume = calculateCubeVolume(sideLength);
console.log(
  `The volume of the cube with  sideLength${sideLength} is: ${voulume}`
);

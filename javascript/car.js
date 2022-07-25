// Given an array of Car objects that have a ‘color’ attribute,
// transform the array into an object with the colors as the keys
// and an array of the Car objects as the values.

// example: 

class Car {
  constructor(color) {
    this.color = color;
  }
}

const blueCar = new Car('blue');
const greenCar1 = new Car('green');
const greenCar2 = new Car('green');
const yellowCar = new Car('yellow');

blueCar.color //=> ‘blue’

// Given the following input: [blueCar, greenCar1, yellowCard, greenCar2]
// write a function that converts the array into an object
// expected console output: 

// { blue: [ Car { color: 'blue' } ],
//   yellow: [ Car { color: 'yellow' } ],
//   green: [ Car { color: 'green' }, Car { color: 'green' } ] }

const input = [blueCar, greenCar1, yellowCar, greenCar2];
const expectedOutput = {
  blue: [blueCar],
  yellow: [yellowCar],
  green: [greenCar1, greenCar2]
};

var result;

// Your code goes here



// Test condition to satisfy
console.log(result === expectedOutput);


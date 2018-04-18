function Person(name, age) {
  this.name = name;
  this.age = age;
}
Person.prototype.sayHi = function() {
  return `Hi ${this.name}`;
}

function Student(name, major) {
  this.name = name;
  this.major = major;
}
Student.prototype = Object.create(Person.prototype);
console.log(Student.prototype.constructor);
// we must reset the constructor after doing the above
Student.prototype.constructor = Student;
console.log(Student.prototype.constructor);

Student.prototype.status = function() {
  return 'I am a student';
}

const gus = new Person('Gus', 28);
const ashlyn = new Student('Ashlyn', 'javaScript');



console.log(gus.status);
console.log(ashlyn.status());
console.log(ashlyn.sayHi());




/************* exercise 1 *************/

function Vehicle(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}
Vehicle.prototype.toString = function() {
  return `The make, model, and year are ${this.make}, ${this.model}, ${this.year}.`;
}

const jeep = new Vehicle('Jeep', 'Grand Cherokee', 2018);
console.log(jeep.toString());

function Car(make, model, year, numWheels) {
  Vehicle.apply(this, arguments);
  this.numWheels = numWheels;
}
Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;

const jetta = new Car('VW', 'Jetta', 2014, 4);
jetta;
console.log(jetta.toString());
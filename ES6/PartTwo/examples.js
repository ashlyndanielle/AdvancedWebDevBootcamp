/*******************/
/***** CLASSES *****/
/*******************/

// ES5 object oriented
function es5Student(firstName, lastName){
  this.firstName = firstName;
  this.lastName = lastName;
}
var elie = new es5Student('Elie', 'Schoppik');
// ES6 version
class es6Student {
  constructor (firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}
// if you try to create an object from a class without the new keyword
// you will get a type error
var elvis = new es6Student('Elvis', 'Parsley');

// ES5 instance methods
es5Student.prototype.sayHello = function() {
  return `Hello ${this.firstName} ${this.lastName}`;
}
// ES6 instance methods
class es6WithMethod {
  constructor (firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  sayHello() {
    return `Hello ${this.firstName} ${this.lastName}`;
  }
}

// statics - class methods placed directly onto constructor
class notAStudent {
  constructor (firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
  }
  sayHello(){
    return `Hello ${this.firstName} ${this.lastName}`;
  }
  static isStudent(obj){
    return obj.constructor === notAStudent;
  }
}

const ashlyn = new notAStudent('Ashlyn', 'Mitros');
console.log(ashlyn.sayHello());

console.log(notAStudent.isStudent(ashlyn));
console.log(notAStudent.isStudent(elvis));

// when is this useful?
// example static methods
console.log(Array.isArray([1, 2, 3, 'blue']));
console.log(Array.isArray({stuff: 'stuff'}));
Object.create // creates a new object...duh
Object.freeze // prevents an object from being modified


/*********************/
/***** EXERCISES *****/
/*********************/

// 1 - Create a class for a Person. Each person should have a firstName, lastName, favoriteColor, favoriteNumber.

/* 2 - Add an instance method called multiplyFavoriteNumber that accepts one parameter and returns the product of 
       the parameter multiplied with the favoriteNumber property on a person object.
    
Examples:    
    var person = new Person("Elie", "Schoppik", "purple", 34)
    person.multiplyFavoriteNumber(10) // 340

*/
class Person {
  constructor (firstName, lastName, favoriteColor, favoriteNumber){
    this.firstName = firstName;
    this.lastName = lastName;
    this.favoriteColor = favoriteColor;
    this.favoriteNumber = favoriteNumber;
  }
  multiplyFavoriteNumber(num) {
    return num * this.favoriteNumber;
  }
}


/***********************/
/***** INHERITANCE *****/
/***********************/

// ES5
function AnotherPerson(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

AnotherPerson.prototype.sayHello = function() {
  return `Hello ${this.firstName} ${this.firstName}`;
}

function AnotherStudent(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

// I want to access the sayHello function on the AnotherPerson prototype
// to be accessible by objects created by the AnotherStudent constructor

// set the prototype property of the constructor to be a new object created
// by another prototype property
AnotherStudent.prototype = Object.create(AnotherPerson.prototype);
// then you must reset the constructor
AnotherStudent.prototype.constructor = AnotherStudent;

// Now make it all better with ES6 using 'extends' keyword
class NoMorePeople {
  constructor (notFirst, notLast) {
    this.notFirst = notFirst;
    this.notLast = notLast;
  }
  sayHello() {
    return `Hello ${this.notFirst} ${this.notLast}`;   
  }
}

class KillAllPeople extends NoMorePeople {
}
const noOne = new NoMorePeople('no', 'one');
const crazy = new KillAllPeople('crazy', 'asshit');
console.log(noOne.sayHello()) // Hello no one
console.log(crazy.sayHello()) // Hello crazy asshit
console.log(KillAllPeople.prototype.sayHello) // function sayHello
console.log(KillAllPeople.prototype.constructor === KillAllPeople) //true
console.log(KillAllPeople.prototype.constructor === NoMorePeople) //false



/*****************/
/***** SUPER *****/
/*****************/

// ES5
function Smoothie(base, ingredient){
  this.base = base;
  this.ingredient = ingredient;
}

Smoothie.prototype.blend = function() {
  return `Just blended your ${this.base} and ${this.ingredient}`
}

function SuperSmoothie(){
  Smoothie.apply(this, arguments);
}

const spinach = new SuperSmoothie('water', 'spinach');
spinach; // {base: 'water', ingredient: 'spinach'}

// idea behind super is to find a method by the same name in the parent class
// and implement it in the child class

// ES6

class BetterSmoothie {
  constructor (base, ingredient) {
    this.base = base;
    this.ingredient = ingredient;
  }
  blend() {
    return `Just blended your ${this.base} and ${this.ingredient}`
  }
}

class HealthierSmoothie extends BetterSmoothie {
  constructor(base, ingredient) {
    // super invokes a method of the same name found in the parent class
    super(base, ingredient);
  }
}


/*********************/
/***** EXERCISES *****/
/*********************/


// 1 - Create a class for for a Vehicle. Each vehicle should have a make, model 
// and year property.

// 2 - Add an instance method called start which returns the string "VROOM!"

// 3 - Add an instance method called toString which returns the string "The make, 
// model, and year are" concatenated with the make, model and year property

/* Examples 
    var vehicle = new Vehicle("Tractor", "John Deere", 1999)
    vehicle.toString() // 'The make, model, and year are Tractor John Deere 1999'
*/

// 4 - Create a class for a Car. Each object created from the Car function should 
// also have a make, model, and year and a property called numWheels which should be 
// 4. The Car prototype should inherit all of the methods from the Vehicle prototype

// 5 - Create a class for a Motorcycle. Each object created from the Motorcycle 
// function should also have a make, model, and year and a property called numWheels 
// which should be 2. The Motorcycle prototype should inherit all of the methods from
// the Vehicle prototype

class Vehicle {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  start() {
    return "VROOM!"
  }
  toString() {
    return `The make, model, and year are ${this.make} ${this.model} ${this.year}`
  }
}

class Car extends Vehicle {
  constructor() {
    // can utilize arguments
    super(...arguments);
    this.numWheels = 4;
  }
}

class Motorcycle extends Vehicle {
  constructor(make, model, year) {
    // test what happens when commenting out super
    super(make, model, year);
    this.numWheels = 2;
  }
}

const ninja = new Motorcycle('stuff', 'things', 2000);
console.log(ninja.start())
console.log(ninja.toString())
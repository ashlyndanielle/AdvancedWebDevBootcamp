
function Person(name) {
  this.name = name;
}

const ashlyn = new Person('Ashlyn');
const gus = new Person('Gus');

console.log(ashlyn.__proto__ === Person.prototype);
console.log(gus.__proto__ === Person.prototype);

console.log(Person.prototype.constructor === Person);

Person.prototype.isIntsructor = true;
Person.isAwesome = true;

console.log(ashlyn.isIntsructor);
console.log(ashlyn.isAwesome);
console.log(gus.isIntsructor);



// this can be refactored
function Someone(name) {
  this.name = name;
  this.sayHi = function() {
    return `Hi ${this.name}`;
  }
}

/*
everytime we invoke a new Someone function
it redefines the sayHi function

it's better code to define it once using the
prototype like below
*/
 
/************* exercise 1 *************/

function BetterSomeone(firstName, lastName, favoriteColor) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.favoriteColor = favoriteColor;
  this.family = [];
}

BetterSomeone.prototype.sayHi = function() {
  return `Hi ${this.firstName}`;
}
BetterSomeone.prototype.addToFamily = function(person) {
  // check to make sure the person isn't already added
  // and check to make sure the person is an instance of
  // the BetterSomeone constructor
  if (this.family.indexOf(person) === -1 && person instanceof BetterSomeone) {
    this.family.push(person);
  }
  return this.family.length
}

const elizabeth = new BetterSomeone('Elizabeth', 'Huntsman', 'green');
const josh = new BetterSomeone('Josh', 'Huntsman', 'purple');
console.log(elizabeth.sayHi());
console.log(elizabeth.addToFamily(josh));
console.log(elizabeth.family);


/************* exercise 2 *************/

function Vehicle(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.isRunning = false;
}

Vehicle.prototype.turnOn = function() {
  this.isRunning = true;
}
Vehicle.prototype.turnOff = function() {
  this.isRunning = false;
}
Vehicle.prototype.honk = function() {
  if (this.isRunning) return "Beep Beep!";
}

const vw = new Vehicle('VW', 'Jetta', 2014);
vw.turnOn();
console.log(vw.honk());
vw.turnOff();
console.log(vw.honk());




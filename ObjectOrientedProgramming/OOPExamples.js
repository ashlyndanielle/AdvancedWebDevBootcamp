// use quokka or console

function House(bedrooms, bathrooms, numSqft) {
  this.bedrooms = bedrooms;
  this.bathrooms = bathrooms;
  this.numSqft = numSqft;
}

const firstHouse = new House(2, 1, 1500);
firstHouse;

function Dog(name, age) {

  this.name = name;
  this.age = age;
  this.bark = function() {
    console.log(`${this.name} just barked!`)
  }
}

console.log(Dog) // function Dog
console.log(Dog.prototype) // Dog object
console.log(Dog.prototype.constructor) // function Dog

const reo = new Dog("Reo", 13);
reo;
reo.bark();

// combining multiple constructor functions

function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.numWheels = 4;
}

function Motorcycle(make, model, year) {
  Car.call(this, make, model, year);
  this.numWheels = 2;
}

function DifferentMotorcylce(make, model, year) {
  Car.apply(this, [make, model, year]);
  this.numWheels = 2;
}

function ArgMotorcycle() { // not necessary to add in parameters when using arguments
  // using the keyword "arguments"
  Car.apply(this, arguments);
  this.numWheels = 2;
}

const buzz = new Motorcycle('Ninja', 'Kawasaki', 2018);
const vroom = new DifferentMotorcylce('Slowpoke', 'Plastic', 2001);
const rwar = new ArgMotorcycle('Oops', 'Input needed', 1991);
buzz;
vroom;
rwar;

//***** exercises *****\\

function Person(firstName, lastName, favoriteColor, favoriteNumber) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.favoriteColor = favoriteColor;
  this.favoriteNumber = favoriteNumber;

  this.multiplyFavoriteNumber = num => {
    return num * this.favoriteNumber;
  }
}

const tegan = new Person('Tegan', 'Fairbanks', 'purple', 12);
console.log(tegan.multiplyFavoriteNumber(2));

function Parent(firstName, lastName, favoriteColor, favoriteFood){
  this.firstName = firstName;
  this.lastName = lastName;
  this.favoriteColor = favoriteColor;
  this.favoriteFood = favoriteFood;
}

function Child(firstName, lastName, favoriteColor, favoriteFood){
  Parent.apply(this, arguments);
}

const chloe = new Child('Chloe', 'Fairbanks', 'Purple', 'Broccoli');
chloe;
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


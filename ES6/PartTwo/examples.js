/****************************** PART ONE ******************************/

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


/****************************** PART TWO ******************************/


/****************/
/***** MAPS *****/
/****************/

var firstMap = new Map;
// keys can be any type
firstMap.set(1, 'Elie');
firstMap.set(false, 'a boolean');
firstMap.set('nice', 'a string');
firstMap.delete('purple'); // false
firstMap.delete('nice'); // true
firstMap.size // 2

var arrayKey = [];
var objectKey = {};
firstMap.set(arrayKey, [2,3,4,5]);
firstMap.set(objectKey, {a:1});

console.log(firstMap);

// to retrieve values
firstMap.get(1); // 'Elie'
firstMap.get(0); // undefined
firstMap.get(false); // 'a boolean'
// we can iterate over the map
firstMap.forEach(key => console.log(key));
// maps implement a Symbol.iterator which means we can use a for...of loop
firstMap.values(); // MapIterator of values
const keys = firstMap.keys(); // MapIterator of keys


/****************/
/***** SETS *****/
/****************/

var s = new Set;
// can be created from an array
var s2 = new Set([2, 2, 2, 3, 5, 6, 'stuff', 8]);
// will ignore duplicates
console.log(s2); // { 2, 3, 5, 6, 'stuff', 8 }
s.add(10);
s.add(20);
s.add(10);
console.log(s); // {10, 20}

console.log(s.size) // 2
console.log(s2.size) // 6

s.has(10); // true
s.delete(20); // true
s.size // 1

// we can use a for...of loop
s2[Symbol.iterator] // function


/*********************/
/***** EXERCISES *****/
/*********************/

class MessageBoard {
    
  /*
  In your constructor method, you should assign two properties for each object created from the
  MessageBoard class. The first should be a property called messages which is an empty Map, and
  the second is a property called id which has a value of 1. 
  
  var m = new MessageBoard
  
  m.hasOwnProperty('messages') // true
  m.messages.constructor // function Map() { [native code] }
  m.hasOwnProperty('id') // true
  m.id // 1
  */
  
  constructor(){
    this.messages = new Map;
    this.id = 1;
  }
  
  /*
  
  Add a method called addMessage which accepts a string. The function should add a key and value
  to the messages map with a key of whatever the value of this.id is and a value of whatever the
  string is that is passed to the function. The function should return the object created from the
  class so that the method can be chained. (HINT - to implement the last part, make sure to return this).
  This message should also increment the id
  
  var m = new MessageBoard
  m.addMessage('hello');
  m.messages.size // 1
  m.addMessage('awesome!') // m
  m.addMessage('awesome!').addMessage('nice!').addMessage('cool!') 
  */
  
  addMessage(value){
    this.messages.set(this.id, value);
    this.id++
    return this;
  }
  
  /*
  Add a method called findMessageById which accepts a number and returns the message in the messages
  map with the same key as the number passed to the function. If the key is not found in the messages
  map, the function should return undefined.
  
  
  var m = new MessageBoard
  m.addMessage('hello!')
  m.addMessage('hi!')
  m.addMessage('whats up?')
  m.findMessageById(1) // 'hello!'
  m.findMessageById(2) // 'hi!'
  m.findMessageById(3) // 'whats up?'
  m.findMessageById(4) // undefined
  m.findMessageById() // undefined
  */
  
  findMessageById(id){
    return this.messages.get(id);
  }
  
  /*
  Add a method called findMessageByValue which accepts a string and returns the message in the messages
  map with the same value as the string passed to the function. If the value is not found in the messages
  map, the function should return undefined.
  
  var m = new MessageBoard
  m.addMessage('hello!')
  m.addMessage('hi!')
  m.addMessage('whats up?')
  m.findMessageByValue('hello!') // 'hello!'
  m.findMessageByValue('hi!') // 'hi!'
  m.findMessageByValue('whats up?') // 'whats up?'
  m.findMessageByValue('nothing here') // undefined
  m.findMessageByValue() // undefined
  */

  
  findMessageByValue(value){
    for (let msg of this.messages.values()) {
      if (msg === value) return msg;
    }
  }
  
  /*
  Add a method called removeMessage which accepts a number and removes a message in the messages map with
  a key of the number passed to the function.
  
  var m = new MessageBoard
  m.addMessage('hello!')
  m.addMessage('hi!')
  m.addMessage('whats up?')
  m.removeMessage(1)
  m.removeMessage(2)
  m.messages.size // 1
  m.removeMessage() // m
  */
  
  removeMessage(id){
    this.messages.delete(id);
    return this;
  }
  
  /*
  Add a method called numberOfMessages which returns the number of keys in the messages map
  
  var m = new MessageBoard
  m.addMessage('hello!')
  m.addMessage('hi!')
  m.addMessage('whats up?')
  m.numberOfMessages() // 3
  */
  
  numberOfMessages(){
    return this.messages.size;
  }
  
  /*
  Add a method called messagesToArray which returns an array of all of the values in the messages map
  
  var m = new MessageBoard
  m.addMessage('hello!')
  m.addMessage('hi!')
  m.addMessage('whats up?')
  m.messagesToArray() // ['hello!', 'hi!', 'whats up?'])
  */
  
  messagesToArray(){
    return Array.from(this.messages.values())
  }
}

/*
Write a function called uniqueValues which accepts an array and returns the number of unique values in the array

uniqueValues([1,1,2,2,2,3,3,3,3,4,4,4,5,5,6]) // 6
*/

function uniqueValues(arr){
  return new Set(arr).size;
}

/*

Write a function called hasDuplicates which accepts an array and returns true if there are duplicate values in the
array, otherwise it should return false.

hasDuplicates([1,1,2,2,2,3,3,3,3,4,4,4,5,5,6]) // true
hasDuplicates([1,2,3,4,5,6]) // false
hasDuplicates([]) // false
*/

function hasDuplicates(arr){
  return arr.length !== new Set(arr).size
}

/*

Write a function called countPairs which accepts an array of numbers and a number. The function should return the
number of unique pairs (two numbers) that sum up to the number passed to the function.

countPairs([8,2],10) // 1
countPairs([1,2],10) // 0
countPairs([1,2,3,4,5],10) // 0
countPairs([],10) // 0
countPairs([5,4,-10,6,-20,16],-4) // 2
countPairs([0,-4],-4) // 1
*/

function countPairs(arr, num){
  // remove duplicates
  var cache = new Set(arr);
  console.log(cache)
  var count = 0;
  for (let val of arr) {
    // removing the value will prevent us from dealing with a pair of the same number
    // for example 8: 8+2=10 will up the count and then 2: 2+8=10 would ALSO up the count
    cache.delete(val);
    if (cache.has(num - val)) {
      count++
    }
  }
  console.log(count);
  return count;
}


countPairs([8,2,6,4,10,0],10) // 3
// countPairs([8,2,6,4,2,10,0],10) // 3
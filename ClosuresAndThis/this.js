// RUN QUOKKA
// global: when in the browser, the global this is the window
console.log(this); // window

function whatIsThis() {
  return this; // still the window
}

function variablesInThis() {
  // this declares it as a global object which is not good!
  //  "use strict" can help prevent this
  this.oopsGlobal = 'Elie';
}
variablesInThis();
console.log(oopsGlobal);



// object/implicit
const person = {
  firstName: "Gus",
  sayHi: function () {
    return `Hi ${this.firstName}`
  },
  determineContext: function () {
    return this === person;
  }
}

console.log(person.sayHi());
console.log(person.determineContext());



const anotherPerson = {
  firstName: 'Ashlyn',
  // *this* will still refer to the global object not anotherPerson
  // because this is defined when a function is run
  determineContext: this
}

console.log(anotherPerson.determineContext)

// explicit
const stopHiccuping = {
  firstName: 'Stupid',
  sayHi: function () {
    return `Hi ${firstName}`;
  },
  determineContext: function () {
    return this === stopHiccuping;
  },
  dog: {
    firstName: 'Reo',
    sayHello: function () {
      return `Bark bark ${this.firstName}`;
    },
    determineContext: function () {
      return `dog context is ${this.firstName}`
      return this === stopHiccuping.dog;
    }
  }
}

console.log(stopHiccuping.dog.sayHello.call(stopHiccuping));
console.log(stopHiccuping.dog.sayHello.apply(stopHiccuping));
console.log(stopHiccuping.dog.determineContext());

sayHello = stopHiccuping.dog.sayHello.bind(stopHiccuping);
console.log(sayHello());


// reusing code:
const colt = {
  firstName: 'Colt',
  sayHi: function () {
    return `Hi ${this.firstName}`;
  }
}
const elie = {
  firstName: 'Elie'
}

console.log(colt.sayHi());
console.log(colt.sayHi.call(elie));

// even better...

function sayWhatUp() {
  return `What up ${this.firstName}!`
}

const gus = {
  firstName: 'Gus'
}

const ash = {
  firstName: 'Ashlyn'
}

console.log(sayWhatUp.call(gus));
console.log(sayWhatUp.call(ash));
// ------- or ------- //
gus.sayWhatUp = sayWhatUp;
ash.sayWhatUp = sayWhatUp;
console.log(gus.sayWhatUp())
console.log(ash.sayWhatUp())


// -- example use cases -- //

// select all the divs on a page and find
// the ones that have the text "Hello"

// can't use .filter because the list of div's
// is not an array but an array like object
// have to convert it into an array using .slice

// instead of the target of slice being that array,
// set the target of *this* to be our div's object

// const divs = document.querySelectorAll('div');
// var divsArray = [].slice.call(divs);
// -- or --
// var divsArray = Array.prototype.slice.call(divs);

// divsArray.filter( val => {
//   return val.innerText === "Hello";
// })

function arrayFrom(arrayLikeObject) {
  return [].slice.call(arrayLikeObject);
}



// ***** CALL VS APPLY ***** //

function addNumbers(a, b, c, d) {
  return `${this.firstName} just calculated ${a+b+c+d}`;
}

console.log(addNumbers.call(gus, 1, 2, 3, 4));
console.log(addNumbers.apply(ash, [1, 2, 3, 4]));


// apply will spread out the array for you
const nums = [2, 3, 4];
// Math.max will not accept an array as an argument
console.log(Math.max(nums));
console.log(Math.max.apply(this, nums))

function sumValues(a, b, c) {
  return a + b + c;
}

console.log(sumValues(nums));
console.log(sumValues.apply(this, nums));


// setTimeout and .bind
// because setTimeout is called at a later point, "this" refers to the window
// setTimeout is a method on the window object

const blah = {
  food: 'apples',
  eatFood: function () {
    setTimeout(function () {
      console.log(`I'm going to eat some ${this.food}`);
    }.bind(this), 1000)
  }
}


// binding below would not work...you must attach .bind(this) DIRECTLY
// to the setTimeout function like above ^^
const eatFood = blah.eatFood.bind(blah);

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

const mom = new Person("Betsy", "Erickson");
console.log(mom);
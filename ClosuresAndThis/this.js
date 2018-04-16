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
  sayHi: function() {
    return `Hi ${this.firstName}`
  },
  determineContext: function() {
    return this === person;
  }
}

console.log(person.sayHi());
console.log(person.determineContext());



var anotherPerson = {
  firstName: 'Ashlyn',
  // *this* will still refer to the global object not anotherPerson
  // because it's defined when a function is run
  determineContext: this
}

console.log(anotherPerson.determineContext)
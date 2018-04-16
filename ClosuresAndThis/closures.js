/* RUN QUOKKA ON THIS FILE OR RUN THESE IN THE DEVTOOLS CONSOLE */

/***************** EXAMPLE 1 *****************/
function outer() {
  var start = 'Closures are';

  return function inner() {
    return start + " awesome!";
  }
}

console.log( outer() );
console.log( outer()() );


/***************** EXAMPLE 2 *****************/
function outer2(a) {
  return function inner2(b) {
    // the inner function is making use of the variable "a"
    // which was defined in an outer function called outer2
    // and by the time inner is called, that outer function has returned
    // this function called "inner2" is a closure!
    return a + b;
  }
}

var result = outer2(5)(5);
result;

var storeOuter = outer2(5);
var storeOuterInvoked = storeOuter(10);
storeOuterInvoked;

/***************** EXAMPLE 3 *****************/
// run this in a console and make use of the sources tab
// press escape and it will open up the console so you
// can check to see what variables you have access to
function outerFn() {
  var data = 'something from the outer function';
  var fact = 'Remember me!'
  return function innerFn() {
    debugger
    return fact;
  }
}
outerFn()();


/***************** EXAMPLE 4 *****************/
// private variables

function counter() {
  let count = 0;
  return function increase() {
    count++;
    console.log(count);
    return count;
  }
}

const counter1 = counter();

counter1;

counter1();
counter1();
console.log(counter1())


/***************** EXAMPLE 5 *****************/

function classRoom() {
  const instructors = ['Gus', 'Jeremy'];
  return {
    getInstructors: function() {
      return instructors;
    },
    addInstructor: function(instructor) {
      instructors.push(instructor);
      return instructors;
    }
  }
}

const mathClass = classRoom();
mathClass;

const mathInstructors = mathClass.getInstructors();
mathInstructors;

mathClass.addInstructor('Aaron');
mathClass.addInstructor('Beth');
mathInstructors;

const englishClass = classRoom();
const englishInstructors = englishClass.getInstructors();
englishClass.addInstructor('Brett');
englishInstructors;

// This is not ideal as you can still mutate the variable
englishClass.getInstructors().pop();
englishInstructors;

// WITH IMMUTABILITY:
// use .slice() to return a copy so that the array remains immutable

/*
function classRoom() {
  const instructors = ['Gus', 'Jeremy'];
  return {
    getInstructors: function() {
      return instructors.slice();
    },
    addInstructor: function(instructor) {
      instructors.push(instructor);
      return instructors.slice();
    }
  }
}
*/

/********** EXERCISES **********/

function specialMultiply(a,b) {
  if(arguments.length === 1) {
    return function(b) {
      return a*b;
    }
  }
  return a*b;
}




function guessingGame(amount) {
  let answer = Math.round(Math.random()*11);
  answer;
  let guesses = 0;
  let completed = false;
  return function checker(guess) {
    if (!completed) {
      guesses++;
      if (guess === answer) {
        completed = true;
        return "You got it!"
      }
      else if (guess > answer) return "Your guess is too high!";
      else if (guess < answer) return "Your guess is too low";
      else if (guesses === amount) {
        completed = true;
        return `No more guesses, the answer was ${answer}`;
      }
    }
    return "You are all done playing!";
  }
}

const game = guessingGame(5);
console.log(game(3))
console.log(game(7))
console.log(game(4))



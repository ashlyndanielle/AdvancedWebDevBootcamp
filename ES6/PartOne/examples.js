// using let
/*  
  if you did this with var, you would get
  5 printed out each times but with let
  it is block scoped and it works
*/
for (let i = 0; i < 5; i++) {
  setTimeout( () => {
    console.log(i);
  }, 1000);
}

// condensing with arrow functions

// take an array, double it, then return only the values
// that are divisible by three
function doubleAndFilter(arr) {
  return arr.map( function(value) {
    return value * 2;
  }).filter( function(value) {
    return value % 3 === 0;
  })
};




/***** ARROW FUNCTIONS *****/

var doubleAndFilterArrow = arr => arr.map( value => value * 2).filter( value => value % 3 === 0);

var instructor = {
  firstname: "Elie",
  number: 0,
  sayHi: function() {
    setTimeout(() => {
      console.log("Hello ", this.firstname)
    }, 1000);
  }
}

instructor.sayHi();

function outer() {
  return innerFunction = () => {
    return arguments;
  }
}
// will return (1, 3, 5, 7, 9)
outer(1, 3, 5, 7, 9)(2, 4, 6, 8);

let doubleOddNumbers = arr => arr.filter(val => val % 2 !== 0).map(val => val * 2)

let mapFilterAndReduce = arr => arr.map(val => val.firstname).filter(val => val.length < 5).reduce((acc, next) => {
  acc[next] = next.length;
  return acc;
}, {})

const exampleArray = [{firstname: 'Ash'}, {firstname: 'Gus'}, {firstname: 'Betsy'}]

mapFilterAndReduce(exampleArray);

let createStudentOb = (firstname, lastname) => ({firstname: firstname, lastname: lastname});



/***** DEFAULT PARAMETERS *****/

function add(a=10, b=2) {
  console.log(a+b);
  return a + b;
}

add();
add(5, 5);

/***** EXERCISE PROBLEMS *****/

function findLongestWord(sentence) {
  let words = sentence.split(' ');
  let max = 0;
  let longestWord;
  words.map((word, i) => {
    if (word.length > max) {
      max = word.length;
      longestWord = words[i];
    }
  })
  console.log(longestWord);
}

var mySentence = 'I am excited to learn new things';
findLongestWord(mySentence);



/***** FOR...OF LOOP *****/

var exampleArr = [1,2,3,4,5];

for(let x of exampleArr) {
  console.log(x);
}

/***** REST OPERATOR *****/

function printRest(a,b,...c) {
  console.log('a', a);
  console.log('b', b);
  console.log('c', c);  // [3,4,5]
}

printRest(1,2,3,4,5);

function sumArguments() {
  var total = 0;
  for(var i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  console.log(total);
  return total;

  // or turn arguments into an array
  var argumentsArray = [].slice.call(arguments);
  return argumentsArray.reduce((acc, next) => {
    return acc + next;
  })
}

// or use rest operator which creates an array
var es2015SumArguments = (...args) => args.reduce((acc, next) => acc + next);

sumArguments(2, 3, 4, 5);
es2015SumArguments(2, 3, 4, 5);

function sumArgs(...args) {
  console.dir(args);
  console.log('ARGS', args);
}


/***** SPREAD OPERATOR *****/

var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];
var arr3 = [7, 8, 9];
var combined = [...arr1, ...arr2, ...arr3]; // [1, 2, 3, 4, 5, 6, 7, 8, 9]


var spreadArr = [3,2,1,2,3,4,5];
Math.max(spreadArr); // NaN
// ES5
Math.max.apply(this, spreadArr);  // 5
// ES2015
Math.max(...spreadArr);  // 5

function sumValues(a,b,c) {
  return a+b+c;
}
var nums = [2, 3, 4];

sumValues(...nums);


/***** REST AND SPREAD EXERCISES *****/

function placeInMiddle(arr, vals) {
  let mid = Math.floor(arr.length / 2);
  arr.splice(mid, 0, ...vals);
  console.log(arr);
}

placeInMiddle([3,5], [2,2,2,2])

function joinArrays(...args) {
  return args.reduce((acc, next) => acc.concat(next), [])
}

joinArrays([2,2,2,2], [3,3,3,3]); // [2,2,2,2,3,3,3,3]

function sumEvenArgs(...args) {
  return args.reduce((acc, next) => next % 2 === 0 ? acc += next : acc, 0)
}

/* Write a function called flip which accepts a function and a value for the
keyword this. Flip should return a new function that when invoked, will invoke
the function passed to flip with the correct value of the keyword this and
all of the parameters passed to the function REVERSED. HINT - if you pass 
more than two parameters to flip, those parameters should be included as parameters 
to the inner function when it is invoked. You will have to make use of closure! */

// Examples:

    function personSubtract(a,b,c){
      return this.firstName + " subtracts " + (a-b-c);
    }
    
    var person = {
        firstName: 'Elie'
    }
    
    // var flipFn = flip(personSubtract, person);
    // flipFn(3,2,1) // "Elie subtracts -4"
    
    // var flipFn2 = flip(personSubtract, person, 5,6);
    // flipFn(7,8). // "Elie subtracts -4"

    flip(personSubtract,person,1)(2,3,4) // -2
    flip(personSubtract,person,1,2)(3,4) // -2
    flip(personSubtract,person,11,12,13,14,15)(1,2,3,4,5,6,7,8,9,10) // -22




function flip(fn, thisArg, ...outerArgs){
  return function(...innerArgs) {
    // combine outerArgs with innerArgs but only take as many args
    // as fn will accept (fn.length gives # of arguments accepted)
    // console.log(fn.length);
    let allArgs = outerArgs.concat(innerArgs).splice(0, fn.length);
    console.log(allArgs);
    console.log(fn.apply(thisArg, allArgs.reverse()))
    return fn.apply(thisArg, allArgs.reverse()) // Elie subtracts <"insert number here">
  }
}


/***** OBJECT ENHANCEMENTS - computed property names *****/

// es5
var firstName = 'Elie';
var instructor = {};
instructor[firstName] = "That's me!";
instructor.Elie; // "That's me!"
console.log(instructor)

// es2015
var anotherFirstName = 'Elie';
var anotherInstructor = {
  [firstName]: "That's me!"
}
console.log(anotherInstructor);


/***** OBJECT DESTRUCTURING *****/

var mentor = {
  firstName: 'Gus',
  lastName: 'Nordstrom',
  favColor: 'blue'
}

// var { firstName, lastName } = mentor;
var { firstName:first, lastName } = mentor;

console.log(first); // Gus
console.log(lastName);  // Nordstrom


function createInstructor({name = {first: "Matt", last: "Lane"}, isHilarious = false} = {}){
  return [name.first, name.last, isHilarious];
}
// we're passing a destructured object in as a default parameter
// we assign as a default value an empty object so ES2015 knows that we are destructuring
// if nothing is passed in, we default to the destructured object as the parameter

var instructorOne = createInstructor();
var instructorTwo = createInstructor({name: {first:'mike'}, isHilarious:true});
var instructorThree = createInstructor({name: {first:"ashlyn", last:"mitros"}});

console.log(instructorOne);
console.log(instructorTwo);
console.log(instructorThree);


function displayInfo({ firstName, favColor }) {
  return [firstName, favColor]
}

console.log(displayInfo(mentor));


/***** ARRAY DESTRUCTURING *****/

var destructuredArr = [1,2,3];

var [a,b,c] = destructuredArr;

console.log(a, b, c); // 1 2 3

function returnNumbers(a,b){
  return [a,b];
}

[firstNumber, secondNumber] = returnNumbers(5,10);
firstNumber; // 5
secondNumber; // 10

// swapping values ES5
function swap(a,b) {
  var temp = a;
  a = b;
  b = temp;
  return [a,b]
}
swap(10, 5) // [5,10]

// swapping with ES2015
function betterSwap(a,b) {
  return [a,b] = [b, a]
}
betterSwap(10,5) // [5,10]


/***** DESTRUCTURING EXERCISES *****/

/* 
Write a function called displayStudentInfo which accepts an object and returns the string
"Your full name is" concatenated with the value of the first key and a space and then the
value of the last key. See if you can destructure this object inside of the function.

Examples:
    displayStudentInfo({first: 'Elie', last:'Schoppik'}) // 'Your full name is Elie Schoppik')
*/

function displayStudentInfo(obj){
  var { first, last } = obj;
  return `Your full name is ${first} ${last}`;
}

/* 
Write a function called printFullName which accepts an object and returns the string
"Your full name is" concatenated with the value of the first key and a space and then
the value of the last key. See if you can destructure this object DIRECTLY from the
parameters. The output of the printFullName function should be the exact same as the
displayStudentInfo function. 

Examples:
    printFullName({first: 'Elie', last:'Schoppik'}) // 'Your full name is Elie Schoppik'
*/

// you will have to pass in the correct parameters for this function!
function printFullName({ first, last }){
    return `Your full name is ${first} ${last}`;
}

console.log(printFullName({first: 'ashlyn', last: 'mitros'}))

/* 
Write a function called createStudent which accepts as a parameter, a default parameter which
is a destructured object with the key of likesES2015 and value of true, and key of likesJavaScript
and value of true. 

    If both the values of likesJavaScript and likesES2015 are true, the function should return the string
    'The student likes JavaScript and ES2015'. 
    If the value of likesES2015 is false the function should return the string 'The student likes JavaScript!'
    If the value of likesJavaScript is false the function should return the string 'The student likesES2015!'
    If both the value of likesJavaScript and likesES2015 are false, the function should return the string 'The student does not like much...'

Examples:
    createStudent() // 'The student likes JavaScript and ES2015')
    */
   
   // you will have to pass in the correct parameters for this function!
function createStudent({ likesES2015=true, likesJavaScript=true } = {}){
  if (likesES2015 && likesJavaScript) {
    return 'The student likes JavaScript and ES2015';
  } else if (likesJavaScript) {
    return 'The student likes JavaScript!'
  } else if (likesES2015) {
    return 'The student likesES2015!'
  } 
  return 'The student does not like much...'
}

// console.log(createStudent()) // 'The student likes JavaScript and ES2015')
// console.log(createStudent({likesES2015:false})) // 'The student likes JavaScript!')
// console.log(createStudent({likesJavaScript:false})) // 'The student likes ES2015!')
// console.log(createStudent({likesJavaScript:false, likesES2015:false})) // 'The student does not like much...')
/* 
Write a function called reverseArray which accepts an array and returns the array with all values reversed.
See if you can do this without creating a new array!

Examples:
reverseArray([1,2]) // [2,1]
reverseArray([]) // []
reverseArray([1,2,3,4,5,6,7,8,9,10]) // [10,9,8,7,6,5,4,3,2,1
*/

function reverseArray(arr){
  return [...arr].reverse();
}
console.log(reverseArray([1,2,3,4,5]))
console.log(reverseArray([20, 19, 18, 15, 14, 10, 2020]))
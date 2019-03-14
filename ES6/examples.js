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
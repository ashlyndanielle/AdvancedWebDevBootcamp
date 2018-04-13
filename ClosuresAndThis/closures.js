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
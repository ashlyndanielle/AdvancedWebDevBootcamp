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

var doubleAndFilterArrow = arr => arr.map( value => value * 2).filter( value => value % 3 === 0);
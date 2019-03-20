* *let* and *const*
* template strings
* arrow functions
* object enhancements
* default parameters
* rest and spread operators
* object destructuring


**ES 2015**
  * let, const                    * object destructuring
  * template strings              * array destructuring
  * arrow functions               * class keyword
  * default parameters            * super and extends keywords
  * rest and spread operators     * Maps / Sets
  * for...of loops                * promises
  * object shorthand notation     * generators
  * computed property names       * Object, Number, Array methods

_const_
  * we can never redeclare a const variable
  * not able to change the value (mutate) of a primative:
      - strings
      - numbers
      - booleans
      - null
      - undefined
      - symbol
  * does not work the same on objects and array's

_hoisting_
  * hoisting with var: javascript takes variable delcartions and lifts them
                       to the top of the scope they are in
  * hoisting with let: javascript will still hoist but the declaration is now
                       in a temporal dead zone and if you try to access it you
                       will get a reference error

_let_
  * when to use:
      - when you are working in a block and you do not want variables
        to be accessible outside of that block (ie: setTimout in a loop)
  * can reassign; cannot redeclare
  * creates block scope
      - if, for, while, do, catch

_arrow functions_
  * do not have a *this* keyword
  * that means that when using *this* inside of an arrow funciton
    *this* refers to whatever the value of *this* would be
    immediately outside of that function - it's enclosing context
  * do not have the *arguments* keyword either
    - arguments can be accessed inside an arrow function IF that function
      is inside of another function but it only gives you the arguments
      of the outer function
  * do not use arrow functions when defining object methods!

_for...of loop_
  * used for iterating over arrays
  * cannot be used to iterate over objects
    - this will give a type error because we are trying to invoke
      "symbole.iterator" which does not exist on objects

_rest operator_
  * the rest operator always returns an array
  * called the rest operator ONLY when it is a parameter to a function
  * accessed without the ... inside the function
  * better alternative to using the arguments array-like object : check example
    - rest operator turns arguments into an actual array

_spread operator_
  * ... used outside of function parameters
  * takes an array and spreads each value out : check examples
  * used on arrays to spread out each value - useful when you have an array
    but what you are working with expects comma separated values (like when
    you have a function that accepts each value individually - used to be done
    with the apply method) : check examples
  
_object enhancements_
  * if object keys and values are the same name we don't have to repeat
    - ex) firstname: firstname
  * remove colon when defining object methods
    - ex) sayHi: function.... becomes sayHi() {...}
  * computed property names: can asign a value using bracket notation while
    defining the object : check examples OBJECT ENHANCEMENTS

**Destructuring: extracting values from data stored in objects and arrays**

_object destructuring_
  * reassign variables using :
    - ex) { firstname:first } = mentor; (check examples)

_array destructuring_
  * check examples
  * swapping values - when you don't want to make a new array but do want to swap
    the places of values
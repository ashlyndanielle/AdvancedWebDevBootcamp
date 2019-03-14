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
    - arguments can be access inside an arrow function IF that function
      is inside of another function but it only gives you the arguments
      of the outer function
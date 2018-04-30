* *let* and *const*
* template strings
* arrow functions
* object enhancements
* default parameters
* rest and spread operators
* object destructuring


***ES 2015***
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
  * not able to change the value of a primative:
      - strings
      - numbers
      - booleans
      - null
      - undefined
      - symbol
  * does not work the same on objects and array's

_let_
  * can reassign; cannot redeclare
  * creates block scope
      - if, for, while, do, catch
  * do not behave the same inside of functions as the *var* keyword does
      - let does hoist but we can't access the value
      - it is in a TDZ ( temporal dead zone )
      - instead of getting "undefined" you get a ReferenceError

_arrow functions_
  * do not have a keyword *this*
  * that means that when using *this* inside of an arrow funciton
    *this* refers to whatever the value of *this* would be
    immediately outside of that function
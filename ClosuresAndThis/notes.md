*** CLOSURES ***
  - a closure is a function that makes use of variables
    defined in an outer function that has returned
  - a function is not a closure just because it is a function
    inside of another function; the inner function must make
    use of external variables otherwise it is just a nested
    function
  - we need to return the inner function for this to work
    and invoke it
  - we can either call the inner function right away by using
    and extra () or we can store the result of the function
    in a variable

  *private variable* can only be access from a certain scope
  and can't be modified from an external scope


*** THIS ***
  - determined by how the function is called ( execution context )
  - can be determined using four rules:
      1. global
      2. object/implicit
      3. explicit
      4. new

  1. GLOBAL CONTEXT
    - when *this* is not inside of a declared object
    - there hasn't been an object literal defined that contains
      a function that uses keyword *this*
    - value refers to the global object ( window in the browser )
      console.log(this) // window

  2. OBJECT/IMPLICIT
    - the value of *this* will always be the *closest* parent
      object when used inside of a declared object
    - *this* is defined when a function is run ( this is why you use
      the constructor functions! )
  3. EXPLICIT: CALL/APPLY/BIND
    - 
*** OBJECT ORIENTED PROGRAMMING ***
  *object oriented programming is a model based on objects constructed from a blueprint*
  *we write OOP to write more modular and sharable code*
  - a programming model based around the idea of objects
  - these objects are constructed from what are called
    "*classes*", which we can think of like a blueprint.  We
    call these objects created from classes "*instances*"
  - we strive to make our classes abstract and modular
  - *javascript does not have built in support for classes*
    - we must use functions and objects instead
  - we can avoid duplication in multiple constructor functions by
    using call or apply

  *Constructor Functions*
  - capitalize the function name
  - *this* is utilized
  - purpose is to construct objects
  - must use the *new* keyword

  *The new keyword*
  1. creates an empty object
  2. sets the keyword *this* to be that empty object
  3. adds the line "return this;" to the end of the function
  4. adds a property onto the empty object called __proto__
     ( "dunder proto" ) which links the prototype property on
     the constructor function to the empty object
  * reworded: creates a link ( which we can access as __proto__ )
    between the object created and the prototype property of the 
    constructor function

***Prototypes***
  - every constructor function has a property on it called
    .prototype which is an object
  - that object has a property on it called .constructor which
    points back to the constructor function
  - any property added to the prototype object is accessible
    via the constructor function and any object created with that
    constructor function
  - objects created by the constructor get access to the to the
    prototype object through the link .__proto__

***prototype chain***
  - this is how javascript finds methods and properties
  - if it can't find something on your "object" it looks at
    __proto__
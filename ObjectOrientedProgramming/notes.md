*** OBJECT ORIENTED PROGRAMMING ***
  - a programming model based around the idea of objects
  - these objects are constructed from what are called
    "classes", which we can think of like a blueprint.  We
    call these objects created from classes "instances"
  - we strive to make our classes abstract and modular
  - *javascript does not have built in support for classes*
    - we must use functions and objects instead

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
__OBJECTIVES__
* Refactor object oriented code to use the clase, extends and super keywords
* Understand how to use new data structures in ES2015
* Refactor asynchronous code using the native Promise constructor and create
  functions that can pause and resume execution with generators
* Learn new methods for copying objects, converting array-like-objects into
  arrays and handling issues with NaN
* examine two new features to ES2016
* Use new string methods and refactor code using ES2017 async functions
* Introduce the spread and rest operator for objects


**PART ONE**
*CLASSES*
  * provided by ES2015
  * creates a constant - cannot be redeclared
  * an abstraction of constructor functions and prototypes
  * the class keyword does NOT hoist
  * still use new keyword to create objects
  * when we create or invoke an object from a class we call it instantiation
    or creating an instance
  * if you try to create an object from a class without the new keyword
    you will get a type error
  * methods that can be used by every object that is created from the class are
    called *instance methods*
    - placed inside the class keyword, outside of constructor
    - if we placed them inside the construtor they would be redefined each
      time we create a new instance
    - no function keword used
    - under the hood it is placing methods on the prototype object
  * *class methods* are called *statics* and make use of the static keyword
    - placed directly on the constructor function behind the scenes but still
      written outside of constructor using *static*
    - invoked directly on the class (check examples ~lines 37-62)
    - when are these useful?
      * sometimes we don't want every object created from a class to have it's
        own method, specifically when we want to use the method without creating
        objects from that class


*INHERITANCE* passing along methods and properties from one class to another
  * use the *extends* keword
    - if one class extends another it will have all the methods that that class
      which it extends from has


*SUPER* invokes a method of the same name found in the parent class
  * allows us to utilize already defined 'this' methods in the constructor without
    redeclaring them
    - ex) this.firstName = firstName
**PART ONE**


**PART TWO**
*MAPS*
  * also called "hash maps" or "hash" in other languages
  * similar to objects except that the keys can be ANY data type, not just a string
  *

**PART TWO**
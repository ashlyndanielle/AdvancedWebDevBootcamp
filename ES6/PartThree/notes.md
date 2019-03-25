<!-- SECTION 18: ES2016 and ES2017 -->
__OBJECTIVES__
* examine two new features in ES2016
* use new string methods in ES2017
* understand how to refactor asynchronous code using async functions
* use the spread and rest operator for objects


*Async Functions*
  * created using the word async
  * purpose is to simply writing asynchronous code
  * *await*
    - a reserved keyword that can only be used inside async functions
    - pauses the execution of the async function, is followed by a
      promise and waits for it to resolve, then resumes the function's
      execution and returns the resolved value
    - removes the need for nested callbacks, promise chains, generators, etc
  * what happens if the promise is rejected?
    - javascript will throw an error so we can use a try/catch statement

*Object Rest and Spread*
  * REST
    - gathers remaining keys and values in an object and creates a new one
  * SPREAD
    - spreads out keys and values from one object to another
    - more concise alternative to Object.assign
    - great for creating objects with default values
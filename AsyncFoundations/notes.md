*** CALLBACKS ***

*What are they used for?*
  advanced array methods
  browser events
  AJAX requests
  React development

*findIndex*
  Returns the index of the first element in the array for which
  the callback returns a truthy value.  Returns -1 if the callback
  never returns a truthy value
  function findIndex(array, callback) {}
  function callback(currElement, currIndex, array) {}
  make sure to *return* something in your callback

*setTimeout(callback, delay) {};*
*clearTimeout(timeoutFunction);*
  this will reset the setTimeout function you pass in
*setInterval*
  takes in a callback and an integer for a delay
  different from setTimeout in that it will continuously run


*** PROMISES ***

*promise*:
  an object that represents a task that will be completed in the future
  it's not your solution but it will be in the future
  *analogy*
    taking a number at a government office before you can get helped
    the piece of paper you get is like your promise
    the help you get at the counter is like the invocation of your callback

*promise chaining and nested callbacks*
  resolve the nested callbacks issue with chaining promises
  ( example in the examples.js file )
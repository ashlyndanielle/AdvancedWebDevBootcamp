*** closures ***
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
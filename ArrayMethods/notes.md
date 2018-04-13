*********** !!!ALWAYS REMEMBER TO RETURN!!! ***********

*** forEach ***
  1. loops through the array and runs a callback function on 
     each element in the array
  2. forEach ALWAYS returns undefined
  3. callback can accept three parameters:
      - value: each value in the array
      - index: each index in the array
      - array: the entire array

*** map ***
  1. creates a new array
  2. runs callback on each value and pushes the *returned*
     result in the new array
  3. returns the new array

*** filter ***
  1. result of the callback function must result in a boolean
  2. creates a new array
  3. if the callback function returns true, that value will
     be added to the new array; if it returns false it will
     be ignored

*** some ***
  1. runs a callback on each value in an array
  2. returns true if the callback returns true on at least
     one of the values in the array; otherwise returns false

*** every ***
  1. just like some but only returns true if *every* value
     returns true in the callback function

*** reduce ***
  1. accepts a callback and an optional second parameter
  2. runs the callback on each value in the array
  3. the first parameter to the callback is either the first
     value in the array or the optional second parameter
  4. the first parameter is often called the 'accumulator'
  5. the returned value from the callback becomes the new
     accumulator
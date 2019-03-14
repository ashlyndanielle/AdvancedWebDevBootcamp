/******* FOREACH *******/

var arr = [1, 2, 3];

arr.forEach((val, index, array) => {
  console.log(val);
})

// 1, 2, 3, undefined
// forEach will ALWAYS return undefined!!

// function forEach(array, callback) {
//   for ( let x = 0; x < array.length; x++ ) {
//     callback(array[x], x, array);
//   }
// }

function halfValues(arr) {
  const newArray = [];
  arr.forEach(val => {
    newArray.push(val / 2);
  })
  console.log(newArray);
  return newArray;
}

halfValues([8, 16, 24]);

function doubleValues(arr) {
  var newArray = [];
  arr.forEach(num => {
    newArray.push(num * 2);
  })
  console.log(newArray);
  return newArray;
}

doubleValues([1, 2, 3, 4, 5]);



/******* FILTER *******/

const instructors = [{
    name: 'Ellie'
  },
  {
    name: 'Tim'
  },
  {
    name: 'Matt'
  },
  {
    name: 'Colt'
  }
]

const modified = instructors.filter((val, index, arr) => {
  console.log(val.name.length > 3)
  return val.name.length > 3;
})

instructors;
modified;

/******* SOME *******/

const someResult = arr.some((value, index, array) => {
  return value < 2;
})

someResult;

function hasEvenNumber(arr) {
  return arr.some(val => {
    return val % 2 === 0;
  });
}

console.log(hasEvenNumber([1, 3, 5]))
console.log(hasEvenNumber([1, 3, 5, 6]));

/******* EVERY *******/

const everyResult = arr.every(val => {
  return val < 5;
})

const anotherEveryResult = arr.every(val => {
  return val === 1;
})

everyResult;
anotherEveryResult;

// check if each value is an array

function allArrays(arr) {
  return arr.every(Array.isArray);
}

console.log(allArrays([
  [1],
  [1, 2, 3],
  ['one', 'two', 'three']
]))
console.log(allArrays([
  [1],
  ['two'], {
    three: 'four'
  }
]))

// check if a number has a 0 in it

function hasAZero(num) {
  return num.toString().split('').some(val => val === '0');
}

function hasNoDuplicates(arr) {
  // check to see if the index of the value
  // is equal to the LAST index of that value
  return arr.every(val => {
    return arr.indexOf(val) === arr.lastIndexOf(val);
  })
}
const sameArr = [1, 2, 4, 6, 3, 6, 7];
const diffArr = [3, 4, 5, 6, 7, 8, 9];
console.log(hasNoDuplicates(sameArr));
console.log(hasNoDuplicates(diffArr));

/******* FILTER *******/

/*
  structure:
  array.reduce( callback, optionalSecondParameter )
  callback(accumulator, nextValue, index, array)
  accumulator: first value in array or optionalSecondParameter
  nextValue: second value in the array or first if 
            optionalSecondParameter is passed in
*/

const simpleArr = [1, 2, 3, 4, 5];

const reducedArr = simpleArr.reduce((accumulator, nextValue) => {
  console.log('next: ', nextValue, 'return: ', accumulator + nextValue)
  return accumulator + nextValue;
})

simpleArr;
reducedArr;

const names = ['Ashlyn', 'Brandon', 'Gus', 'Y-utt'];

const sentence = names.reduce((accumulator, nextValue) => {
  return `${accumulator} ${nextValue}`;
}, 'The super awesome coders are ')

sentence;

// build an object with the key as each number and the value as the
// number of times that number is in the array

const arrForObject = [5, 4, 1, 4, 5];

const myObj = arrForObject.reduce((accumulator, nextValue) => {
  // if in checks to see if that key is in that object
  if (nextValue in accumulator) {
    // if it is, add one to that key's value
    accumulator[nextValue]++;
  } else {
    // if it's not, set that number as the key and set it's value to one
    accumulator[nextValue] = 1;
  }
  console.log(accumulator)
  return accumulator;
}, {})

// this is an efficient way to check for duplicates or
// to count how many times each value appears

myObj;

// count how many of each vowel are in a string
function vowelCount(str) {
  const vowels = 'aeiou';
  return str.split('').reduce((acc, next) => {
    if (vowels.indexOf(next.toLowerCase()) !== -1) {
      if (next in acc) {
        acc[next]++;
      } else {
        acc[next] = 1;
      }
    }
    return acc;
  }, {})
}

const counted = vowelCount('Hey will you count how many of each vowel is in this string?');
counted;


// add a key and value pair to an array of objects
const keyValueArr = [{
  name: 'Ashlyn'
}, {
  name: 'Gus'
}, {
  name: 'Elizabeth'
}];

function addKeyAndValue(arr, key, val) {
  return arr.reduce((acc, next, index) => {
    acc[index][key] = val;
    return acc;
  }, arr)
}

const newKeysAndValues = addKeyAndValue(keyValueArr, 'title', 'developer');
newKeysAndValues;



// write a function that will sort out an array into two different
// arrays depending on whether they evalute to true or false

function partitioner(arr, callback) {
  return arr.reduce((acc, next) => {
    console.log(callback(next));
    if (callback(next)) {
      acc[0].push(next);
    } else {
      acc[1].push(next);
    }
    return acc;
  }, [
    [],
    []
  ])
}

function isEven(num) {
  return num % 2 === 0;
}

const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const split = partitioner(numberArray, isEven);
split;





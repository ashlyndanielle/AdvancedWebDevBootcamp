// canceling a setInterval
var num = 0;
var intervalId = setInterval( () => {
  num++;
  console.log("num:", num);
  if (num === 3) {
    clearInterval(intervalId);
  }
}, 1000);

// countdown
function countdown(seconds) {
  var intervalId = setInterval( () => {
    seconds--;
    if (seconds > 0) {
      console.log('Timer: ', seconds);
    } else {
      console.log('Ring Ring Ring!!!');
      clearInterval(intervalId);
    }
  }, 1000)
}

/******* PROMISES *******/

// if the async task is successful, resolve will be invoked, if not reject will be invoked
var p1 = new Promise( (resolve, reject) => {
  resolve([1,2,3,4]);
});

// with .then() we are defining a callback that will be invoked when resolve is invoked in the promise
// whatever is passed into resolve above will be passed into our callback function below
p1.then( arr => {
  console.log('Promise p1 resolved with data: ', arr);
})



// handling errors

var p2 = new Promise( (resolve, reject) => {
  reject("ERROR");
});

// when reject is invoked in the callback, none of the .then()'s will be invoked
p2.then( data => {
  console.log("Promise p2 resolved with data:", data);
}).catch( data => {
  console.log("Promise p2 was rejected with data:", data);
});


// another example combining resolve and reject

var p3 = new Promise( (resolve, reject) => {
  let num = Math.random();
  if (num < 0.5) {
    resolve(num);
  } else {
    reject(num);
  }
});

p3.then( result => {
  console.log("Success:", result);
}).catch( error => {
  console.log("Error:", error);
});



// example using async code

var promise = new Promise( (resolve, reject) => {
  setTimeout( () => {
    var randomInt = Math.floor(Math.random() * 10);
    resolve(randomInt);
  }, 4000);
});

promise.then( data => {
  console.log("random int passed to resolve:", data);
});



// promise chaining

var chainedPromise = new Promise( (resolve, reject) => {
  setTimeout( () => {
    randomInt = Math.floor(Math.random()*10);
    resolve(randomInt);
  }, 500);
});

chainedPromise.then( data => {
  console.log("Random int passed to resolve:", data);
  return new Promise( (resolve, reject) => {
    setTimeout( () => {
      resolve(Math.floor(Math.random()*10));
    }, 3000);
  });
}).then( data => {
  console.log("second random int passed to resolve:", data);
});


// simplifying nested callbacks using chained promises

var counter = 0;
function incCounter() {
  counter++;
  console.log("Counter: ", counter);
}

function runLater(callback, timeInMs) {
  var p = new Promise( (resolve, reject) => {
    setTimeout( () => {
      var res = callback();
      resolve(res);
    }, timeInMs);
  });
  return p;
}

runLater(incCounter, 1000).then( () => {
  return runLater(incCounter, 2000);
}).then( () => {
  return runLater(incCounter, 3000);
}).then( () => {
  console.log('I am finished with my promise chaining!');
})
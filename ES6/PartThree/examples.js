/******************/
/***** ES2016 *****/
/******************/

// exponentiation operator **
var calculatedExponent = 4**4; // 256

var nums = [1,2,3,4];
var total = 2;
for (let i = 0; i < nums.length; i++) {
  total **= nums[i];
}
console.log(total)


// [].includes
nums.includes(3); // true
nums.includes(50); // false


/******************/
/***** ES2017 *****/
/******************/

// padStart
// first parameter is length of the new string
// second parameter is what to pad the start with
var padThisString = 'Awesome!';
var paddedStart = padThisString.padStart(12, '!')
var paddedEnd = padThisString.padEnd(10, '$');
padThisString; // 'Awesome!'
paddedStart; // '!!!!Awesome!'
paddedEnd; // 'Awesome!$$'


/***************************/
/***** ASYNC FUNCTIONS *****/
/***************************/

async function first() {
  return 'We did it';
}
first(); // returns a promise
console.log(first())

first().then(val => console.log(val)); // 'We did it'

async function getMovieData() {
  console.log('starting');
  var movieData = await $.getJSON('https://omdbapi.com?t=titanic&apikey=thewdb');
  // this line does not run until the promise is resolved
  console.log('all done!');
  console.log(movieData);
}

// object async
var movieCollector = {
  data: 'titanic',
  async getMovieData() {
    var response = await $.getJSON(`https://omdbapi.com?t=${this.data}&apikey=thewdb`);
    console.log(response);
  }
}

// class async
class MovieData {
  constructor(name) {
    this.name = name;
  }
  async getMovie(){
    var response = await $.getJSON(`https://omdbapi.com?t=${this.name}&apikey=thewdb`);
    console.log(response);
  }
}

var shrek = new MovieData('shrek');

// handling errors
async function getUser(user) {
  try {
    var response = await $.getJSON(`https://api.github.com/users/${user}`);
    console.log(response.name);
  } catch(e) {
    console.log("user does not exist")
  }
}

// refactoring - if you start the http request in the await, they will fire one at a time
// so you need to fire off the requests first, then await the promise
async function parallelRequests() {
  // start requests right away
  var titanicPromise = $.getJSON('https://omdbapi.com?t=titanic&apikey=thewdb'); 
  var shrekPromise = $.getJSON('https://omdbapi.com?t=shrek&apikey=thewdb'); 
  // the await the values
  var titanicData = await titanicPromise;
  var shrekData = await shrekPromise;

  console.log(titanicData);
  console.log(shrekData);
}
// this also solves the problem
async function promiseAllParallelRequests(first, second) {
  var moviesList = await Promise.all([
    $.getJSON(`https://omdbapi.com?t=${first}&apikey=thewdb`),
    $.getJSON(`https://omdbapi.com?t=${second}&apikey=thewdb`)
  ])
  console.log(moviesList[0].Year);
  console.log(moviesList[1].Year);
}


/*********************/
/***** EXERCISES *****/
/*********************/


async function hasMostFollowers(...usernames) {
  let userPromises = usernames.map(user => $.getJSON(`https://api.github.com/users/${user}`));
  let users = await Promise.all(userPromises);
  let max = users.sort((a,b) => b.followers - a.followers)[0];
  return `${max.name} has the most followers with ${max.followers}`;
}

async function starWarsString(id) {
  let character = await $.getJSON(`https://swapi.co/api/people/${id}`);
  let firstFilm = await $.getJSON(character.films[0]);
  let firstPlanet = await $.getJSON(firstFilm.planets[0]);
  return `${character.name} is featured in ${firstFilm.title}, directed by ${firstFilm.director} and it takes place on ${firstPlanet.name}.`
}



/********************************/
/***** OBJECT REST & SPREAD *****/
/********************************/


// REST
var instructor = {first:"Ashlyn", last:"Mitros", job:"instructor", numSiblings:6};
var { first, last, ...data } = instructor;
console.log(first); // Ashlyn
console.log(last); // Mitros
console.log(data); // {job: 'instructor', numSiblings: 6}

// SPREAD
var instructor2 = {...instructor, first:"Gus", last:"Nordstrom"};
console.log(instructor2); // {first:"Gus", last:"Nordstrom", job:"instructor", numSiblings:6};

var defaults = {job:'Developer', ownsCat:false, ownsDog:true};
var brandon = {...defaults, ownsCat:true};
var mike = {...defaults, ownsDog:false};
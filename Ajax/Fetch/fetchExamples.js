/**** SYNTAX *****/

fetch(url)
  .then( res => {
    console.log(res);
  })
  .catch( err => {
    console.log(err);
  })

/*** END SYNTAX ***/

const bitcoinURL = "https://api.coindesk.com/v1/bpi/currentprice.json";

// this won't give you your data
fetch(bitcoinURL)
  .then( res => console.log(data));

// this is how to get your data;
// res.json() will return a promise
fetch(bitcoinURL)
  .then( res => {
    // you can put the .then() at the end of the return or 
    // chain it to the outside
    return res.json();
  }).then( data => {
    console.log(data);
  })


/* FETCH OPTIONS
    1. always have to provide the url first
    2. optional options object as the second parameter
        -default method is always get
        -using JSON.stringify on the body makes it so you don't have to
         follow the proper syntax
        -you can view the body of your request in the network tab when
         you click on the fetch request; it will be under the Request Payload
         dropdown of the headers tab
    3. all the fetch options are located here:
        https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch
*/



fetch(bitcoinURL, {
  method: 'POST',
  body: JSON.stringify({
    name: 'blue',
    login: 'bluecat'
  })
}).then( data => {
  // do something
}).catch( err => {
  // handle error
})

/* ERROR HANDLING
    1. .catch() will be fired if there is a problem with the request itself
        -the user's internet isn't working
        -there's problems with credentials
        -**this does not fire just because of the status of the response*
*/
const ashlynAPI = 'https://api.github.com/users/ashlyndanielle'

fetch(ashlynAPI)
.then(handleError)
.then(res => {
  console.log('EVERYTHING IS FINE');
  console.log('RESPONSE: ', res);
}).catch(err => {
  console.log('Something went wrong...');
  // err will be whatever we pass into throw Error() above
  console.log(err);
})


function handleError(res) {
  // if the status is not successful
  if (!res.ok) {
    throw Error(res.status);
  }
  // return something to pass on
  return res.json();
}
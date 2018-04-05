/**** SYNTAX *****

fetch(url)
  .then( res => {
    console.log(res);
  })
  .catch( err => {
    console.log(err);
  })

*** END SYNTAX ***/

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
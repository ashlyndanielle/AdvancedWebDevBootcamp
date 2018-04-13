const RON_API = 'https://ron-swanson-quotes.herokuapp.com/v2/quotes';

const xhrBtn = document.getElementById('xhr');
const fetchBtn = document.getElementById('fetch');
const jQueryBtn = document.getElementById('jQuery');
const axiosBtn = document.getElementById('axios');
const quote = document.getElementById('quote');

function applyQuote(data) {
  quote.innerHTML = data[0];
}
// ***** XHR ***** //

xhrBtn.addEventListener('click', XHRRon);

function XHRRon() {
  const XHR = new XMLHttpRequest();
  XHR.onreadystatechange = function() {
    if (XHR.readyState == 4 && XHR.status == 200) {
      const data = JSON.parse(XHR.responseText);
      applyQuote(data);
    }
  }
  XHR.open('GET', RON_API);
  XHR.send();
}

// ***** FETCH ***** //

fetchBtn.addEventListener('click', fetchRon)

function fetchRon() {
  fetch(RON_API)
  .then(handleErrorFetch)
  .then(applyQuote)
  .catch(err => console.log("Error: "))
}

function handleErrorFetch(res) {
  if (!res.ok) {
    throw Error(res.status)
  }
  return res.json();
}

// ***** jQUERY ***** //

$('#jQuery').click(jQueryRon);

function jQueryRon() {
  $.getJSON(RON_API)
  .done(applyQuote)
  .fail( () => console.log('Something went wrong...'))
}

// ***** AXIOS ***** //

axiosBtn.addEventListener('click', axiosRon);

function axiosRon() {
  axios.get(RON_API)
  .then( res => applyQuote(res.data) )
  .catch( handleErrorAxios )
}

function handleErrorAxios(err) {
  if(err.response) {
    console.log('error with response')
  } else if (err.status) {
    console.log('error with status')
  } else {
    console.log('something went wrong...')
  }
}
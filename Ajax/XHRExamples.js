var XHR = new XMLHttpRequest();
// onreadystatechange calls the function everytime
// the state changes
    // 0 UNSENT: client has been created; open() not called yet
    // 1 OPENED: open() has been called
    // 2 HEADERS_RECEIVED: send() has been called; headers and status available
    // 3 LOADING: downloading; responseText holds partial data
    // 4 DONE: operation complete
XHR.onreadystatechange = function() {
  // if the readyState is DONE and the request came through...
  if (XHR.readyState == 4 && XHR.status == 200) {
    console.log(XHR.responseText);
  } else if (XHR.status != 200) {
    // do something else...
    console.log('There was a problem!');
  }
};

// this states what type of request and what we are requesting
XHR.open("GET", "https://api.github.com/zen123321");
XHR.send();


// value of checked input button
// form being the form container
// name being the radio button name group
function getRadioValue(form, name) {
  let val;
  const radios = form.elements[name];
  for (let x = 0; x < radios.length; x++) {
    if ( radios[x].checked ) {
      val = radios[x].value;
      break;
    }
  }
  console.log('VALUE: ', val);
  return val;
} 
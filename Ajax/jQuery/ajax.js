// BAISIC SYNTAX FOR AJAX //
/*
$.ajax({
  method: "GET",
  url: "some.api.com"
})
.done( res => {
  console.log(res);
})
.fail( () => {
  // do something
})
*/

// AJAX EXAMPLE
$('#btn').click(() => {
  $.ajax({
    // method is get by default but it's good to be explicit
    method: "GET",
    url: "https://baconipsum.com/api/?type=meat-and-filler",
    // dataType is json by default
    dataType: 'json'
  })
  .done(addBacon)
  .fail( () => {
    // this will fire if the status failed as well
    console.log('OH NO YOU FAILED!');
  })
})

function addBacon(res) {
  $('#bacon').text(res[0]);
}

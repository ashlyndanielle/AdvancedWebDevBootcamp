// $.get EXAMPLE //
const BOOK_KEY = config.apiKey;

const githubURL = 'https://api.github.com/users/ashlyndanielle';

const bestSellers = 'https://api.nytimes.com/svc/books/v3/lists.json?' + $.param({ 
  'api-key': BOOK_KEY,
  'list': 'advice-how-to-and-miscellaneous'
})

$('#getBtn').click( () => {
  $.get(bestSellers)
  .done(listBooks)
})

function listBooks(res) {
  $('#books').show();
  res.results.map( book => {
    console.log(book.book_details[0]);
    $('#books ul').append(`<li>${book.book_details[0].title}<br><span id="author">- <em>${book.book_details[0].author}</em></span></li>`);
  })
}

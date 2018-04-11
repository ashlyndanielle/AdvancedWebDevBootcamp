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
  .fail( () => console.log('ERROR!'))
})

function listBooks(res) {
  $('#books').show();
  // only fire if the books haven't been retrieved
  if (!$('#books ul').children().length) {
    res.results.map( book => {
      console.log(book.book_details[0]);
      $('#books ul').append(`<li>${book.book_details[0].title}<br><span id="author">- <em>${book.book_details[0].author}</em></span></li>`);
    })
  }
}

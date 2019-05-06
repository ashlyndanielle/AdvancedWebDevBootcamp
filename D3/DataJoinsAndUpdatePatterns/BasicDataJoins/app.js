var quotes = [{
  quote: "I see dead people.",
  movie: "The Sixth Sense",
  year: 1999,
  rating: "PG-13"
}, {
  quote: "May the force be with you.",
  movie: "Star Wars: Episode IV - A New Hope",
  year: 1977,
  rating: "PG"
}, {
  quote: "You've got to ask yourself one question: 'Do I feel lucky?' Well, do ya, punk?",
  movie: "Dirty Harry",
  year: 1971,
  rating: "R"
}, {
  quote: "You had me at 'hello.'",
  movie: "Jerry Maguire",
  year: 1996,
  rating: "R"
}, {
  quote: "Just keep swimming. Just keep swimming. Swimming, swimming, swiming.",
  movie: "Finding Nemo",
  year: 2003,
  rating: "G"
}];

var newQuotes = [{
  quote: "Houston, we have a problem.",
  movie: "Apollo 13",
  year: 1995,
  rating: "PG-13"
}, {
  quote: "Gentlemen, you can't fight in here! This is the war room!",
  movie: "Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb",
  year: 1964,
  rating: "PG"
}];

var colors = {
  "G": '#3cff00',
  "PG": '#f9ff00',
  "PG-13": '#ff9000',
  "R": '#ff0000'
};


appendQuotes('#quotes', 'li', quotes);
// d3.select('#quotes')
//   .style('list-style', 'none')
//   // even though these aren't on the page yet, D3 still creates a selection

//   .selectAll('li')
//   .data(quotes)
//   // creates a d3 selection of the "enter" nodes with attached data
//   .enter()
//   .append('li')
//     .html((d, idx) => `<strong>${d.movie} (${d.year}):</strong> ${d.quote}`)
//     .style('margin', '20px')
//     .style('padding', '20px')
//     .style('font-size', d => d.quote.length < 25 ? '2em' : '1em')
//     .style('background-color', d => colors[d.rating])
//     .style('border-radius', '8px');

// once these are in the dom, they are still bound to their data
// this means we can select them later on and utilize the data attached
// for example:

// d3.selectAll('li')
//     .text(d => d.rating)

// quotes.pop();
// d3.selectAll('li')
//   .data(quotes)

var noRQuotes = quotes.filter(quote => quote.rating !== 'R');

// d3.selectAll('li')
//   // usage of key function to specify how data is joined
//   .data(noRQuotes, d => d.quote)
//   .exit()
//   .remove()


var removeBtn = d3.select("#remove");
var addBtn = d3.select("#add");

removeBtn.on('click', () => {
  d3.selectAll("li")
    .data(noRQuotes, d => d.quote)
    .exit()
    .remove();
  removeBtn.remove();
});

addBtn.on('click', () => {
  quotes = quotes.concat(newQuotes)
  appendQuotes('#quotes', 'li', quotes);
  addBtn.remove();
})

function appendQuotes(container, selection, data) {
  d3.select(container)
      .style('list-style', 'none')

  d3.select(container)
    .selectAll(selection).data(data)
  // creates a d3 selection of the "enter" nodes with attached data
    .enter()
    .append('li')
      .html((d, idx) => `<strong>${d.movie} (${d.year}):</strong> ${d.quote}`)
      .style('margin', '20px')
      .style('padding', '20px')
      .style('font-size', d => d.quote.length < 25 ? '2em' : '1em')
      .style('background-color', d => colors[d.rating])
      .style('border-radius', '8px')
}
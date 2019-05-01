d3.select("#new-note").on('submit', createTodo);
d3.selectAll('p').on('click', removeTodo);
d3.select('.remove').on('click', removeAllTodos);
d3.select('.lucky').on('click', feelingLucky);
d3.select('input').on('input', displayPreview);

function createTodo () {
	d3.event.preventDefault();
	var input = d3.select('input');
	if (input.property('value')) {
		d3.select("#notes")
			.append('p')
			.classed('note', true)
			.text(input.property('value'))
			.on('click', removeTodo)
		input.property('value', '');
		d3.select('.preview')
			.classed('hide', true);
	}
}

function removeTodo() {
	d3.event.target.remove();
}

function removeAllTodos() {
	d3.selectAll('p').remove();
}

function feelingLucky() {
	d3.selectAll('p')
		.style('border-color', (_, idx) => {
			return `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`
		})
}

function displayPreview() {
	let inputText = d3.select('input').property('value');
	if (inputText) {
		d3.select('.preview')
			.classed('hide', false)
			.text(inputText)
	} else {
		d3.select('.preview')
			.classed('hide', true);
	}
}
const input = d3.select('input');
const countButton = d3.select('button[type="submit"');
const reset = d3.select('#reset');

countButton.on('click', updateCharacterData);
reset.on('click', resetAnalysis)

function updateCharacterData() {
	d3.event.preventDefault();
	let inputValue = input.property('value');
	if (inputValue) {
		// update
		let letters = d3.select('#letters')
			.selectAll('div')
			.data(countFrequencies(inputValue), d => d.letter)
		letters
			.classed('new', false)
			// exit
			.exit()
			.remove()
		// enter
		letters
			.enter()
			.append('div')
			.classed('letter', true)
			.classed('new', true)
			// merge
			.merge(letters)
			.text(d => d.letter)
			.style('padding-top', d => `${d.count-1}em`)

		d3.select('#phrase')
			.text(`Analysis of: ${inputValue}`)
		d3.select('#count')
			.text(`(New Characters: ${letters.enter().nodes().length})`)
		input.property('value', '');
	}
}

function resetAnalysis() {
	d3.selectAll('.letter')
		.remove()
	d3.select('#phrase')
			.text('');
	d3.select('#count')
			.text('');
}

function countFrequencies(input) {
	// count characters
	let charCount = input.match(/[a-zA-Z]/g).sort().reduce((acc, next) => {
		acc[next] ? acc[next]++ : acc[next] = 1;
		return acc;
	}, {});

	// create usable data
	let data = [];
	for (let key in charCount) {
		data.push({
			'letter': key,
			'count': charCount[key]
		})
	}
	return data;
}
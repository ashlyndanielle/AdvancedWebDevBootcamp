const input = d3.select('input');
const countButton = d3.select('button[type="submit"');
const reset = d3.select('#reset');

let previousChars = [];
let currentChars = [];

countButton.on('click', updateCharacterData);

reset.on('click', () => {
	d3.event.preventDefault();
	previousChars = [];
	currentChars = [];
	console.log(previousChars);
	console.log(currentChars);
})

input.on('input', () => {
	console.log('working')
})

function updateCharacterData() {
	d3.event.preventDefault();
	let inputValue = input.property('value');
	if (inputValue) {
		// count characters
		let newChars = inputValue.match(/[a-zA-Z]/g).reduce((acc, next) => {
			acc[next] ? acc[next]++ : acc[next] = 1;
			return acc;
		}, {});
		let charObject = [];
		// create usable data
		for (let key in newChars) {
			charObject.push({'letter': key, 'count': newChars[key]})
		}
		console.table(charObject)
		// update data catagories
		if (currentChars) {
			previousChars = currentChars;
			currentChars = charObject;
		} else {
			currentChars = charObject;
		}
	}

	input.property('value', '');

	// update
	// d3.select('#letters')
	// 	.selectAll('div')
	// 	.data(currentChars)
	// exit
	// enter
	d3.select('#letters')
		.selectAll('div')
		.data(currentChars, d => d.letter)
		.enter()
		.append('div')
			.text(d => d.letter)
			.classed('letter new', true)
	// merge
}
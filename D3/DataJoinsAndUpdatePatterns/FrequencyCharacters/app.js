const input = d3.select('input');
const countButton = d3.select('button[type="submit"');
const reset = d3.select('#reset');

let previousChars;
let currentChars;

countButton.on('click', updateCharacterData);

reset.on('click', () => {
	d3.event.preventDefault();
	previousChars = {};
	currentChars = {};
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
		let newChars = inputValue.match(/\S/g).reduce((acc, next) => {
			acc[next] ? acc[next]++ : acc[next] = 1;
			return acc;
		}, {});
		// update data catagories
		if (currentChars) {
			previousChars = currentChars;
			currentChars = newChars;
		} else {
			currentChars = newChars;
		}
	}
	console.log(previousChars);
	console.log(currentChars);
	input.property('value', '');

	// update
	d3.select('#letters')
		.selectAll('.letter')
	// exit
	// enter
	d3.select('#letters')
		.selectAll('.letter')
		.enter()
		.append('div.letter')
			.text(d => d)
	// merge
}
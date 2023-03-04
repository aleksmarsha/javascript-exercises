const fibonacci = function(bona) {
	const numbers = {};
	let firstIndex = 1;
	let secondIndex = 1;
	numbers[1] = firstIndex;
	numbers[2] = secondIndex;
	for (let i = 3; i < 37; i++) {
		firstIndex += secondIndex;
        secondIndex = firstIndex - secondIndex;
        numbers[i] = firstIndex;
	}
	if(parseInt(bona) <= 0) {
		return 'OOPS';
	} else {
		return numbers[bona];
	}
};

// Do not edit below this line
module.exports = fibonacci;

const palindromes = function (miss) {
	const first = Array.from(miss);
	let alma = [];
	let telhma = [];
	first.forEach(ltr => {
		if (ltr.toLowerCase() !== ltr.toUpperCase()) {
			alma.push(ltr.toLowerCase());
			telhma.unshift(ltr.toLowerCase());
		}
	});
	if (alma.toString() === telhma.toString()) {
		return true;
	} else {
		return false;
	}
};

// Do not edit below this line
module.exports = palindromes;

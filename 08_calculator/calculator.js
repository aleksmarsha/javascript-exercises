const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(stripes) {
	let all = 0;
	stripes.forEach(str => {
		all += str;
	});
	return all;
};

const multiply = function(stripel) {
	let own = 1;
	stripel.forEach(str => {
		own *= str;
	});
	return own;
};

const power = function(a, b) {
	return Math.pow(a, b);
};

const factorial = function(madam) {
	let fact = 1;
	if (madam === 0 || madam === 1) {
		return 1;
	} else {
		for (let i = 1; i <= madam; i++) {
			fact *= i;
		}
	}
	return fact;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

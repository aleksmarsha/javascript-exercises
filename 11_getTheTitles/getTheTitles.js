const getTheTitles = function(obj) {
	let titles = [];
	obj.filter(c => {
		titles.push(c.title);
	});
	return titles;
};

// Do not edit below this line
module.exports = getTheTitles;

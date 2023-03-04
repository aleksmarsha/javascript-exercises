const findTheOldest = function(arrayx) {
	arrayx.sort((one, two ) => {
		if(one.yearOfDeath && two.yearOfDeath){
		const firstPerson = one.yearOfDeath - one.yearOfBirth;
		const secondPerson = two.yearOfDeath - two.yearOfBirth;
		return secondPerson - firstPerson;
		} else {
			let personOne;
			let personTwo;
			let full = new Date();
			if(!one.yearOfDeath) {
				personOne = full.getFullYear() - one.yearOfBirth;
				personTwo = two.yearOfDeath - two.yearOfBirth; 
			} else {
				personOne = one.yearOfDeath - one.yearOfBirth;
				personTwo = full.getFullYear() - two.yearOfBirth;
			}
			return personTwo - personOne;
		}
	});
	return arrayx[0];
};

// Do not edit below this line
module.exports = findTheOldest;

const repeatString = function(string, number) {
    let sumOfString = '';
    if (number < 0) {
        return 'ERROR';
    } else if (number === 0 || string === '') {
        return sumOfString;
    } else {
        for (let i = 0; i < number; i++) {
            sumOfString += string;
        }
        return sumOfString;
    }
};

// Do not edit below this line
module.exports = repeatString;

const reverseString = function(string) {
    let completeString = '';
    let lengthString = string.length;
    for (let i = 1; i <= lengthString; i++) {
        completeString += string.charAt(lengthString - i);
    }
    return completeString;
};

// Do not edit below this line
module.exports = reverseString;

const sumAll = function(firstNumber, secondNumber) {
    let result = 0;
    let big;
    let i;
    if ((typeof firstNumber === typeof secondNumber) && (firstNumber >= 0 && secondNumber >= 0)) {
        if (firstNumber > secondNumber) {
            big = firstNumber;
            i = secondNumber;
        } else {
            big = secondNumber;
            i = firstNumber;
        }

        for (; i <= big; i++) {
            result += i;
        }

        return result;
    } else {
        return `ERROR`;
    }
};

// Do not edit below this line
module.exports = sumAll;

const removeFromArray = function(mainArray, ...notNeedInArray) {
    for (let needless of notNeedInArray) {
            if (mainArray.includes(needless)) {
                let x = mainArray.indexOf(needless);
                mainArray.splice(x, 1);
            }
    }
    return mainArray;
};

// Do not edit below this line
module.exports = removeFromArray;

const sumAll = function (firstNumber, secondNumber) {
    let smallNumber
    let largeNumber

    if (firstNumber < 0 || secondNumber < 0) {
        return 'ERROR'
    } else if (typeof(firstNumber) != "number"|| typeof(secondNumber) != "number") { return 'ERROR' } else if (firstNumber > secondNumber) {
        smallNumber = secondNumber
        largeNumber = firstNumber
    } else {
        smallNumber = firstNumber
        largeNumber = secondNumber
    }

    let loopIndex
    let sum = parseInt(smallNumber)


    for (let i = smallNumber; i < largeNumber; i++) {
        sum = sum + (i + 1)

    }
    return sum
};

// Do not edit below this line
module.exports = sumAll;

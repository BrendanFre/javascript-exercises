const reverseString = function(string) {
    let reversedString = ""
    const stringLength = string.length
    for(let i = 1; i <= stringLength; i++){
        reversedString += string.substr(-i, 1)
    }
    return reversedString
};

// Do not edit below this line
module.exports = reverseString;

const palindromes = function (string) {
    newArray = string.split("");
    reversedArray = newArray.sort(()=>{return -1})
    newArray = string.split("");
    isTheSame = newArray.every((element, index) => element == reversedArray[index]);
    return isTheSame

};


//newArray == reversedArray ? true : false;

// Do not edit below this line
module.exports = palindromes;

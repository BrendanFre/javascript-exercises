const repeatString = function(string, timesRepeated) {
    let repeatedString = ""
    if(timesRepeated < 0){
        return 'ERROR'
    }
    for(let i = 0; i < timesRepeated; i++){
        repeatedString += string
    }
    return repeatedString
};

// Do not edit below this line
module.exports = repeatString;

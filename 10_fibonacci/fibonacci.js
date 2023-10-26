const fibonacci = function(number) {
    if(number < 0){
        return "OOPS"
    }
    let nextTerm = 0
    let n1 = 1
    let n2 = 0
    for(let i = 1; i <= number; i++){
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
        

    } return nextTerm
};

// Do not edit below this line
module.exports = fibonacci;

const findTheOldest = function(array) {
    const sortedList = array.sort((previousPerson, currentPerson)=>{
        let previousAge = previousPerson.yearOfDeath - previousPerson.yearOfBirth
        let currentAge = currentPerson.yearOfDeath - currentPerson.yearOfBirth

        if(previousAge > currentAge){
            return -1
        } else{
            return 1
        }
        
    })
    // return sortedList[0]
    const oldestAlive = sortedList.filter((person)=>{
        if(person.hasOwnProperty('yearOfDeath')){
            return false
        }
        else {return true}
    }
    )
    return oldestAlive[0]
    };

// Do not edit below this line
module.exports = findTheOldest;

const getTheTitles = function(array) {
    let titleList = []
    array.forEach(element => {
        titleList.push(element.title)
    });

    return titleList

    };

// Do not edit below this line
module.exports = getTheTitles;

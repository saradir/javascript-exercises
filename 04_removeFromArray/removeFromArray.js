const removeFromArray = function(array, ...remValues) {

    const newArray = array.filter(arg => !(remValues.includes(arg)));
    console.log(newArray);
    console.log(remValues);
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;

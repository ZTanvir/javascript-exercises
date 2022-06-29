const removeFromArray = function (myArray, ...items) {
    // Declare an empty array
    let cleanArray = [];
    for (let i = 0; i < myArray.length; i++) {
        cleanArray.push(myArray[i]);
    }
    // 	Get the clean array item
    for (let i = 0; i < cleanArray.length; i++) {
        // match with item array
        for (let number of items) {
            //if index = 0 remove with shift
            // console.log("main-array", cleanArray[i]);
            // console.log("check item", number);
            if (cleanArray[i] === number){ 
                //else if index >0 remove with splice
                if (i == 0) {
                    cleanArray.shift(number);
                } else if (i > 0) {
                    cleanArray.splice(i, 1);
                }
            }
            // console.log("done:", myArray);
        }
    }
    return cleanArray;
};

// Do not edit below this line
module.exports = removeFromArray;

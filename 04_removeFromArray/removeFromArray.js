const removeFromArray = function (myArray, item) {
    // Create an empty array
    let myArrayWithoutItem = [];
    // Select all item from myArray
    for (let i = 0; i < myArray.length; i++) {
        // if a item is similar to the item user want to remove
        // That item will not keep in myArrayWithoutItem array
        if (myArray[i] != item) {
            myArrayWithoutItem.push(myArray[i]);
        }
    }
    return myArrayWithoutItem
};

// Do not edit below this line
module.exports = removeFromArray;

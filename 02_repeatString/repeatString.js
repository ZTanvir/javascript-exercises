const repeatString = function (word, times) {
    // Concatenate word number of times
    if (times < 0) {
        return "ERROR";
    } else {
        let singleWord = "";

        for (let i = 0; i < times; i++) {
            singleWord += word;
        }
        return singleWord;
    }
};

// Do not edit below this line
module.exports = repeatString;

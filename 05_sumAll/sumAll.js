const sumAll = function (start, end) {
    let sum = 0;
    let message = "";
    if (start < 0 || typeof end !== "number") {
        message += "ERROR";
        return message;
    } else if (start > end) {
        for (let i = end; i <= start; i++) {
            sum += i;
        }
        return sum;
    } else {
        for (let i = start; i <= end; i++) {
            sum += i;
        }
        return sum;
    }
};



// Do not edit below this line
module.exports = sumAll;

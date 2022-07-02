const getTheTitles = function (arrayObj) {
    let bookTitle = [];

    for (let bookItem of arrayObj) {
        bookTitle.push(bookItem.title);
    }
    return bookTitle
};

// Do not edit below this line
module.exports = getTheTitles;

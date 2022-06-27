const reverseString = function(sentence) {
    //reverse sentence 
    let reverseSentence = ""
    for (let i = sentence.length - 1 ; i >= 0; i--){
        reverseSentence += sentence[i]
    }
    return reverseSentence
};

// Do not edit below this line
module.exports = reverseString;

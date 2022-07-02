const palindromes = function (fullSentence) {
    let sentence = "";
    // Remove all !,.,, from the word/sentence
    for (let i = 0; i < fullSentence.length; i++) {
        if (
            fullSentence[i] != "!" &&
            fullSentence[i] != "." &&
            fullSentence[i] != ","
        ) {
            sentence += fullSentence[i];
        }
    }
    // Convert to lowercase so the user can input uppercase
    sentence = sentence.toLowerCase();
    // Reverse the word
    let reverse = "";
    for (let i = sentence.length - 1; i >= 0; i--) {
        reverse += sentence[i];
    }
    // Remove space between sentence
    let removeWhiteSpace = function (checkSentence) {
        let allWord = checkSentence;
        allWord = allWord.split(" ");
        let nospaceReverseWord = "";
        for (let letter of allWord) {
            nospaceReverseWord += letter;
        }
        return nospaceReverseWord;
    };
    let reverseCompareWord = removeWhiteSpace(reverse);
    let mainWord = removeWhiteSpace(sentence);

    // Compare both orginal word vs reverse word
    if (reverseCompareWord === mainWord) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;

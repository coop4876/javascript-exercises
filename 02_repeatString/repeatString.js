const repeatString = function(word, occurance) {
if (occurance < 0){
    return 'ERROR';
}
    let value = '';
    for (i = 0; i < occurance; i++){
        value += word;
    }

    return value;
};

// Do not edit below this line
module.exports = repeatString;

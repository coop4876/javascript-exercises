const reverseString = function(string) {
    let return_string = '';

    for (i = string.length - 1; i >= 0; i-- ){
        return_string += string[i];
    }

    return return_string;
};

// Do not edit below this line
module.exports = reverseString;

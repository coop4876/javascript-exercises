const removeFromArray = function(array) {
    let targets = Array.from(arguments).slice(1)
    let return_array = [];
    
    outer: for (member of array){
        for (target of targets){
            if (target === member){
                continue outer;
            }
        }
        return_array.push(member);
    }
    return return_array;
};

// Do not edit below this line
module.exports = removeFromArray;

const sumAll = function(first, second) {
    let start, end;
    let total = 0;
    if (typeof first !== 'number' || typeof second !== 'number' ||
        first < 0 || second < 0 || 
        first % 1 !== 0 || second % 1 !== 0){
            return 'ERROR'
    }
    if (first > second){
        start = second;
        end = first
    }
    else{
        start = first;
        end = second;
    }

    for (i = start; i <= end; i++){
        total += i
    }
    return total;
};

// Do not edit below this line
module.exports = sumAll;

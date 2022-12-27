// count number of times a string occurs

function stringSearchCount(string, min) {
    let countstring = 0;
    let count = 0;
    for (let i = 0; i < string.length; i++) {
        for(let j = 0; j < min.length; j++) {
            if(string[i+j] !== min[j]) break;
            if(j === min.length-1) count++;
        }
    }
    return count;
}

stringSearchCount("omgthisisomg", "omg"); // output: 2

// display odd numbers in an array using recursion

function countOdd(array) {
    let result = [];
    function count(input) {
        if(input.length === 0) {
            return;
        }
        if(input[0] % 2 !== 0) {
            result.push(input[0]);
        }
        count(input.slice(1));
    }
    count(array);
    return result;
}

countOdd([1,2,3,4,5,6,7,8,9]) // output: [1, 3, 5, 7, 9]

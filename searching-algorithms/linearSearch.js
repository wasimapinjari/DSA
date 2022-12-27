// implement linear search by returning index of value or -1 if value don't exist in a given array 

function linearSearch(array, value) {
    let i=0;
    for(let arr of array) {
        if(arr === value) return i;
        i++;
    }
    return -1;
}

linearSearch([0,5,3,6,4,2,11], 11); // output: 6

// time complexity: O(n) | space complexity: O(n)

// pure for loop performs better than for...of loop that we used (tradeoffs: aesthetics :D)

// so here is the alternate solution:

// function linearSearch(array, value) {
//     for(let i=0; i < array.length; i++) {
//         if(array[i] === value) return i;
//     }
//     return -1;
// }

// linearSearch([0,5,3,6,4,2,11], 2); // output: 5

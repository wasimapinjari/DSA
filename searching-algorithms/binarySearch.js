// implement binary search

function binarySearch(array, value) {
    var left = 0;
    var right = array.length - 1;
    var middle = Math.floor((left + right) / 2);
    while(array[middle] !== value && left <= right) {
        if(array[middle] < value) left = middle + 1;
        else right = middle - 1;
        middle = Math.floor((left + right) / 2);
    }
    return array[middle] === value ? middle : -1;
}

binarySearch([0,1,2,3,4,5,6,7], 3);

// function binarySearch(array, value) {
//     let left = 0;
//     let right = array.length - 1;
//     let count = 0; // to see how much we're looping to get the index
//     for(let i=0; i < array.length; i++) {
//         let middle = Math.floor((left + right) / 2);
//         if(array[middle] === value){
//             count++;
//             console.log(`loop count is ${count}`);
//             return middle;
//         } else if (array[middle] > value) {
//             right = middle - 1;
//             count++;          
//         } else if (array[middle] < value) {
//             left = middle + 1;
//             count++;
//         }
//     }
//     console.log(`loop count is ${count}`);
//     return -1;
// }

// binarySearch([1,2,3,4,5,6,7], 4);

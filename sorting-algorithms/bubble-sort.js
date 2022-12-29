// implement bubble sort

function bubbleSort(array) {
    const swap = (arr, index1, index2) => [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
    let noSwaps;
    let count = 0;
    for(let j = array.length; j > 0 ; j--) {
        noSwaps = true;
        for(let i = 0; i < j - 1; i++) {
            if(array[i] > array[i+1]) {
                swap(array, i, i+1);
                noSwaps = false;
            }
            count++;
            console.log(i, j, array[i], array[i+1], array, count);
        }
        if(noSwaps) break;
    }
    return array;
}

bubbleSort([8, 4, 10, 6, 2]); // output: [2, 4, 6, 8, 10]

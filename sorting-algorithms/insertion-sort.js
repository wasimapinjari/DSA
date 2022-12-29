// implement insertion sort

function insertionSort(array) {
    for(let i = 1; i < array.length; i++) {
        let current = array[i];
        let j = i - 1
        for(j; j >= 0 && array[j] > current; j--) {
            array[j+1] = array[j];
        }
        array[j+1] = current;
    }
    return array;
}

insertionSort([10,3,-2,15,82,20]); // output: [-2, 3, 10, 15, 20, 82]

// implement selection sort

function selectionSort(array) {
    for(i = 0; i < array.length; i++) {
        let min = i;
        for(j = 1 + i; j < array.length; j++) {
            if(array[j] < array[min]) min = j;
        }
        if(min !== i) [array[i], array[min]] = [array[min], array[i]];
    }
    return array;
}

selectionSort([20,3,4,6,56]); // output: [3, 4, 6, 20, 56]

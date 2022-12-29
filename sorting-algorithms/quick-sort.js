// implement quick sort

function pivot(array, startIndex = 0, endIndex = array.length - 1) {
    const swap = (arr, index1, index2) => [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
    let pivot = array[startIndex];
    let pivotIndex = startIndex;
    for(let i = startIndex + 1; i <= endIndex; i++) {
        if(pivot > array[i]) {
            pivotIndex++;
            swap(array, pivotIndex, i);
        }
    }
    swap(array, startIndex, pivotIndex);
    return pivotIndex;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
    if(left < right) {
        let pivotIndex = pivot(arr, left, right);
        quickSort(arr, left, pivotIndex - 1);
        quickSort(arr, pivotIndex + 1, right);
    } return arr;
}

quickSort([4,5,2,1,7,9]); // output: [1, 2, 4, 5, 7, 9]

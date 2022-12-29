// implement radix sort

function getNumber(number, place) {
    return Math.floor(Math.abs(number) / (10 ** place) % 10);
}

function totalDigits(number) {
    if(number === 0) return 1;
    return Math.floor(Math.log10(Math.abs(number))) + 1;
}

function maxDigits(array) {
    let max = 0;
    for(let i = 0; i < array.length; i++) {
        max = Math.max(max, totalDigits(array[i]));
    }
    return max;
}

function radixSort(array) {
    let i = maxDigits(array);
    for(let j = 0; j < i; j++) {
        let bucket = Array.from({length:10}, () => []);
        for(let k = 0; k < array.length; k++) {
            bucket[getNumber(array[k],j)].push(array[k]);
        }
        array = [].concat(...bucket);
    }
    return array;
}

radixSort([3,27,2,9875,123]); // output: [2, 3, 27, 123, 9875]

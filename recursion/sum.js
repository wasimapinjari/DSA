// sum first n numbers using recursion

function sum(num) {
    if(num === 1) {
        return 1;
    }
    return num + sum(num - 1);
}

sum(5); // output: 15

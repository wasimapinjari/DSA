// factorial using recursion

function fact(num) {
    if(num === 1) {
        return 1;
    }
    return num * fact(num - 1);
}

fact(5); // output: 10

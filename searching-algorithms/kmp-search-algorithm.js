// return the index of first occurrence of given string in a string

const kmp = (haystack, neddle) => {
    let lps = [];
    lps[0] = 0;
    let prevPointer = 0;
    let i = 1;
    while (i < neddle.length) {
        if(neddle[prevPointer] === neddle[i]) {
            lps[i] = prevPointer++;
            prevPointer++;
            i++;
        }
        else if(prevPointer === 0) {
            lps[i] = 0;
            i++;
        } else prevPointer = lps[prevPointer - 1];
    }
    
    let m = 0;
    let n = 0;
    while(m < haystack.length) {
        if(haystack[m] === neddle[n]) {
            m++;
            n++;
        } else {
            if(n === 0) m++;
            else n = lps[n - 1];
        }
        if(n === neddle.length) return m - neddle.length;
    }
    return -1
}

kmp("heyilysomuch", "ily") // output: 3

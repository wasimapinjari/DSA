// list numbers in descending order using recursion

function descend(num) {
    if(num <= 0) {
        console.log("go!");
        return;
    }
    console.log(num);
    num--;
    descend(num);
}
descend(3); 

// output: 
// 3
// 2
// 1
// go!

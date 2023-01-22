// Only change code below this line

function countdown(n) {

    if (n < 1) {
        return [];
    } else {
        let result = countdown(n - 1);
        result.splice(0, 0, n);
        return result;
    }
}

//or
// function countdown(n){
//    return n < 1 ? [] : [n].concat(countdown(n - 1)) ;
// }

//or
//function countdown(n){
//    return n < 1 ? [] : [n, ...countdown(n - 1)];
// }
//countdown(5) //[5, 4, 3, 2, 1]
console.log(countdown(10)) //[10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
// Only change code above this line

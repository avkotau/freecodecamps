// function multiply(arr, n) {
//     let product = 1;
//     for (let i = 0; i <= n; i++) {
//         product *= arr[i];
//     }
//     console.log(product);
// }

function sum(arr, n) {
    // Only change code below this line
    if(n <= 0) {
        return 0
    } else {
        return sum(arr, n-1) + arr[n-1]
    }
    // Only change code above this line
}
//
console.log(sum([2, 3, 4], 1)); //2

//console.log(sum([2, 3, 4, 5], 3)); //9

//training 5! === 120
// function fact(x) {
//
//     if (x == 1) {
//         return 1;
//     } else {
//         return x * fact(x-1) ;
//     }
//
// }
// console.log(fact(5)) //120



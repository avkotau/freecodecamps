
function getIndexToIns(arr, num) {
    console.log(arr.filter(val => num > val).length);
}
getIndexToIns([40, 60], 50); //1
getIndexToIns([2, 5, 10], 15) // 3.
getIndexToIns([], 1) // 0.

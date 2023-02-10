function filteredArray(arr, elem) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i].indexOf(elem) === -1 ? newArr.push(arr[i]) : null)
    }
    return newArr;
}

console.log(filteredArray([[10, 8, 3], [14, 6, 23], [3, 18, 6]], 18));//[[10, 8, 3], [14, 6, 23]]
//console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));

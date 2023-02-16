function frankenSplice(arr1, arr2, n) {
    let result = []
    if (arr2.length === 0) console.log(result.push(...arr1)); //return 4???
    for (let i = 0; i < arr2.length; i++) {
        if (i !== n) {
            result.push(arr2[i])
        } else {
            result.push(...arr1);
            result.push(arr2[i])
        }
    }
     console.log(result)
}
//or
// function frankenSplice(arr1, arr2, n) {
//   // It's alive. It's alive!
//   let localArr = arr2.slice();
//   localArr.splice(n, 0, ...arr1);
//   return localArr;
// }
//or
//function frankenSplice(arr1, arr2, n) {
//   return [...arr2.slice(0, n), ...arr1, ...arr2.slice(n)];
// }

frankenSplice([1, 2, 3], [4, 5], 1); //[4, 1, 2, 3, 5].
frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2) // ["head", "shoulders", "claw", "tentacle", "knees", "toes"].
frankenSplice([1, 2, 3, 4], [], 0)// [1, 2, 3, 4].

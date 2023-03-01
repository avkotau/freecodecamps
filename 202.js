function chunkArrayInGroups(arr, size) {
    let result = [];
    let n = 0;
    let size2 = size;
    for (let i = 1; i <= Math.ceil(arr.length/size); i++) {
        result.push(arr.slice(n,size2))
        n += size
        size2 += size
    }
    console.log(result)
}
//or
//function chunkArrayInGroups(arr, size) {
//   // Break it up.
//   const newArr = [];
//   for (let i = 0; i < arr.length; i += size) {
//     newArr.push(arr.slice(i, i + size));
//   }
//   return newArr;
// }
//or
//function chunkArrayInGroups(arr, size) {
//   const newArr = [];
//   while (arr.length > 0) {
//     newArr.push(arr.splice(0, size));
//   }
//   return newArr;
// }

chunkArrayInGroups(["a", "b", "c", "d"], 2) //[["a", "b"], ["c", "d"]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3) //[[0, 1, 2], [3, 4, 5]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2) //[[0, 1], [2, 3], [4, 5]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4) // [[0, 1, 2, 3], [4, 5]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3) // [[0, 1, 2], [3, 4, 5], [6]].

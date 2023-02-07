function zeroArray(m, n) {
    // Creates a 2-D array with m rows and n columns of zeroes
    let newArray = [];
    let row = [];
    for (let i = 0; i < m; i++) {
        // Adds the m-th row into newArray
        // Pushes the current row, which now has n zeroes in it, to the array
        console.log(newArray.push(row));
    }
    for (let j = 1; j <= n; j++) {
        // Pushes n zeroes into the current row to create the columns
        console.log(row.push(0));
    }
    return newArray;
}

//or
// function zeroArray(m, n) {
//     // Creates a 2-D array with m rows and n columns of zeroes
//     let newArray = [];
//     for (let i = 0; i < m; i++) {
//         // Adds the m-th row into newArray
//         let row = [];
//         for (let j = 1; j <= n; j++) {
//             // Pushes n zeroes into the current row to create the columns
//             console.log(row.push(0));
//         }
//         // Pushes the current row, which now has n zeroes in it, to the array
//         console.log(newArray.push(row));
//     }
//     return newArray;
// }

let matrix = zeroArray(3, 2);
console.log(matrix);

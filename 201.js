function mutation(arr) {
    let lowerArr = [];
    lowerArr.push(arr[0].toLowerCase());
    lowerArr.push(arr[1].toLowerCase());
    for (let i = 0; i < lowerArr[1].length; i++) {
         if (lowerArr[0].indexOf(lowerArr[1][i]) < 0) console.log(false)
    }
     console.log(true)
}

mutation(["Hello", "hey"]); //false
mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]) // true.
mutation(["hello", "Hello"]) // true.
mutation(["voodoo", "no"]) // false.

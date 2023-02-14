function findLongestWordLength(str) {

    let result = str.split(' ').sort((a,b) => b.length-a.length)
    console.log(result[0].length);
}

//or
//function findLongestWordLength(str) {
//   return Math.max(...str.split(" ").map(word => word.length));
// }

findLongestWordLength("The quick brown fox jumped over the lazy dog");

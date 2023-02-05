let sampleWord = "astronaut";
let pwRegex = /\w{4,}(?=)(?=[0-9]{2,})/; // Change this line
let result = pwRegex.test(sampleWord);

//or
//let sampleWord = "astronaut";
// let pwRegex =  /(?=\w{6})(?=\w*\d{2})/;
// let result = pwRegex.test(sampleWord);
console.log(result)

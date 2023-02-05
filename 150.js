let sampleWord = "astronaut";
let pwRegex = /\w{4,}(?=)(?=[0-9]{2,})/; // Change this line
let result = pwRegex.test(sampleWord);
console.log(result)

let hello = "   Hello, World!  ";
let wsRegex = /(\w+.)\s(\w+.)/; // Change this line
let result = hello.match(wsRegex)[0]; // Change this line
//or
//let hello = "   Hello, World!  ";
// let wsRegex = /^\s+|\s+$/g; // Change this line
// let result = hello.replace(wsRegex, "");
console.log(result)

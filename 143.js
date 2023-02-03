// let username = "JackOfAllTrades";
let username = "JACK";
// let username = "Jo";
// let username = "Oceans11";
// let username = "RegexGuru";
// let username = "Z97";
// let username = "AB1";
let userCheck = /^A-z+?\w/; // Change this line

let result = userCheck.test(username);
console.log(result)

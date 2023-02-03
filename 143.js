// let username = "JackOfAllTrades";
let username = "JACK";
// let username = "Jo";
// let username = "Oceans11";
// let username = "RegexGuru";
// let username = "Z97";
// let username = "AB1";

let userCheck = /^[a-z]([0-9]{2,}|[a-z]+\d*)$/i; // Change this line
let result = userCheck.test(username);
console.log(result)

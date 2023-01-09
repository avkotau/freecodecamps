// Setup
function phoneticLookup(val) {
    let result = "";

    // Only change code below this line
    let lookup = {
        "alpha": "Adams",
        "bravo": "Boston",
        "charlie": "Chicago",
        "delta": "Denver",
        "echo": "Easy",
        "foxtrot": "Frank",
    }
    result = lookup[val]
    // Only change code above this line
    return result;
}

phoneticLookup("charlie");
//phoneticLookup("alpha") should equal the string Adams
// Passed:phoneticLookup("bravo") should equal the string Boston
// Passed:phoneticLookup("charlie") should equal the string Chicago
// Passed:phoneticLookup("delta") should equal the string Denver
// Passed:phoneticLookup("echo") should equal the string Easy
// Passed:phoneticLookup("foxtrot") should equal the string Frank

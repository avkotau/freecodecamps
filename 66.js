function checkObj(obj, checkProp) {
    // Only change code below this line
    console.log(obj.hasOwnProperty(checkProp) ? obj[checkProp] : "Not Found")
    // Only change code above this line
}

checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "gift")

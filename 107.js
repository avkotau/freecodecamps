const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["no-extra-semi", "no-dup-keys"]
};
function makeList(arr) {
    // Only change code below this line
    const failureItems = [];
    for (let char of arr) {
        failureItems.push(`<li class="text-warning">${char}</li>`)
    }
    // Only change code above this line

    console.log(failureItems);
}

const failuresList = makeList(result.failure);

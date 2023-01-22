function rangeOfNumbers(startNum, endNum) {
    if (startNum > endNum) {
        return []
    } else {
        let result = rangeOfNumbers(startNum + 1, endNum)
        result.unshift(startNum);
        return result
    }
};

console.log(rangeOfNumbers(1, 5)) // [1, 2, 3, 4, 5]

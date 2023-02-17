function bouncer(arr) {
    return arr.filter(n =>typeof n === 'string' && n.length > 0 || typeof n === 'number' && n+''.length > 0)

}

console.log(bouncer([7, "ate", "", false, 9])) // [7, "ate", 9].
console.log(bouncer([false, null, 0, NaN, undefined, ""])) //[].



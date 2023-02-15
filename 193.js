function repeatStringNumTimes(str, num) {
    let result = ''
    if(num <= 0) console.log('')
    for (let i = 0; i < num; i++) {
        result += str
    }
    console.log(result)
}

repeatStringNumTimes("abc", 3);
repeatStringNumTimes("abc", -2)// ( "").

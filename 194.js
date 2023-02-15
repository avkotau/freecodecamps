function truncateString(str, num) {
    // console.log(Number.isInteger(num))
    if(str.length > num ) {
        console.log(str.slice(0, num) + '...');
    } else {
        console.log(str)
    }

}

truncateString("A-tisket a-tasket A green and yellow basket", 8);


truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2)// A-tisket a-tasket A green and yellow basket.

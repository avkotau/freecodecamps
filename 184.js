const users = {
    Alan: {
        online: false
    },
    Jeff: {
        online: true
    },
    Sarah: {
        online: false
    }
}

function countOnline(usersObj) {
    // Only change code below this line
    let result = 0;
    for (let user in usersObj) {

        usersObj[user].online ? result += 1 : result += 0;
    }
    console.log(result)
    // Only change code above this line
}

// console.log(users.Alan.online);
console.log(countOnline(users));

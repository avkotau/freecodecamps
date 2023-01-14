// Setup
const contacts = [
    {
        firstName: "Akira",
        lastName: "Laine",
        number: "0543236543",
        likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
        firstName: "Harry",
        lastName: "Potter",
        number: "0994372684",
        likes: ["Hogwarts", "Magic", "Hagrid"],
    },
    {
        firstName: "Sherlock",
        lastName: "Holmes",
        number: "0487345643",
        likes: ["Intriguing Cases", "Violin"],
    },
    {
        firstName: "Kristian",
        lastName: "Vos",
        number: "unknown",
        likes: ["JavaScript", "Gaming", "Foxes"],
    },
];

function lookUpProfile(name, prop) {
    // Only change code below this line

    for (let a = 0; a < contacts.length; a++) {
        //console.log(contacts[a]['firstName'])
        if (contacts[a]['firstName'] === name ) {
            // console.log(contacts[a][prop])
            if(contacts[a].hasOwnProperty(prop)) {
                console.log(contacts[a][prop])
            }  else {
                console.log('No such property')
            }
        }
    }
    console.log('No such contact')

}

console.log(lookUpProfile("Kristian", "lastName")) //должен вернуть строкуVos
lookUpProfile("Sherlock", "likes") //должен вернуться["Intriguing Cases", "Violin"]
lookUpProfile("Harry", "likes") //должен вернуть массив
lookUpProfile("Bob", "number") //должен вернуть строкуNo such contact
 lookUpProfile("Bob", "potato") //должен вернуть строкуNo such contact
lookUpProfile("Akira", "address") //должен вернуть строкуNo such property

// Only change code below this line
class Thermostat {
    constructor(temp) {
        this._temp = temp
    }

    get temperature () {
        return this._temp = 5/9 * (this._temp - 32)
    }

    set temperature (t) {
        this._temp = t  * 9.0 / 5 + 32
    }

}
// Only change code above this line


const thermos = new Thermostat(76); // Setting in Fahrenheit scale
console.log(thermos)
let temp = thermos.temperature; // 24.44 in Celsius
console.log(temp)
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius
console.log(temp)


// class Book {
//     constructor(author) {
//         this._author = author;
//     }
//     // getter
//     get writer() {
//         return this._author;
//     }
//     // setter
//     set writer(updatedAuthor) {
//         this._author = updatedAuthor;
//     }
// }
// const novel = new Book('anonymous');
// console.log(novel.writer);
// novel.writer = 'newAuthor';
// console.log(novel.writer);


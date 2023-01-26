// Only change code below this line
class Thermostat {
    constructor(temp) {
        console.log(this._temp = temp)
    }
    getter () {
        console.log(this._temp)
    }
    setter (temperature) {
        console.log(this._temp = temperature)
    }
}
// Only change code above this line

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
console.log(thermos.temperature)
temp = thermos.temperature; // 26 in Celsius
console.log(temp)


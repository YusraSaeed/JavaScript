//To Number Conversion
// let score = "yusra"
// console.log("String: ");
// console.log(typeof(score));

// let valueInNumber = Number(score) //converts the string into number
// console.log(typeof(valueInNumber));
// console.log(valueInNumber);

// /* 
//     The above part summary is that if we use a number as a string, it can be converted into number.
//     However if we use something else as a string and convert it into string, JS will convert the type
//     into string but the value will not be a number instead it will be NaN (not a number)
// */

// console.log("NULL: ");
// score = null
// console.log(typeof(score));
// valueInNumber = Number(score)
// console.log(typeof(valueInNumber));
// console.log(valueInNumber);

// console.log("Undefined: ");
// score = undefined
// console.log(typeof(score));
// valueInNumber = Number(score)
// console.log(typeof(valueInNumber));
// console.log(valueInNumber);

// console.log("Boolean: ");
// score = false
// console.log(typeof(score));
// valueInNumber = Number(score)
// console.log(typeof(valueInNumber));
// console.log(valueInNumber);

/* Summary
    "33" => convertable into num 33
    "33abc"/"yusra" => Type: Number Value: NaN
    "null" => Type: Number Value: 0
    "undefined" => Type: Number Value: 0
    "true" => Type: Number Value: 1
    "false" => Type: Number Value: 0
*/


//TO Boolean
// let isLoggedIn = 1
// let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(typeof(booleanIsLoggedIn));
// console.log(booleanIsLoggedIn);
/*Boolean Conversion Summary
    1 => true
    0 => false
    Any positive num => true
    Any negative num => true
    "" => false
    only declare variable => false
    "yusra" => true
*/

//To String
let num = true
let stringNum = String(num)
console.log(typeof(stringNum));
console.log(stringNum);
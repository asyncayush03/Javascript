/* datatypes*/  
//primitive data types -> 
// 1. Number

/*
let a = 22 
console.log(typeof a) // number 

// It also contains NAN (Not a Number) and Infinity as special numeric values.
// Infinite and -Infinite
*/

// 2. String

/*
let a = "Hello"
console.log(typeof a) // string
*/

// 3. Boolean
/*
let a = true
console.log(typeof a) // boolean
*/

// 4. Undefined

/*
let a 
console.log(typeof a) // undefined
*/


// 5. Null

/*
let a = null
console.log(typeof a) // object
*/

// 6. Symbol

/*
let a = Symbol("Hello")
console.log(typeof a) // symbol
*/

// 7. BigInt

/*
let a = 1234567890123456789012345678901234567890n
console.log(typeof a) // bigint
*/

// 2. NON PRIMITIVE DATA TYPES ->
// 1. objects
/*
const person = {
    name: "John",
    age: 30,
    city: "New York"
}
console.log(typeof person) // object

*/

// 2. Arrays

/*
const numbers = [1, 2, 3, 4, 5]
console.log(typeof numbers) // object
*/

// 3. Functions

/*
function greet() {
    console.log("Hello")
}
console.log(typeof greet) // function
*/

// NOTE: here the typeof null, array and function are returning object and function respectively. This is because in JavaScript, null is considered an object, arrays are also objects, and functions are a special type of object.

/*
Template Literals: 

we use `` and ${} to create a string with embedded expressions.

Example:
let age = 22
let name = "John"
let message = `My name is ${name} and I am ${age} years old.`
console.log(message) // My name is John and I am 22 years old.

*/
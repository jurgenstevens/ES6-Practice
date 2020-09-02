console.log("Hello from Javascript")

// This is a comment
var number = 5; // this is an in-line comment
/* this is a
multi-line comment */
number = 9;

// Data Types: undefined, null, boolean, string, symbol, number and object

// var can be used throughout the whole program
var myName = "Jurgen"

// let will only be used within the scope of where it's declared
let city = "Chicago"

// const is a variable that shouldn't change
const pi = 3.14

var a; // this is how you declare a variable
var b = 2; // this is how you assign a variable
console.log(a)
a = 7; // now a has been assigned
b = a; // now a's contents have been assigned to b
console.log(a)
console.log(b)

//  Initializing Variables w/ Assignment Operator
var a = 9;

// Uninitialized Variables
// Initialize these three variables
var a = 5;
var b = 10;
var c = "I am a ";
//Do not change code below this line
a = a + 1; // => 6
b = b + 5; // => 15
c = c + "String!" // "I am a String!"

// Case sensitivity in variables
// Declarations must always be camelCase
var studlyCapVar; // correct
var properCamelCase; // correct
var titleCaseOver; // correct
// Assignments
studlyCapVar = 10;
properCamelCase = "A String";
titleCaseOver = 9000;

// Adding Numbers
var sum = 10 + 10;
console.log(sum)
// Subtracting Numbers
var difference = 45 - 5;
console.log(difference)
// Multiplying Numbers
var product = 9 * 9;
console.log(product)
// Dividing Numbers
var quotient = 66 / 6;
console.log(quotient)
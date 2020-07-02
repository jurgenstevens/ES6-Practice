// old javascript

// var names = ["Ed", "John", "Mike"];
// var counter = 10;
// var counter = 5;

// function sayName() {
//   var name = "Jurgen";
//   console.log(name);
// }

// var sucks because you can declare a variable twice that way which can interfere with code

// sayName();

// ES6

// const todoList = ["Milk", "Cow"];
// you can't reassign variables with const

// CONCATINATION old JS
// var name = "Jurgen";
// console.log("Hello my name is " + name);

// Concatination ES6

// const name = "Jurgen";
// console.log(`Hello my name is ${name}`);

// OBJECT LITERALS old JS
// function getBook(title, author) {
//   return {
//     title: title,
//     author: author,
//   };
// }

// var book = getBook("Fight Club", "Chuck Palahniuk");
// console.log(book);

// ES6 only difference is if the parameters are the same,
// you can keep it short
// function getBook(title, author) {
//   return {
//     title,
//     author,
//   };
// }

// let book = getBook("Fight Club", "Chuck Palahniuk");
// console.log(book);

// OBJECT DECONSTRUCTION old JS

// var user = {
//   name: "Jurgen",
//   age: 29,
// };

// var myName = user.name;
// console.log(myName);

// ES6
// const list = {
//   names: "Shopping List",
//   items: ["Milk", "Cow"],
// };

// let listName = list.names;
// let firstItem = list.items[0];
// let secondItem = list.items[1];
// console.log(listName);
// console.log(firstItem);
// console.log(secondItem);

// // we can add the different things we want from the list and it's equal to from where this data is being extracted from
// const { names, items } = list;
// console.log(names, items);

// FUNCTIONS old JS
// function sayName() {
//   console.log("Hello I am Jurgen");
// }

// var sayAge = function () {
//   console.log("I am twenty nine years old");
// };

// sayName();
// sayAge();

// var user = {
//   name: "Jurgen",
//   age: 29,
//   sayName: function () {
//     console.log("My name is " + this.name);
//     var that = this;
//     var fullIntro = function () {
//       console.log("My name is " + that.name + " and my age is " + that.age);
//     };
//     fullIntro();
//   },
// };

// user.sayName();

// ES6
// curly braces are for when you're returning multiple things
// const sayLocation = (location) => {
//   console.log(`I live in ${location}`);
// };
// sayLocation("Chicago");

// // you can erase the curly braces if you're only returning one thing when you call the function
// const whereYouFrom = (neighborhood) => console.log(`I'm from ${neighborhood}`);
// whereYouFrom("Bridgeport");

// const user = {
//   name: "Jurgen",
//   age: 25,
//   sayName: function () {
//     console.log(`My name is ${this.name}`);
//     const fullIntro = () => {
//       console.log(`My name is ${this.name} and I am ${this.age} years old.`);
//     };
//     fullIntro();
//   },
// };

// user.sayName();

// THIS IN FUNCTIONS Old JavaScript
// button.addEventListener("click", function () {
//   var addFade = function () {
//     // this won't refer to the button so the fade function won't work
//     this.style.display = "none";
//   };
// });

//ES6
// button.addEventListener("click", function () {
//   let addFade = () => {
//     // use an arrow function instead and it will work
//     this.style.display = "none";
//   };
// });

// DEFAULT PARAMETERS Old JS
// function multiply(x, y) {
//   // you can set a default value
//   let a = x || 0;
//   let b = y || 0;
//   console.log(a * b);
// }
// multiply(5, 10);
// // however it returns NaN if the parameter is empty

// // ES6
// // you can add a value in the parameter so it doesn't appear as NaN
// const add = (c = 0, d = 0) => {
//   console.log(c + d);
// };

// add();

// x = { foo: "bar" };
// y = { baz: x };
// z = y["baz"]["foo"];

// function foo() {
//   function bar() {
//     setTimeout(() => {
//       console.log("Curly");
//     }, 1000);
//   }
//   console.log("Larry");
//   return bar;
// }

// let x = foo();
// x();
// console.log("Moe");

// function makeAdder(x) {
//  return function(y)
// }

// var add5 = makeAdder(5);
// var add8 = makeAdder(8);
// var add20 = makeAdder(20);
// assert(add5(10) === 15);
// assert(add8(6) === 14);
// assert(add20(10) === 26);

// const f = (n) => (n <= 1 ? 1 : n * f(n - 1));

// let g = f(4);
// console.log(g);

// function strToFloat(str) {
//   return parseFloat(str);
// }
// strToFloat("asdf");

// let event = {
//   name: "Hot Dog and Burger Sunday",
//   financials: {
//     baseCost: "19.99",
//     discountsAvailable: false,
//     maxCost: "29.99",
//   },
//   subscribers: ["Tim"],
// };

// let eventPrice;

// const assignEvent = ({ financials: { baseCost: price } }) =>
//   (eventPrice = price);

// assignEvent(event);

function string(str) {
  return str.split().join("cat");
}

string("dog");

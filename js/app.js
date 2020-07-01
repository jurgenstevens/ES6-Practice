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
function multiply(x, y) {
  console.log(x * y);
}

multiply(5, 10);

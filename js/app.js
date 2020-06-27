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

const todoList = ["Milk", "Cow"];
// you can't reassign variables with const

// CONCATINATION old JS
// var name = "Jurgen";
// console.log("Hello my name is " + name);

// Concatination ES6

const name = "Jurgen";
console.log(`Hello my name is ${name}`);

// OBJECT LITERALS old JS
// function getBook(title, author) {
//   return {
//     title: title,
//     author: author,
//   };
// }

// var book = getBook("Fight Club", "Chuck Palahniuk");
// console.log(book);

// ES6 only difference is if the parameters are the same, you can keep it short
function getBook(title, author) {
  return {
    title,
    author,
  };
}

let book = getBook("Fight Club", "Chuck Palahniuk");
console.log(book);

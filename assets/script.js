var topics = "HTML, CSS, Git, JavaScript";
var topics = ["HTML", "CSS", "Git", "JavaScript"];

for (var x = 0; x < topics.length; x++) {
  console.log(topics[x]);
}

// console.log(topics);

//The best way to write JS is in an external file and linking it in the footer of the HTML page, under the footer or main closing element but above the body closing emlement

// JS code is written as data types eg. A string is written between quotation marks: ""HTML, CSS, Git, JavaScript""

//These data types are stored as variables: var topics = "HTML, CSS, Git, JavaScript"

//Variable can be accessed passing the name to a function eg. console.log(variables)

//The order code is executed can be controlled with conditional statement.
//One example of a conditional statement is an "if statement". If a certain condition is met - one set of instructions is carried out. If not, another set is executed.

// if statements are normally boolean values, which a condition can be true or false. If it true - it is known as truthy. Falsy statements are  0, -0, On, ""(a blank string), null, undefined, NaN (not a number).

// === is a strict equality operator. it compares two values to see if they're the same. Compares left side to right. if same = true, if different = false

// Another way of storing data types is in an array. Meant for storing a list of data, each separated by a comma. These can be strings, numbers, boolean which are written between [] (open brackets).
// arrayName =['string', number, boolean]
// These are then stored with a name, and can be accessed by the index position, starting from 0. arrayName[0] would access the first data value of an array.
// arrayName[0], gives the value in frist index postion of array.

// A for loop can iterate over an array and print out every position.
//A for loop is needs a for keyword, at the start, a conditional statement (see next list-item), and a code block( so the computer knows what to do on each iteration).
// A for loops conditional statement needs a starting point (a variable, x=0), a condition (so it knows when to end, x < arrayName.length), and a predictable pattern to know how to iterate eg. +1.
// A shortcut for x+1 is x++. For every iteration, 1 is added to a variable
// arrayname.length gives the number of indeces in the array.

// var topic = "HTML";

// if (topic === 'HTML') {
//   console.log("Let's study HTML!");
// } else if (topic === 'CSS') {
//   console.log("Let's study CSS!");
// } else if (topic === 'Git') {
//   console.log("Let's study Git!");
// } else if (topic === 'JavaScript') {
//   console.log("Let's study JavaScript!");
// } else {
//   console.log('Please try again!');
// }

var topics = "HTML, CSS, Git, JavaScript";

var topic = "HTML";

if (topic === "HTML") {
  console.log("Let's study HTML!");
} else if (topic === "CSS") {
  console.log("Let's study CSS!");
} else if (topic === "Git") {
  console.log("Let's study Git!");
} else if (topic === "JavaScript") {
  console.log("Let's study JavaScript!");
} else {
  console.log("Please try again!");
}

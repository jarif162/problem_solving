//Question: Write a JavaScript program that takes a string variable called name and prints "Hello, [name]!" to the console. For example, if name = "John", the output should be "Hello, John!".

let Mname = "Jarif";

if (Mname) {
  console.log(`Hello,${Mname}!`);
} else {
  console.log(`None`);
}

//Question: Create a JavaScript program that calculates the sum of two numbers, a and b, and prints the result to the console. For example, if a = 5 and b = 10, the output should be 15.

let a, b;
a = 5;
b = 10;

if (a == 5 && b == 10) {
  console.log(`Output: ${a + b}`);
} else {
  console.log(`There is a error`);
}

//Question: Declare a variable called age and assign it your age. Then, print "I am [age] years old." to the console. For example, if age = 25, the output should be "My age is 25".

let age = 25;

if ((age = 25)) {
  console.log(`I am ${age} years old`);
} else {
  console.log(`Error`);
}

//Question: Given 3 subjects Math, English, and Physics find the total marks and average of 3 subjects.

let Math, English, Physics;
Math = 30;
English = 25;
Physics = 65.05;
Total_marks = Math + English + Physics;
console.log(`Total marks:${Total_marks}`);
Average = Total_marks / 3;
console.log(`Average:${Average}`);

//Question: Create 4 variables. 2 in the camel case and 2 in the snake case. (it could be anything) make sure it’s meaning full and print all the values in the console

let bookShop, odiWorldcup, all_rounder, my_habit;

bookShop = "bookshop number 01";
odiWorldcup = "2019";
all_rounder = "shakib Al Hasan";
my_habit = "Watching cricket";

console.log(
  `${bookShop} , opened in ${odiWorldcup}, is where ${all_rounder} enjoys ${my_habit}`
);

//Question: Write a program to check if a sentence has the word "Hello" using the search method.

//Hint: Use the search method to see if the sentence has the specified word, and then use an if-else statement to print a message.

let book = "I need to search for books about Shakib Al Hasan.";

Sbook = book.search("search");
console.log(`${Sbook}`);

if (Sbook >= 0) {
  console.log(`Sentence has the specified word`);
} else {
  console.log(`Nothing`);
}

//Question: Write a JavaScript program that takes a user's name and then displays a greeting message using string concatenation. The program should ensure that any whitespace in the user's input is removed before concatenation.

//Example Output: Hello, Sarah
//Hint: Use the prompt() function to get the user's name, trim() method to remove whitespace, and concat() or the + operator to concatenate the strings.

let welcome = "      hello, ";
let user = prompt("Input your name");
let add = welcome.concat(user.trim());
console.log(add.trim());

//Question: Write a JavaScript program that uses template literals to create a dynamic message. The program should take the user's favorite programming language, their name, and the year they started learning it as inputs. Then, display a message that includes this information, formatted across multiple lines. (underlines should be dynamic)

//Example Output: Sara, you have been coding in Python since 2018.

let Uname = "jarif";
let programming_language, year;

programming_language = "Javascript";
year = 2024;

console.log(
  `${Uname}, you have been coding in ${programming_language} since ${year}`
);

//Question: Write a JavaScript program that checks if a given email address belongs to Yahoo. The program should be case-insensitive and print a message indicating whether the email is a Yahoo address or not.

//Hint: Use the includes method to check if the email contains @yahoo.com. Convert both the email address and the string @yahoo.com to lowercase before performing the check to ensure it's case-insensitive

let givenMail = "jarif@yahOo.com";
let mail = "@yahoo.com";

let Mcheck = givenMail.toLowerCase().includes(mail);

if (Mcheck == true) {
  console.log(`given email address belongs to Yahoo`);
} else {
  console.log(`given email address not belongs to Yahoo`);
}

//Question: Write a JavaScript program that checks whether a given number is divisible by 10. The program should print a message indicating whether the number is divisible by 10 or not.

//Hint: Use the modulus operator % to determine if the remainder when dividing the number by 10 is 0.

let Num = prompt("input the number:");
let res = Num % 10;
console.log(res);

if (res == 0) {
  console.log(`Done`);
} else {
  console.log(`Not done`);
}

//Question: Write a JavaScript program that checks whether a given number is even or odd. The program should print a message indicating whether the number is even or odd.

//Hint: Use the modulus operator % to check if the number is divisible by 2 without a remainder.

let aa,
  bb = prompt("Put any number for odd even:");

aa = bb % 2;
console.log(aa);

if (aa == 0) {
  console.log("Even number");
} else {
  console.log("Odd number");
}

//Question: Write a JavaScript program that checks whether a given character is a string or a number. The program should print a message indicating whether the given variable is a string or number.

//hint: you can use if / else and typeof to check

let object1 = "Jarif";
let object = 4;
console.log(typeof object);
console.log(typeof object1);

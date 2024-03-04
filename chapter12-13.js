// Chapter 12 - 13 IF...ELSE & ELSE IF STATEMENT, TESTING SET OF CONDITIONS Start

// Q1
var char = prompt("Enter a character:");
var charCode = char.charCodeAt(0);
if (charCode >= 48 && charCode <= 57) {
  alert("The input is a number.");
} else if (charCode >= 65 && charCode <= 90) {
  alert("The input is an uppercase letter.");
} else if (charCode >= 97 && charCode <= 122) {
  alert("The input is a lowercase letter.");
} else {
  alert("The input is not a number, uppercase letter, or lowercase letter.");
}

// Q2
var num1 = parseInt(prompt("Enter the first integer:"));
var num2 = parseInt(prompt("Enter the second integer:"));
if (num1 === num2) {
  alert("The two integers are equal.");
} else {
  var larger;
  if (num1 > num2) {
    larger = num1;
  } else {
    larger = num2;
  }
  alert("The larger integer is: " + larger);
}

// Q3
var number = parseFloat(prompt("Enter a number:"));
if (number > 0) {
  alert("The number is positive.");
} else if (number < 0) {
  alert("The number is negative.");
} else {
  alert("The number is zero.");
}

// Q4
var character = prompt("Enter a character (string of length 1):");
var lowercaseChar = character.toLowerCase();
var isVowel =
  lowercaseChar === "a" ||
  lowercaseChar === "e" ||
  lowercaseChar === "i" ||
  lowercaseChar === "o" ||
  lowercaseChar === "u";
if (isVowel) {
  alert("The character " + character + " is a vowel.");
} else {
  alert("The character " + character + " is not a vowel.");
}

// Q5
var correctPassword = "password123";
var enteredPassword = prompt("Enter your password:");
if (enteredPassword === "") {
  alert("Please enter your password.");
} else if (enteredPassword === correctPassword) {
  alert("Correct! The password you entered matches the original password.");
} else {
  alert("Incorrect password.");
}

// Q6
var greeting;
var hour = 13;
if (hour < 18) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}

// Q7
var time = +prompt("Enter the time in 24hr format");
if (time > 0 && time < 12) {
  alert("Good Morning !");
} else if (time > 12 && time < 17) {
  alert("Good Afternoon !");
} else if (time > 17 && time < 21) {
  alert("Good Evening !");
} else if (time > 21 && time < 23.59) {
  alert("Good Night !");
}

// Chapter 12 - 13 IF...ELSE & ELSE IF STATEMENT, TESTING SET OF CONDITIONS End

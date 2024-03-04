// ================= THE Start =================

// PDF Chapter 10 - 14 Start

// Chapter 10 (if statements) Start

// Q1
var city = "Karachi";
if (city === "Karachi") {
  console.log("The City of Lights");
}

// Q2
if (x === y) {
  var z = prompt("Enter the value of z:");
}

// Q3
var zipCode = +prompt("Enter the zip code of karachi");
if (zipCode === 10010) {
  alert("Karachi");
} else {
  alert("Please write correct city");
}

// Q4
var x = 1;
if (x === 1) {
  x = 2;
}
console.log(x);

// Chapter 10 (if statements) End

// Chapter 11 (Comparison Operators) Start

// Q1
if (variable1 !== variable2) {
  // Rest of the if statement's code goes here
}

// Q2
if (variable1 >= variable2) {
  // Rest of the if statement's code goes here
}

// Q3
var myVariable = 5;
if (myVariable !== 10) {
  myVariable = 10;
}
console.log(myVariable);

// Q4
var number1 = 5;
var number2 = 10;
if (number1 !== number2) {
  alert("Congratulations!");
}

// Q5
var firstName = prompt("Please enter your first name:");
var anotherName = "Saim";
if (firstName !== anotherName) {
  alert("No match");
}

// Chapter 11 (Comparison Operators) End

// Chapter 12 (if…else and else if statements) Start

// Q1
var variable1 = 10;
var variable2 = 5;
if (variable1 >= variable2) {
  alert(
    "The value represented by variable1 is greater than or equal to the value represented by variable2."
  );
} else {
  alert(
    "The value represented by variable1 is less than the value represented by variable2."
  );
}

// Q2
var subject1 = parseInt(prompt("Enter marks for Math:"));
var subject2 = parseInt(prompt("Enter marks for Computer:"));
var subject3 = parseInt(prompt("Enter marks for English:"));
var subject4 = parseInt(prompt("Enter marks for Urdu:"));
var subject5 = parseInt(prompt("Enter marks for Chemistry:"));
var totalMarks = subject1 + subject2 + subject3 + subject4 + subject5;
var percentage = (totalMarks / 500) * 100;
var grade;
if (percentage >= 90) {
  grade = "A+";
} else if (percentage >= 80) {
  grade = "A";
} else if (percentage >= 70) {
  grade = "B";
} else if (percentage >= 60) {
  grade = "C";
} else if (percentage >= 50) {
  grade = "D";
} else {
  grade = "Fail";
}
console.log("Total Marks: " + totalMarks);
console.log("Percentage: " + percentage.toFixed(2) + "%");
console.log("Grade: " + grade);

// Q3
var a = parseInt(prompt("Enter the value of a:"));
if (a === 10) {
  alert("a is 10");
} else {
  alert("The correct value of a is 10");
}

// Q4
var city = prompt("Enter a city:");
if (city.toLowerCase() === "karachi") {
  alert("Acknowledging it's Karachi");
} else if (city.toLowerCase() === "lahore") {
  alert("Acknowledging it's Lahore");
} else {
  alert("This city is not recognized.");
}

// Chapter 12 (if…else and else if statements) End

// Chapter 13 (Testing sets of conditions) Start

//Q1
if (a === b && c === d) {
}

//Q2
if (a === b || c !== d) {
}

//Q3
if (name11 === "Hamza" || (name12 === "Arsalan" && age < 60)) {
}

//Q4
var a23 = 10;
var b23 = 20;
if (a23 < b23 || a23 > b23) {
  alert(a23, "is either less than", b23, "or greater than", b23);
}

//Q5
var firstName = "Muhammad";
var lastName = "Saim Khan";
var userFirstName = prompt("Enter your first name:");
var userLastName = prompt("Enter your last name:");
if (userFirstName === firstName && userLastName === lastName) {
  alert("Your name matches the stored name!");
}

// Chapter 13 (Testing sets of conditions) End

// Chapter 14 (If statements nested) Start

//Q1
var password1 = prompt("Enter your password:");
if (password1) {
  if (password1.length <= 5) {
    alert("Password must be greater than 5");
  } else {
    alert("OK");
  }
} else {
  alert("Please enter your password");
}

//Q2
var a13 = 1;
var c13 = "Max";
if (a13 === 1) {
  if (c13 === "Max") {
    alert("OK");
  }
}

//Q3
var a20 = 1;
var c20 = "Max";
if (a20 === 1 && c20 === "Max") {
  alert("OK");
}

//Q4
var a45 = 5;
var b45 = 5;
if (a45 === b45) {
  if (a45 <= b45) {
    alert("The variables have the same value and a is less than or equal to b");
  }
}

// Chapter 14 (If statements nested) End

// PDF Chapter 10 - 14 End

// ================= THE END =================

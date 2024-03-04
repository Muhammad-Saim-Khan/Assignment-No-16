// Chapter 9 - 11 USER INPUT & CONDITIONAL STATEMENT Start

// Q1
var city = prompt("Enter the name of your city:");
if (city.toLowerCase() === "karachi") {
  alert("Welcome to the city of lights!");
}

// Q2
var gender = prompt("Enter your gender (male/female):");
if (gender.toLowerCase() === "male") {
  alert("Good Morning Sir.");
} else if (gender.toLowerCase() === "female") {
  alert("Good Morning Ma'am.");
} else {
  alert("Invalid input. Please enter 'male' or 'female'.");
}

// Q3
var traffic = prompt("Enter color of road traffic signal");
if (traffic === "red") {
  alert("Must Stop");
} else if (traffic === "yellow") {
  alert("Ready to move");
} else if (traffic === "green") {
  alert("Move on");
}

// Q4
var remainingFuel = parseFloat(
  prompt("Enter the remaining fuel in your car (in liters):")
);
if (remainingFuel < 0.25) {
  alert("Please refill the fuel in your car");
}

// Q5

// a.
var a = 4;
if (++a === 5) {
  alert("given condition for variable a is true");
}

// b.
var b = 82;
if (b++ === 83) {
  alert("given condition for variable b is true");
}

// c.
var c = 12;
if (c++ === 13) {
  alert("condition 1 is true");
}
if (c === 13) {
  alert("condition 2 is true");
}
if (++c < 14) {
  alert("condition 3 is true");
}
if (c === 14) {
  alert("condition 4 is true");
}

// d.
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
  alert("The cost equals");
}

// e.
if (true) {
  alert("True");
}
if (false) {
  alert("False");
}

// f.
if ("car" < "cat") {
  alert("car is smaller than cat");
}

// Q6
var eng = +prompt("Enter English numbers");
var math = +prompt("Enter Math numbers");
var urdu = +prompt("Enter Urdu numbers");
var marksObtained = eng + math + urdu;
var totalMarks = 300;
var percentage = (marksObtained / totalMarks) * 100;

alert(percentage + "%");
document.write("<br><h1>Marks Sheet</h1>");
var percent = +prompt("Enter your percentage");

if (percent >= 80 && percent < 100) {
  document.write(
    "<br> Total Marks: ",
    totalMarks,
    "<br>Marks Obtained: ",
    marksObtained,
    "<br>Percentage: ",
    percentage
  );
  document.write("<br>Grade: A-one", "<br> Remarks: Excellent");
} else if (percent >= 70 && percent < 80) {
  document.write(
    "<br> Total Marks: ",
    totalMarks,
    "<br>Marks Obtained: ",
    marksObtained,
    "<br>Percentage: ",
    percentage
  );
  document.write("<br>Grade: A", "<br>Remarks: Good");
} else if (percent >= 60 && percent < 70) {
  document.write(
    "<br> Total Marks: ",
    totalMarks,
    "<br>Marks Obtained: ",
    marksObtained,
    "<br>Percentage:",
    percentage
  );
  document.write("<br>Grade: B", "<br>Remarks: Need to improve");
} else if (percent >= 50 && percent < 60) {
  document.write(
    "<br> Total Marks: ",
    totalMarks,
    "<br>Marks Obtained: ",
    marksObtained,
    "<br>Percentage: ",
    percentage
  );
  document.write("<br>Grade: Fail ", "<br>Remarks: Sorry");
}

// Q7
var secretNumber = Math.floor(Math.random() * 10) + 1;
var guess = parseInt(prompt("Guess the secret number (between 1 and 10):"));
if (guess === secretNumber) {
  alert("Bingo! Correct answer.");
} else if (guess + 1 === secretNumber || guess - 1 === secretNumber) {
  alert("Close enough to the correct answer.");
} else {
  alert("Sorry, incorrect guess. The correct number was " + secretNumber + ".");
}

// Q8
var number = parseInt(prompt("Enter a number:"));
if (number % 3 === 0) {
  alert(number + " is divisible by 3.");
} else {
  alert(number + " is not divisible by 3.");
}

// Q9
var number = parseInt(prompt("Enter a number:"));
if (number % 2 === 0) {
  alert(number + " is an even number.");
} else {
  alert(number + " is an odd number.");
}

// Q10
var temperature = parseFloat(prompt("Enter the temperature:"));
if (temperature > 40) {
  alert("It is too hot outside.");
} else if (temperature > 30) {
  alert("The Weather today is Normal.");
} else if (temperature > 20) {
  alert("Today’s Weather is cool.");
} else if (temperature > 10) {
  alert("OMG! Today’s weather is so Cool.");
} else {
  alert("The temperature is extremely cold!");
}

// Q11
var num1 = parseFloat(prompt("Enter the first number:"));
var num2 = parseFloat(prompt("Enter the second number:"));
var operation = prompt("Enter the operation (+, -, *, /, %):");
var result;
if (operation === "+") {
  result = num1 + num2;
} else if (operation === "-") {
  result = num1 - num2;
} else if (operation === "*") {
  result = num1 * num2;
} else if (operation === "/") {
  if (num2 === 0) {
    result = "Cannot divide by zero!";
  } else {
    result = num1 / num2;
  }
} else if (operation === "%") {
  result = num1 % num2;
} else {
  result = "Invalid operation!";
}
alert("Result: " + result);

// Chapter 9 - 11 USER INPUT & CONDITIONAL STATEMENT End

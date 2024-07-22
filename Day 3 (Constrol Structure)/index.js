//Program to check if the number is positive, negative or zero
const number = 15;
if (number > 0){
    console.log("number is positive");
}
else if (number < 0){
    console.log("number is negative");
}
else {
    console.log("number is zero");
}

//Program to check if the person is eligible for vote
const age = 18;
if (age >= 18){
    console.log("Person is eligible for vote.");
}
else {
    console.log("Person is not eligible for vote.");
}


//program to find the largest number using nested if-else statement
const num1 = 10;
const num2 = 20;
const num3 = 15;

if (num1 > num2) {
    if (num1 > num3) {
        console.log(num1 + " is the largest number");
    } else {
        console.log(num3 + " is the largest number");
    }
} else {
    if (num2 > num3) {
        console.log(num2 + " is the largest number");
    } else {
        console.log(num3 + " is the largest number");
    }
}



//Program to find the day of the week using switch case
let dayNumber = 2; 

let dayName;

switch (dayNumber) {
    case 1:
        dayName = "Monday";
        break;
    case 2:
        dayName = "Tuesday";
        break;
    case 3:
        dayName = "Wednesday";
        break;
    case 4:
        dayName = "Thursday";
        break;
    case 5:
        dayName = "Friday";
        break;
    case 6:
        dayName = "Saturday";
        break;
    case 7:
        dayName = "Sunday";
        break;
    default:
        dayName = "Invalid day number. Please enter a number between 1 and 7.";
}

console.log(`The day of the week is: ${dayName}`);


//Grade Assignment Script with Switch Case
let score = 49;

switch (true) {
  case score >= 90:
    console.log("A+");
    break;
  case score >= 80:
    console.log("A");
    break;
  case score >= 70:
    console.log("B");
    break;
  case score >= 60:
    console.log("C");
    break;
  case score >= 50:
    console.log("D");
    break;
  default:
    console.log("F");
}

//Leap Year Checker Script with multiple Condition
let year = 2020;
if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
  console.log(year + " is a leap year.");
} else {
  console.log(year + " is not a leap year.");
}
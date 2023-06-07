// In the exercises below, write your own code where indicated to achieve the desired result.
// One example is already completed. Your task is to complete any remaining prompt.
// Make sure to run the file in your command line using `node <filename>.js`


// -------------------
// PART 1: Comparing variables
// -------------------

var numberTeachers = 4
var numberStudents = 20
var stringTeachers = "4"
var numberDogs = 0

// EXAMPLE: log the result of the comparison: is numberTeachers greater than numberStudents?
console.log("Is numberTeachers greater than numberStudents?", numberTeachers > numberStudents);
// this should log: "Is numberTeachers greater than numberStudents?" false

// YOU DO: log the result of the comparison: is numberTeachers strictly equal to stringTeachers?
console.log(numberTeachers === numberStudents);
// this should log: false

// YOU DO: log the result of the comparison: is numberTeachers not equal to numberStudents?
console.log(numberTeachers !== numberStudents);
// this should log: true

// YOU DO: log the result of the comparison: is numberStudents greater than or equal to 21?
console.log(numberTeachers >= numberStudents);
// this should log: false


// #-------------------
// PART 2: Articulating what you are doing
// #-------------------

// For the following prompts, you will be given a line of code and your task is to type out a comment,in English, explaining what that line of code is doing, including what the comparison will evaluate to.

var friends = 6;
var siblings = 2; 
console.log(friends > siblings); 
// YOU DO: Explain. 
//This will output "true" because the variable "friends" is equal to 6 while the variable "siblings" is equal to 2. 
// In my own words this line is asking: "Is 6 greater than 2?" 6 is greater than 2, the terminal must output "true".

var attendees = 9;
var meals = 8;
console.log(attendees !== meals);
// YOU DO: Explain.
//This will output "true" because the variable attendees is equal to 9 while the variable "meals" is equal to 8.
//In my own words this line is asking: "Is 9 not equal to 8?" Since 9 does not equal 8, the terminal must output "true".


// #-------------------
// PART 3: Logical Operators
// #-------------------

var isHungry = true;
var finishedHomework = false;

// EXAMPLE:
// Determine if the user is hungry and has completed their homework
console.log(isHungry && finishedHomework);
// Determine if the user is hungry or has completed their homework
console.log(isHungry || finishedHomework);

var lovesToPlay = true;
var lovesDogPark = false;
var lovesTreats = true;
var age = 1;

// YOU DO:
// Determine if the dog loves to play and loves treats
console.log(lovesToPlay && lovesTreats);

// YOU DO:
// Determine if the dog loves to play or loves the dog park
console.log(lovesToPlay || lovesDogPark);

// YOU DO:
// Determine if the dog loves to play and is a puppy
// HINT: Use the age variable and assume that a puppy is less than 2 years old
console.log(lovesToPlay && (age < 2));
// Declare and Use Variables

var studentName = "Mario Mario"; //  A variable named studentName and assign it a string value.
var studentAge = 25; //  A variable named studentAge and assign it a numeric value.
var isEnrolled = true; // A variable named isEnrolled and assign it a boolean value.

console.log(studentName); 
console.log(studentAge); 
console.log(isEnrolled); 

//  Demonstrate Data Types

const courseName = "NES64"; // String: A text value.
var courseYear = 1985; // Number: An integer or floating-point number.
const isFree = false; // Boolean: true or false.
var courseClasses = ["Toadstools and You", "Mastering the Wall Jump", "Princess Rescue 101"]; // Array: A collection of values (e.g., ["apple", "banana", "cherry"]).
const instructor = new Object();  // Object: An entity with properties (e.g., { firstName: "John", lastName: "Doe" }).
instructor .name = "Toad";
instructor .age = 38;

console.log(courseName); 
console.log(courseYear); 
console.log(isFree); 
console.log(courseClasses); 
console.log(instructor.name); 
console.log(instructor.age); 

// Use Basic Operators

// Arithmetic Operators: Addition (+), Subtraction (-), Multiplication (*), and Division (/).

console.log(20 + 10); // Addition
console.log(40 - 30); // Subtraction
console.log(60 * 60); // Multiplication
console.log(80 / 10); // Division

// Comparison Operators: Greater than (>), Less than (<), Equal to (===), and Not equal (!==).

console.log(20 > 10); // Greater than
console.log(40 < 30); // Less than
console.log(60 === '60'); // Equal to
console.log(80 !== 10); // Not equal

// Logical Operators: AND (&&), OR (||), and NOT (!).

console.log(isFree && isEnrolled); // AND (&&)
console.log(isFree || isEnrolled); // OR (||)
console.log(!isFree); // NOT (!)
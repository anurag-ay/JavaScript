 // Lec 4

// Putting comment is the best practice

// My fisrt java script code
console.log('Hello World');

// Module 2 Basics


// Variable Lec 1
// Don't use the reseverd name as varibles
// They must me meaningful
    // Must not start with numbers
    // cannot contain a space of hyphen 

    // What is Camale Notation (convetion used in js to declare name of variable)
    //they are case sensitive
    // you can declare the varible name in one line or in multiple line
            // best practice is to declare in separate lines
let name= 'Anurag'; // string 
console.log(name);


// Lec 2 Constants 
console.log('Lec 2');

const interestRate = 0.3;
//interestRate = 1;
console.log(interestRate);

// Lec 3 Premitive Types
console.log('Lec 3')


// What kind of values we define to variable

// 2 type Primitive and Reference Type

//Primitive Type
  //String
  //Number
  //Boolean
  //Undefined
  //Null


let nameNew = 'Anurag'; // string literal
let age = 30; // Numbert literal
let isApproved = false; // Boolean
let firstName = undefined; // it is type as well as value
let lastName = null;
let selectedColor = null; // we will reasign in future


// Lec 4 Dynamic Typing

//In Dynamic typing language we can change the dataypes of variable at run time
console.log('Lec 4');

let name3 = 'Anurag';
console.log('type of name is = ',typeof (name3));
name3 = 4;
console.log('type of name is =', typeof (name3));

// Note in java scrip we have all number as type number such as integers, float etc.


//Lec 5 Objects

console.log('Lec 5');

// Reference type catergory have

    // Object
    // Array
    // Functions

// What is object ?
    // Real world Entity


// first way to declare properties of let say a person

let name4 = 'Anurag';
let age2 = 30;

// Second way to declare the same thing is an object

// Object Declaration

let person = {
    // conatain key value pair like in python dic
    name4 : 'Anurag', //separated by colan and comma.
    age :22
};

console.log(person);

// Working with obect properties (2 ways)

// . Notation (it is used to access the property of an object)

person.name4 = 'Yadav';
console.log(person.name4);

// Bracket Notaion 
person['name4'] = 'Anurag2'
console.log(person.name4);

// Which notation is better ?
  // . notation is consise (default choice)
  // {} when we don't know which propety can user choose at run time.

let selection = 'name';
person['selection'] = 'Ram';

// Lec 6 Arrays
console.log('Lec 6')
// Sometime we might deal with the list of objects Ex- list of products in the shopping cart, list of colors that user can select.

// In these situtaion we use arrays

// Declaration of array

let selectionColor = ['red', 'blue'];

console.log(selectedColor);

// we use the index to acces the element in the array.

// Note in JavaScript array elemets as well as length of array is dynamic means it can contain hetrogenous items.

// Array is an object in JS.
selectionColor[2] = 'green';
console.log(selectionColor[0]);

// length of  array

console.log(selectionColor.length);


// Lec 7 Functions

// We can resuse the fuctionality of the fuction throughout the program.
console.log('Lec 7 Fuctions')

// Declaring fuction

// Perfoming task 
function greet(name) { // fuction signature, name is parameter. 
    console.log('Hello '+ name); // + for concatanation
}

// Calling fuction
greet('Anurag') // here Anurag is Argument

greet('Anurag 2')


// Lec 8 Types of Fuctions
console.log('Lec 8 Types of fuction')

// Calcualate a value.

function square(number) {
    return number*number
}

let number = square(2)
console.log(number)

// Another way
console.log('Square of 8 is ' + square(8))


// Module 3 Operator
console.log('Module 3 Operator')

//Lec 1 JS Operators

console.log('Lec 1 JS Operators')

// Type of Operators in JS
    // Airthmetic
    // Assignment
    // Comparison
    // Logical
    // Bitwise

// Lec 2 Airthmetic Operator
console.log('Lec 2 Airthmetic Operator')


// console.log(x + y);
// console.log(x - y);
// console.log(x * y);
// console.log(x / y);
// console.log(x % y);
// console.log(x ** y); //Exponent

// Increment And decriment Operator

let x = 10;
let y = 3;

console.log(x++);
console.log(x);

// Decrement
console.log(--x)

// Lec 3 Assignment Operator
console.log('Lec 3 Assignment Operator')

let x2 = 100;
x2 = x2 + 5;
x2 += 5;

x2 = x * 3;
x *= 3;

//Lec 4 Comparison Operators
console.log('Lec 4 Comparison Operators')

let x3 = 1;

// Relational Operator
console.log(x3>0)
console.log(x3>=1)
console.log(x3<1)
console.log(x3<=1)
console.log(x3 <= 1)
// Equality operator
console.log(x3===1)
console.log(x3 !== 1)

// Lec 5 Equality Operators


console.log('Lec 5 Equality Operators')

// Strict Equality operator (Type + value)
// both operators and value should match to be true.

console.log(1 == 1)
console.log('1'== 1)

// Lose Equality

console.log(1 == 1)
console.log('1' == 1)

// Lec 6 Ternary Operator
console.log('Lec 6 Ternary Operator')

// If a custormer has more than 100 points,
// They  are a 'gold' customer otherwise,
// They are a 'silver' customer.

let points = 100;
let type = points > 100 ? 'gold' : 'silver';
console.log(type);

// Lec 7 Logical operators with not Boolean
console.log('Lec 7 Logical operators with not Boolean')

// Logical AND (&&)  return true if both operands are true

console.log(true && true)

// Real world use case of &&

let highIncome = true
let goodCreditScore = true;
let eligibleForLoan = highIncome && goodCreditScore

console.log(eligibleForLoan)

// Logical OR (||)

// Logical NOT (!)

// Lec 8 Logical Operators with Non- Boolean

console.log('Lec 8 Logical Operators with Non- Boolean')


// Falsy (false) // falsy value
    // Undefined
    // null
    // 0
    // false
    // ' '
    // NaN
// Anything that is not False -> is Truthy

console.log(false || true)

console.log(false || 'Anurag') // Truthy

console.log(false || 1) // Truthy

console.log(false || 1 || 2) // Short-circuting (in OR operator if you get once get True it will return true)

// Real world example (user has to pick a colour or default color)

let userColor = 'red'
// userColor= undefined // in this case default will be choosen
let defaultColor = 'blue'
// if user select value it will get that color otherwise defual color will be choosen

let currentColor = userColor || defaultColor

console.log(currentColor)

// Lec 9 Bitwise Operators
console.log('Lec 9 Bitwise Operators')

// 1= 00000001 // 8 bits (1 byte)
// 2= 00000010
// OR= 00000011 = 3
// ADN = 00000000

console.log(1 | 2) // biwise OR
console.log(1 & 2) // biwise OR

// real world example

// Read, write, Execute Permission
// For read = 00000100
// for read and write = 00000010
// All permissions = 00000111

const readPermission = 4;
const writePermission = 2;
const executePermission = 1;
let myPermission = 0;
myPermission = 0;
myPermission = myPermission | readPermission | writePermission

console.log(myPermission)

let message = (myPermission & readPermission) ? 'yes' : 'no';

console.log(message)


// OR- used for assigning the permission
// AND-> used for checking the permission

// Lec 10 Operator Precedence
console.log('Lec 10 Operator Precedence')

let x4 = 2 + 3 * 4;
console.log(x4)

// Lec 12 Exercise Swapping Variables

let a = 'red'
let b = 'blue'
console.log('a =',a, 'b =', b)
let temp;

temp = a;
a = b;
b = temp;

console.log('a =', a, 'b =', b)

// Module 4. Control Flow

console.log('4. Control Flow')

// Lec 1 if - else

console.log('Lec 1 if - else');

// Type of control flow
  // if and else
  // switch case

//If ans else

// if (condition) {
//     statement
// } else if (anotherCondition) {
//     statement
// } else if (yetAnotherConditon)
//     statement
// else
//     statement
    
let hour = 10;

if (hour>= 6 && hour <12) { 
    console.log('good morning')
} else if (hour>=12 && hour<=18) {
    console.log('Good Afternoon')
} 
else
    console.log('Good Evening')

// Lec 2 Switch case
// Note we usually use this when we have strictly boolean.

console.log('Lec 2 Switch case')

let role= 'guest';

switch (role) {
    case 'guest':
        console.log('Guest user')
        break;
    case 'moderator':
        console.log('Moderator user')
        break;
    
    default:
        console.log('Unknown User')
}

// Note: we can also write above conditions using if and else (Recommended)

// Lec 3 For

console.log( 'Lec 3 For Loop')

// for (inialization, condition, incrementExpression){
//     body
// }

// Printing Hello World 5 times
for (let i = 0; i < 5; i++){
    console.log('Hello World '+i)
}

// print odd number

// Lec 4 While loop

console.log('Lec 4 While loop')

let j = 0;

while (j <= 5) {
    console.log('Hello World')
    j++
}

// Lec 5 Do While Loop

console.log('Lec 5 Do While Loop')


// Note-> They execute at least one time. Even if the condition is false. In While loop condition must true for execution of loop.
let i = 0;
do {
    console.log('Hello world')
    i++
} while (i <= 5)

// Lec 6 Infinite Loop
console.log('Lec 6 Infinite Loop')

let k = 0

while (true) {
    console.log('hello world')
    k++
    if (k >= 10)
        break
}

// Lec 7 For In loop
console.log('Lec 7 For In loop')

const person2 = {
    name: 'Anurag',
    age: 22
}
// Dot notation
// Bracket notation 
for (let key in person2)
    console.log(key, person[key]) // bracket notation
    
const colors = ['red', 'green', 'blue'];

for (let index in colors) {
    console.log(index, colors[index]);
}

// Lec 8 For of Loop

// used to iterate in arrays
console.log('Lec 8 For of Loop')

for (let color of colors)
    console.log(color)

// Lec 9 Break and Continue

console.log('Lec 9 Break and Continue')

let i2 = 0

while (i2 <= 10) {
    // if (i == 6) break
    if (i % 2 === 0) {
        i++
        continue
    }
    console.log(i2)
    i2++
       
}

// Lec 10 Max of Two Numbers
console.log('Lec 10 Max of Two Numbers')

function max(a, b) {
    // if (a > b) return a
    // else
    //     return b
    return a > b ? a : b
}

console.log(max(5,6))

// Lec 11 Exercise Landscape or Portrait

console.log('Lec 11 Exercise Landscape or Portrait')

function isLandscape(width, height) {
    //return width > height ? true : false
    return(width>height)
}

console.log(isLandscape(23, 53))

// Lec 12 Exercise FizzBuzz

// divisble by 3 get Fizz
// divisible by 6 Buzz
// divisible by both 3 and 5 get fizz buzz
// if not a number return Not a Number

const num = 'name'

function fizzBuzz(num) {
    if(typeof(num)!=number) return 'Not a Number'
    if (num % 3 === 0) return 'Fizz'
    else if (num % 5 == 0) return 'Buzz'
    else if(num % 3===0 && num %5 ===0) return 'FizzBuzz'
}
console.log(fizzBuzz(num))

// Lec 13 Dermit Points



// Module 5 Objects


console.log('Module 5 Objects')

//Lec 1 Basics
console.log('Lec 1 Basics')

// Object orientd programming (OOP)
const circle = {
    radius: 1,
    location: {
        x: 1,
        y: 1
    },

    isVisible: true,

    // draw: fuction {
    //     console.log('draw')
    // }     
}

// const circle2 = {
//     radius: 1,
//     location: {
//         x: 1,
//         y: 1
//     },

//     isVisible: true,

//     // draw: fuction {
//     //     console.log('draw')
//     // }     
// }

// Lec 2 Factory Function
console.log('Lec 2 Factory Fucntion')

// How to create factory functions
// Factory Fuctions-> just like factory produces objects Factory Fuction Produces Fuctions


// Funtion is for returning the object
function createCircle(radius) {
    return {
        // Hard coded values
        // radius: radius,// if key value are same we can remove value

        radius,
    
        // draw: fuction() {
        //     console.log('draw')
        // } 
        draw() {
            console.log('draw')
        }
 }
}

const circle1 = createCircle(1)
console.log(circle1)
const circle2 = createCircle(2)
console.log(circle2)

// Lec 3 Constructor Fuction

console.log('Lec 3 Constructor Fuction')

// Job of this function is to conturct function

// Camel Notation: oneTwoThreeFour
// Pascal Notation: OneTwoThreeFour

function Circle(radius) {
    // 'this' is a reference to a object using this fuction
    // this references empty object
    this.radius = radius
    this.draw = function () {
        console.log('draw')
    }
}
// using 'new' to create new object
 // new create empty object const x={}
 // it set 'this' to point circle3 object
 // and finally it return object from Circle fuction.
const circle3 = new Circle(1)

// Which pattern is good
// Ans. Both are good Patterns

// Lec 4 Dynamic Nature of Object

console.log('Lec 4 Dynamic Nature of Object')

//Dynamic Object-> Means once we create this we can always add new properties and also can remove exsitence properties


const circle4 = {
    radius:1
}

// adding new Properties to the object
circle4.color = 'yellow'
circle4.draw = function () {
    console.log('circle4')
}

console.log(circle4)

// Removing Properties from the Circle

delete circle4.color
delete circle4.draw

console.log(circle4)

// Notice we used const keyword  but we can change the content of it, but we can't assign circle4 to the new object

// ex= circle4{}

// Lec 5 Constructor Property

// every object in java script have property called constructor that refrence the fuction that is used to create that object

console.log('Lec 5 Constructor Property')

function createCircle(radius) {
    return {
        radius,
        draw() {
            console.log('draw')
        }
 }
}
const circle6 = createCircle(1)

function Circle(radius) {
    this.radius = radius
    this.draw = function () {
        console.log('draw')
    }
}

const another = new Circle(1)

// another.constructor
// circle.cosntructor
// built in constructor fuction f Oject()

let x6 = {}
// let x = new Object();

// Built in constuctor in java Script

// new String(); // we use '', "", `` literals
// Boolean(); // we use true , false
// new Number() // 1,2 3..

// Lec 6 Fuctions are Object

console.log('Lec 6 Fuctions are Object')

function Circle(radius) {
    this.radius = radius
    this.draw = function () {
        console.log('draw')
    }
}

//Circle.name
//Circle.lenght -> No. of  Arguments
//Circle.constructor -> this constructor fuction is used to create this object

// Ex-> we can do it manually
// Using Built in Constructor Function()

// Internally represeted like this
const Circle7 = new Function('radius', `
this.radius = radius
this.draw = function () {
    console.log('draw')
}
`) // backtic for multiple lines

//calling the

const circle8 = new Circle7(1)

// varuous Methods
    // Circle7.call

// Circle7.call({},1) == cosnt another= new Circle7(1)
    
    //Circle7.apply
//Circle.apply({}, [1,2,3]) // Passing in array.

// Lec 7 Valus VS Reference Types
console.log('Lec 7 Valus VS Reference Types')

    // Value Types
        // Number
        // String
        // Boolean
        // Symbol
        // Undefined
        // Null
    // Reference Types
        // Object
        // Fuctions
        // Array

// Value Type
// p and q are independent variable
let p = 10
let q = p

x = 20

// Reference Type

let X = { value: 10 }
let Y = X

X.value = 20

// fuction

let Number = 10
function increase(Number) {
    Number++
}
increase(Number);
console.log(Number)

let obj = {value: 10}
function increase(obj) {
    obj.value++
}
increase(obj);
console.log(obj)

// Note: primitive(Values types) are copied by there values and Reference types are pointed by there address

// Lec 8 Enumerating Properties of an Object
console.log('Lec 8 Enumerating Properties of an Object')

// In this we gonna use how to use for in and for of loop to itrate over object

const Circle2 = {
    radius: 1,
    draw() {
        console.log('draw')
    }
}

for (let key in Circle2) {
    console.log(key, Circle2[key])
}

// Note for of loop only works on itrables such as arrays and maps

// for (let key of Circle2) {
//     console.log(key)
// }

// acssecing the keys
for (let key of Object.keys(Circle2)) {
    console.log(key)
}

// accessing the key- value pair
for (let entry of Object.entries(Circle2)) {
    console.log(entry)
}

//Object.

// checking if a given object contain particular method or propety
if ('radius' in circle) console.log('yes')

// Lec 9 Cloning an Object

console.log('Lec 9 Cloning an Object')


const Circle3 = {
    radius: 1,
    draw() {
        console.log('draw')
    }
}

const another2 = {}

for (let key in Circle3)
    another2[key] = Circle3[key]

// equivalent to :-
//another2['radius'] = Circle3[key]

console.log(another2)

// this technique of cloning is old

// Method second way (Good way)

const another3 = Object.assign({}, Circle3);
console.log(another3)

// you can also pass non empty object

const another4 = Object.assign({
    color: 'yellow'
}, Circle3);
console.log(another4)

// Third Way to clone

// spered operator (...)
const another5 = { ...Circle3}
console.log(another5)

// Lec 10 Garbage Collection

// In some laguages we have to allocate and deallocate memory to objects manually

// But in JavaScript in is allocation and deallocation happend automatically by using garbage collection.

console.log('Lec 10 Garbage Collection')

// Lec 10 Math Object

console.log('Lec 10 Math Object')

// Math.floor
// Math.ceil
// Math.random
// Math.pi
// Math.round
// Math.max
// Math.min
// and many more

// Lec 12 String Object

console.log('Lec 12 String Object')

// In JavaScript we have two kind of Strings

// String primitive
const message2 = 'h1'

// message2. // javascript automatically wraps this in string objects

// String Object
const str = new String('hello')

console.log(typeof(message2))
console.log(typeof (str))

// Popular String Methods
        //srt_name.lenght
        //str[0], str[1]
        //str.includes('my')
        //srt.startsWtith('This')
        //srt.endsWith('e')
        //srt.indexOf('my')
        //srt.replace('first', 'second')
        //srt.toUpperCase
        //str.toLowerCase
        //srt.trim()-> remove white space
        //str.trimLeft()
        //str.split('')


// Escape Notation in Java Script

        // ex single quote \' in sting
        // \n-> new line
        // 

// Lec 13 Template Literals


// First (ugly method to create a customise string)

const st =
    `This is my/n\'first\'message`

// Object {} literals
// Boolean literals true, false
// stirng literals '', ""
// Template Literals (ES6) ``

const goodString = `This is my 
'first' message`

console.log(goodString)

// This is useful to send  email to users

//ex -
    const string2 = 
    `Hi Anurag,
    Thankyou for joining my mailing list
    
    Regards,
    Anurag`

console.log(string2)
    
// Adding place holders-> adding name Dynamically.

//Old method
// const name = 'av'
// const message = 'Hi'+ name+ ',\n'


// New Method
const name2= 'Anurag'
const string3 = 
    `Hi ${name2} ${3+5},
    Thankyou for joining my mailing list
    
    Regards,
    Anurag`

console.log(string3)
    

// Lec 14 Date Object
console.log('Lec 14 Date')

const current_date = new Date()
const date1 = new Date('May 11 2018 09:00')

const date2 = new Date(2018, 4, 11, 6, 0)

// Get Methods and Set Methods
//current_date.get // Methods
current_date.setFullYear(2017);

console.log(current_date.toDateString())
console.log(current_date.toTimeString())
console.log(current_date.toISOString())
















































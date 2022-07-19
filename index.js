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

// function createCircle(radius) {
//     const circle={
//         // Hard coded values
//         // radius: radius,// if key value are same we can remove value

//         radius,
    
//         // draw: fuction() {
//         //     console.log('draw')
//         // } 
//         draw() {
//             console.log('draw')
//         }
//     }
//     return circle
// }


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

// Lec 15 Exercise Address Object
console.log('Lec 15 Exercise Address Object')

const Address = {
    street:"Gandhi Marg",
    city:"Lucknow",
    zipCode:"226003",
}

function showAddress(Address) {
    for (let key in Address)
        console.log(key,Address[key])
}

showAddress(Address)

// Lec 16 Exericise Factory and constructor Fuction

console.log('Lec 16 Exericise Factory and constructor Fuction')

// Using factory fuction

function Address2(street, city, zipCode){
    return {
        street,
        city,
        zipCode
    }
}

let new_address= Address2('Gandhi Marg', 'Lucknow', 226003)

function showAddress2(Address2) {
    for (let key in Address2) {
        console.log(key, Address2[key])
    }
}

showAddress2(new_address)


// Cosntructor Fuction

function Address3(street, city, zipCode) {
    this.street = street
    this.city = city
    this.zipCode= zipCode
}

// Lec 17 Object Equality

console.log('Lec 17 Object Equality')


let address1 = new Address3('a','b','c')
let address2 = new Address3('a', 'b', 'c')

let address3 = address2 // here they are pointing to same memory location

function Address3(street, city, zipCode) {
    this.street = street
    this.city = city
    this.zipCode= zipCode
}

// same properties
// function areEqual(address1, address2) {
    
// }
// same references
function areSame(address1, address2) {
    return address1=address2
}

// Lec 18 Exrecise Blog post Objects

let post = {
    title: 'a',
    body: 'b',
    author: 'c',
    views: 10,
    Comment: [
        { author: 'a', body: 'b' },
        {author: 'c', body: 'd'},
    ],
    isLive: true
}
console.log(post)

// Lec 19 Exercise-> Cosntructor Fuction

function Post(title, body, author) {
    this.title = title
    this.body = body
    this.author = author
    this.view = 0
    this.Comments = []
    this.isLive=false
}
console.log(new Post('a', 'b', 'c'))

//Exercise 20 Price Range Objects

let priceRanges = [
    {
        label: '$',
        tooltip: 'Inexpensive',
        minPerPerson: 0,
        maxPerPerson:10
    },
    {
        label: '$$',
        tooltip: 'Moderate',
        minPerPerson: 11,
        maxPerPerson:20
    },
    {
        label: '$$$',
        tooltip: 'Expensive',
        minPerPerson: 21,
        maxPerPerson:50
    }
]

let restautrants = [
    {averagePerPerson:5}
]

// Module 6 Arrays
console.log('Module 6 Arrays')

// Lec 1 Introduction

    // Operations on arry
        // Adding new elements
        // Finding elements 
        // Removing elementes
        // Splitting arrays
        // Combining arrays

// Lec 2 Adding element in array

console.log('Lec 2 Adding element in array')

const numbers = [3, 4]

// Adding element

//End
numbers.push(5, 6)
console.log(numbers)

// Beginning

numbers.unshift(1,2)
console.log(numbers)

// Middle or at any position
numbers.splice(2,0,'a','b')
console.log(numbers)

// Lec 3 Finding elements in array (Primitive)
console.log('Lec 3 Finding elements in array (Primitive')

// finding the element

const arrnum = [1, 2, 3,1, 4]

console.log(arrnum.indexOf(3)) // second parameter from where search will begin
console.log(arrnum.lastIndexOf(1))

// is array contain elements
console.log(arrnum.lastIndexOf(1) !== -1)
console.log(arrnum.includes(1))

// Lec 4 Finding elements (Reference Type)
console.log('Lec 4 Finding elements (Reference Type)')

const courses = [
    {id: 1, name: 'a'},
    {id: 2, name: 'b'}
]

// here includes method will not work because they are of refrence type

// console.log(courses.includes({id: 1, name: 'a'}))


// callback fuction(or predict fuction)
const course= courses.find(function (course) {
    return course.name === 'a'
})

console.log(course)

const index= courses.findIndex(function (course) {
    return course.name === 'a'
})
console.log(index)


// Lec 5 Arrow Fuction
console.log('Lec 5 Arrow Fuction')


// In ES6 we have better way to do the same thing as above Lec

// Old Method
const course1= courses.find(function (course) {
    return course.name === 'a'
})

console.log(course)

// More than one parameter
const course2= courses.find((course) =>{
    return course.name === 'a'
})

// Single parameter
const course3= courses.find(course=>{
    return course.name === 'a'
})

// No parameter
const course4= courses.find(()=>{
    return course.name === 'a'
})

// If Fuction is single line of code
const course5= courses.find(()=> course.name === 'a'
)

// Lec 6 Removing Elemnets

console.log('Lec 6 Removing Elemnets')

const arrnum1 = [1, 2, 3, 4]

// remove last element
const last= arrnum1.pop()
console.log(arrnum1)

// Beginning
const first = arrnum1.shift()
console.log(arrnum1)

// Midlle or at any position
arrnum1.splice(2,2) // -> starting index, # of elements
console.log(arrnum1)

// Lec 7 Emptying an Array
console.log('Lec 7 Emptying an Array')


let arrnum2 = [1, 2, 3, 4]

// Solution 1
arrnum2 = []
console.log(arrnum2)

// Solution 2

arrnum2.length = 0;
console.log(arrnum2)

// Solution 3
arrnum2.splice(0, arrnum2.length)
console.log(arrnum2)

// Solution 4

while (arrnum2.length > 0)
        arrnum2.pop()

console.log(arrnum2)

// Lec 8 Combinig ad Slicing Arrays
console.log('Lec 8 Combinig ad Slicing Arrays')

// Combine two arrays

const first1 = [1, 2, 3, 4]
const second2 = [4, 5, 6]

const combined = first1.concat(second2)
console.log(combined)

// Sclicing the Array

const slice = combined.slice(2,4)
console.log(slice)

// Another way of slicing
const slice1 = combined.slice(3)
console.log(slice1)

// Third Way
const slice2 = combined.slice()
console.log(slice2)

// Lec 9 Spred Operator
console.log('Lec 9 Spred Operator')

// Better way to combine the two array
// ... is spred operator
// also add more elements in array easily while using spread operator

const combined1 = [...first1,'a',...second2,'b']
console.log(combined1)

// const copy = combined1.slice()
// other way of copying an array

const copy  = [...combined1]
console.log(combined1)

// Lec 10 Iterating an Array 
console.log('Lec 10 Iterating an Array ')


// using for of loop

const arrnum3 = [1, 2, 3]
for (let num of arrnum3)
    console.log(num)

// using For each Method

// when we call forEach() method this fuction will be called for every element of an array
arrnum3.forEach(function(num){
    console.log(num)
})

// using arrow fuction
arrnum3.forEach((num)=>{
    console.log(num)
})
arrnum3.forEach(num=>{
    console.log(num)
})

arrnum3.forEach((num,index)=>{
    console.log(num,index)
})

// Lec 11 Joining Array
console.log('Lec 11 Joining Array')

const arrnum4 = [1, 2, 3]
const joined = arrnum4.join(',')
console.log(joined)

// Split method for string
const string = 'This is my First message'
const parts = string.split(' ')
console.log(parts)

// Joining the string back
const combine2 = parts.join('-')
console.log(combine2)

// This is used in URL to create URL Slug

// Lec 12 Sorting Arrays

console.log("Lec 12 Sort an Array")

const arrnum5 = [2, 3, 1]
arrnum5.sort()
console.log(arrnum5)

// reversing the array
arrnum5.reverse 
console.log(arrnum5)

// Sorting objects

const Courses = [
    { id: 1, name: 'Node.js' },
    { id: 3, name: 'JavaScript'}

]

// Using arrow fuction
Courses.sort((a, b) => {
    // a<b
    // a>b
    // a===b

    if (a.name < b.name) return -1
    if (a.name > b.name) return 1
    return 0
})
console.log(Courses)

// Lec 13 Testing the Elements of an Array

const arrnum6 = [1, 2, 3]

// Checking if all number in array are positive
// checking all
const OnePositive = arrnum6.every(function(value){
    return value >= 0
})

console.log(OnePositive)

// checking some ( at least one)

const atleastOnePositive = arrnum6.some(function(value){
    return value >= 0
})
console.log(atleastOnePositive)

// Lec 14 Filtering an Array
console.log('Lec 14 Filtering an Array')

// retruning only the positive elemnts of an array

const arrnum7 = [1, -1, 2, 3]

const filtered= arrnum7.filter(function (value) {
    return value>=0
})

console.log(filtered)
// in real world scenario we use object so it may be required to filter those objects

// Lec 15 Mapping an Array
console.log('Lec 15 Mapping an Array')


const arrnum8= [1,-1,2,3]
let sum = 0

for (let n of arrnum8)
    sum += n
console.log(sum)

// using reduce Method

const sum1 = arrnum8.reduce((accumulator, currentValue) => {
    return accumulator+ currentValue
}, 0)
console.log(sum1)


const sum2 = arrnum8.reduce((accumulator, currentValue) => {
    return accumulator+ currentValue
})
console.log(sum2)

// other Method
const sum3 = arrnum8.reduce((accumulator, currentValue) => accumulator+ currentValue)
console.log(sum3)


// Lec 17 Exercise Array from Range

console.log('Lec 17 Exercise Array from Range')

const customArray = arrayFromRange(1, 4)
console.log(customArray)


function arrayFromRange(min, max) {
    const arr = []
    
    for (let i = min; i <= max; i++){
            arr.push(i)
    }
    return arr
}

console.log(arrayFromRange(-10, 6))

// Lec 18 Includes
console.log('Lec 18 Includes')

const arrnum9 = [1,2,3,4]
console.log(arrnum9.includes(1))

function Includes(array,num) {
    for (let n of array)
        if (n === num) return true
    return false
}

console.log(Includes(arrnum9, 1))

// Lec 19 Exercise Execpt
console.log('Lec 19 Exercise Execpt')

const arrnum10 = [1, 2, 3, 4]
const output = except(arrnum10, [1])
console.log(output)

function except(array, exluded) {
    const output = []
    
    for (let element of array)
        if (!exluded.includes(element))
            output.push(element)
    return output
}

// Lec 20 Exercise Moving an Element 
console.log('Lec 20 Exercise Moving an Element ')

const arrnum11 = [1, 2, 3, 4]

const output1 = move(arrnum11, 1,1)

console.log(output1)

//To Display error on the console
// console.error('Invalid')
function move(array, index, offset) {
    if (offset >= array.length) {
        console.error('Invalid Offeset')
        return
    }

    // first select the element on the given index than delete it and store it in a variable
    //Q How to delete the element on the given position in an array??

    const del= array[index]
    array.splice(index, 1) // -> starting index, # of elements to delete


    // second push that element to the offest position
    //Q How to push the element on the given postion in the array??
    array.splice(index + offset,0,del)

return array
}

// Lec 21 Exercise Count Occurences

const arrnum12 = [1, 2, 3, 4]

const count = countOccurences(arrnum12,1)

console.log(count)

function countOccurences(array, searchElement) {
    let count=0
    for (let n of array)
        if (n == searchElement)
            count++
    return count

    // array.reduce((accumulator, current) => {
    //     const Occurences = (current === searchElement) ? 1 : 0
    //     return accumulator + Occurences
    // },0)
}

// Lec 22 Get Max
console.log('Lec 22 Get Max')

const arrnum13 = [1, 2, 3, 4]

const max1= getMax(arrnum13)

console.log(max1)

function getMax(array) {
    // let max = array[0]
    // for (let i = 1; i < array.length; i++)
    //     if (array[i] > max)
    //         max = array[i]
    // return max   
    
    array.reduce((accumulator,current)=> {
        if (current > accumulator) return current
        
    return accumulator
    })
}

// Lec 23 Exercise Movies
console.log('Lec 23 Exercise Movies')

const Movies = [
    {title: 'a', year: 2018, rating: 4.5},
    {title: 'b', year: 2018, rating: 4.7},
    {title: 'c', year: 2018, rating: 3},
    {title: 'd', year: 2018, rating: 4.5}
]

// chaining
const titles = Movies
    .filter(m => m.year == 2018 && m.rating >= 4)
    .sort((a, b) => a.rating - b.rating
    // simple way
    // a < b => -1
    // a == b => 0
    // a > b => 1
)   .reverse()
    .map(m => m.title)
    
console.log(titles)

// Moudule 7 Fuctions
console.log('Moduele 7')


// Lec 1 Declaration vs Expression

console.log('Lec 1 Declaration vs Expression')

// Fuction Declaration

function walk() {
    console.log('walk')
}

// Named Fuction Expression

let run = function walk() {
    console.log('run')
}
//Anonymous Fuction Expression
let run2 = function() {
    console.log('run')
}
let x7 = 1

run2()

let move2 = run // Referencing to same fuction
move2()

// Lec 2  Hoisting
console.log('Lec 2  Hoisting')

// Fuction Declaration
walk()
function walk() {
    console.log('walk')
}

// Named Fuction Expression
// run3() we can't call it
let run3 = function walk() {
    console.log('run')
}


// Note(VI) = Javascript moves all the fuction declaration code on the top before executing the code called Hoisting

//Lec 3 Arguments

console.log('Lec 3 Arguments')

function sum7 (a, b) {
    return a + b // 1+ Undifined

}

// JS fuctions are dynamic in nature too

console.log(sum7(1,2)) // sum7(1), sum7(1,2,3,4)

// Argument Object for taking many arguments

function sum8() {
    
    let total = 0;
    for (let value of arguments)
        total+=value
    return total // 1+ Undifined

}

console.log(sum8(1, 2, 4, 32, 23, 32))

// Lec 4 Rest Operator
console.log('Lec 4 Rest Operator')

// Usin rest opearator (...args)

function sum9(...args) {
    
    console.log(args)
}

console.log(sum9(123, 24, 1, 12, 2, 12, 2, 12, 21, 2))

// Method to add all arguments
function sum10(...args) {
    
    return args.reduce((a,b)=> a+b)
}

console.log(sum10(123, 24, 1, 12, 2, 12, 2, 12, 21, 2))

// Caculate toatal cost of items in shopping carts

// Note(VI) -> we can't have any parameters after the rest operator that's why it is called so as rest opreator
function sum11(discount, ...prices) {
    const total = prices.reduce((a, b) => a + b)
    return total * (1-discount)
}
console.log(sum11(0.1, 24, 1, 12, 2, 12, 2, 12, 21, 2))

// Lec 5 Default Parameters
console.log('Lec 5 Default Parameters')

// Fuction with default parameters

// Note-> It is importan to assingn deafult parameter after defining one parameter as default
function interest(principal, rate=3.5, year=5) {

    // Method to set default value
    // rate = rate || 3.5
    return principal* rate/100*year
}

console.log(interest(10000, 3.3, 5))


// Lec 6 Getters and Setters
console.log('Lec 6 Getters and Setters')

const person3 = {
    firstName : 'Anurag',
    lastName: 'Yadav',
    //fullName: function(){}
    get fullName() {
        return `${person3.firstName} ${person3.lastName}`
    },
    set fulllName(value) {
        const parts = value.split('')
        this.firstName = parts[0]
        this.lastName= parts[1]
    }
}

// This is read only we can't change fullName of person
// other thing is we don't want to call fuction every time we wnat to use it as property
// getter and setter can do this

// Getters => Access Properties in objects
// Setters => change (mutate) them

console.log(person3.fullName)

// Lec 7 Try and Catch

console.log('Lec 7 Try and Catch')

const person4 = {
    firstName : 'Anurag',
    lastName: 'Yadav',
    //fullName: function(){}
    set fulllName(value) {
        if (typeof value !== 'string')
            // Exception(e)
            throw new Error('Value is not a string')
        const parts = value.split('')
        if (parts.length !== 2)
            throw new Error('Enter a first and last name')
        this.firstName = parts[0]
        this.lastName= parts[1]
    }
}

try {
    //person.fullName = null
    person.fullName = ''
}
catch (e) {
    alert(e)
}
console.log(person4.fullName)

// Lec 8 Local vs Global Scope

console.log('Lec 8 Local vs Global Scope')

function start() {
    // Local Scope
    const message= 'hi'
    if (true) {
        // Local Scope
        const another = 'bye'
    }
}

// Lec 9 Let vs Var

console.log('Lec 9 Let vs Var')

// let has limited scope and var(scope have within the fuction) have global scope

// var -> fuction scoped
// let, const-> block scoped

function start2() {
    for (let k = 0; k < 5; k++)
        console.log(k)
    
    console.log(k)
}
start2()

function start1() {
    for (var i = 0; i < 5; i++){
        console.log(i)
    }
    console.log(i)
}
start1()

// Global scoped
// var color = 'red' // used in window object(it is attached in window object)

// Local scope
// let age= 30

// Lec 10 The this keyword

console.log('Lec 10 The this keyword')

// this-> references the object that executing the current fuction

// method -> obj
// fuction -> global (window, global)

const video = {
    title: 'a',
    play() {
        console.log(this) // this references video object
    }
}
video.stop = function () {
    console.log(this)
}
video.stop()


function Video(title) {
    this.title = title
    console.log(this)
}
// if you call a fuction using new keyword this references to the empty object
const v = new Video('b')// {}


const video1= {
    title:'a',
    tags : ['a', 'b', 'c'],
        showTags(){
        this.tags.forEach(function(tag) {
            console.log(this.title, tag)
        }, this)
    }    
    
}

video1.showTags()

// Lec 11 Changing This
console.log('Lec 11 Changing This')

const video2= {
    title:'a',
    tags : ['a', 'b', 'c'],
    showTags() {
        const self = this
        this.tags.forEach(function(tag) {
            console.log(self.title, tag)
        }, this)
    }    
    
}
video2.showTags()

function playVideo() {
    console.log(this)
}

//playVideo.call({ name: 'Anurag' })
playVideo.apply({ name: 'Anurag' })

// returns the fuction
playVideo.bind({ name: 'Anurag' })()
playVideo()

const video3= {
    title:'a',
    tags : ['a', 'b', 'c'],
    showTags() {
        const self = this
        this.tags.forEach(function(tag) {
            console.log(this.title, tag)
        }.bind(this))
    }    
    
}
video3.showTags()

const video4= {
    title:'a',
    tags : ['a', 'b', 'c'],
    showTags() {
        const self = this
        this.tags.forEach(tag=> {
            console.log(this.title, tag)
        })
    }    
    
}
video4.showTags()

// Lec 12 Exercise Sum to Arguments

console.log(sum12(1, 2, 3, 4))

function sum12(...items) {
    return items.reduce((a,b)=> a+b)
}
// passing array
console.log(sum13([1,2,3,4]))
function sum13(...items) {
    if (items.length === 1 && Array.isArray(items[0]))
        items= [...items[0]]
    return items.reduce((a,b)=> a+b)
}

// Lec 13 Area of Circle

console.log('Lec 13 Area of Circle')

const circle9 = {
    radius: 1,
    get area() {
        return Math.PI*this.radius* this.radius
    }
}

console.log(circle9.area)

// Lec 14 Error Handling

// MODULE 2    
// Lec 2 Object Literals 
console.log('Lec 2 Object Literals')

// creating a circle object

const circle = {
    radius: 1,
    location: {
        x: 1,
        y: 0
    },

    draw: function () {
        console.log('draw')
    }
}

circle.draw()

// Lec 2 Fatories (Factory Fuction)

// factories fuction is used to create multiple objects using that factory fuction
console.log('Lec 2 Fatories')

// writing 3 methods to create factory fuction

// Method 1-> creating an object within the fuction returning it

function creatCircle0 () {
    const circle = {
        radius: 1,
        location: {
            x: 1,
            y: 2
        },
        draw: function () {
            console.log('draw')
        }
    }
    return circle
}

// Method 2-> directly returning the object from factory fuction

function creatCircle1() {
    return {
        radius: 1,
        location: {
            x: 1,
            y: 0
        },
        draw: function () {
            console.log('draw')
        }
    }
}

// Mehtod 3 Avoiding hard coded values istead of this we pass the values

function creatCircle2(radius) {
    return {
        radius: radius,
        location: {
            x: 1,
            y: 0
        },
        draw: function () {
            console.log('draw')
        }
    }
}

// Mehthod 4 -> ES6 style of decalring properties and methods inside the object

// Note -> when the name of parameter and variable are same we can skip the assigning of that variable to that particular object

// we  can also avoid writing fuction in order to crate variable

function creatCircle3(radius) {
    return {
        radius,
        location: {
            x: 1,
            y: 2
        },
        draw() {
            console.log('draw')
            console.log(radius)
        }
    }
}

// creating a cicle object from createCricle3 Factory fuction

const myCircle = creatCircle3(10)
myCircle.draw()

// Lec 4 Constructor

// It is also used to cosnturct object like factory fuction but in more elagant way

console.log(('Lec 4 Costructor'))
// it is preffered way to create fucitons

// Note -> Naming convention for constructor is (first letter will be Uppercase)

// What is 'this' key word in constructro fuction-> It is a refrence to the object accessing that constructor function.

// Note-> by defualt this points to a global object(Window Object is global object)

// 'New' Operator ->
        // 1. Create an empty object {}
        // 2. than it point this to that empty object
        // 3. Finally it return that object from Cosnturctor fuction

// Creating the constructor fuction


function Cricle(radius) {
    
    this.radius = radius
    this.draw = function () {
        console.log('draw')
    }
}

// Creating the object from cosnturctor fuction

const myCircle1 = new Cricle(1)

myCircle1.draw()

// Lec 5 Constructor Property

console.log('Lec 5 Cosntructor Property')

// Every object in java Script have porperty called Cosnturctor Property


console.log(myCircle1.constructor)

// it tells which constructor fuction is used to create that object

// example

        // new String()
        // new Boolean()
        // new Number()


// Lec 6 Fuction are Objects
console.log('Lec 6 Fuction are Objects')

// this Circle1 fuction is actully object
// Purple are methods and blue are attributes

function Circle1(radius) {
    
    this.radius = radius
    this.draw = function () {
        console.log('draw')
    }
}

// Using some members of Circle1 Object

// .name porperty
console.log(Circle1.name)
// .length -> number of arguments
console.log(Circle1.length)

// Important que is which consturctor fuction is used to create that Circle1 Obeject (which is acttually a constructor fuction itself)

console.log(Circle1.constructor)

// ans Built in Fuction named 'Function'

// Directly creating Cosntructor from its originator

const Circle2 = new Function('radius',`this.radius = radius
this.draw = function () {
console.log('draw')
}`
)

// using the Circle 2 cosntructor fuction to create a myCircle object

const myCircle2 = new Circle2(1)
myCircle2.draw()

// Members in Circle object2

// Using Call Method-> it is similar to new Circle2(1)
Circle2.call({}, 1)

// Using Apply method -> similar to Call method but it takes the arrays as an argument

Circle2.apply({}, [1, 3, 4])

// Lec 7 Value vs reference 
console.log('Lec 7 Value vs reference ')

// Value types
        // Number
        // String
        // Boolean
        // Symbols 
        // Undefined 
        // null 
// Refernce types
        // Object
        // Function
        // Array
        
// main differnce between primitive type and refernce type one is pass by value and another is pass by reference

// Example
let x = 10
let y = x

x = 20
// output: x = 20 , y = 10

// Reference type Example

let x1 = { value: 10 }
let y1 = x1

x.value = 20
// x.value -> 10
// y.value -> 10

// now creating a fuction which use refrence type varables

let obj = {value :10}

function increament(obj) {
    obj.value++
}

increament(obj)
console.log(obj)










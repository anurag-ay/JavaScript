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

let obj = {value : 10}

function increament(obj) {
    obj.value++
}

increament(obj)
console.log(obj)

// Lec 13 Adding and removing Properties

console.log('Lec 13 Adding and removing Properties')

function Circle3(radius) {
    this.radius = radius
    this.draw = function () {
        console.log('draw')
    }
}

const myCircle3 = new Circle3(10)

// adding the property to the object

myCircle3.location = {x:1}
// other way using bracket notation
myCircle3['location'] = { x: 1 }


// removing property from object

delete myCircle3.location
// using bracket notation
delete myCircle3[location]

// Lec 14 Enumerating properties of Object
console.log('Lec 14 Enumerating properties of Object')

function Circle4(radius) {
    this.radius = radius
    this.draw = function () {
        console.log('draw')
    }
}

const myCircle4 = new Circle4(10)

// using for in loop

for (let key in myCircle4) {
    console.log(key, myCircle4[key])
}

// another method to get all the keys
const keys = Object.keys(myCircle4)
console.log(keys)

// finding the key in object

if ('radius' in circle)
    console.log('Circle has a radius.')

// Lec 15 Abstraction
console.log('Lec 15 Abstraction')


function Circle5(radius) {
    this.radius = radius
    // defining the new function
    this.computeOptimumLocation = function () {
        console.log('s')
    }
    this.draw = function () {
        this.computeOptimumLocation()
        console.log('draw')
    }
}

const myCircle5 = new Circle5(10)
myCircle5.draw()
// Note if use use abstraction efficiettly it will decrease the correction of code everywehere in porgram


// Lec 16 Private properties and Methods
console.log('Lec 16 Private Properties and Method')

// Making Method private

function Circle6(radius) {
    this.radius = radius
    // defining the new function
    // using let to make variables private
    let defaultLocation = {x: 0, y: 0}
    let.computeOptimumLocation = function (factor) {
        console.log('s')
    }
    this.draw = function () {
        let x,y
        computeOptimumLocation(0.1)
        // this.radius
        console.log('draw')
    }
}
// Clouser in Javascript nested fuction can access the variable of outer fuciton

// Lec 17 Getter and Setter

console.log('Lec 17 Getter and Setter')


function Circle7(radius) {
    this.radius = radius
    let defaultLocation = {x: 0, y: 0}
    let.computeOptimumLocation = function (factor) {
        console.log('s')
    }
    this.draw = function () {

        console.log('draw')
    }

    // Getter and setter
    Object.defineProperty(this, 'defaultLocation', {
        get: function () {
            return defaultLocation
        },
        // setter
        set: function (value) {
            if (!value.x || !value.y)
                throw new Error('Invalid Location')
            defaultLocation = value
        }
    })
}

// Lec 19 Exercise Stop Watch
console.log('Lec 19 Exercise Stop Watch')

// Module 3 Prototype

// Lec 1 Lec 1 Inheritence
console.log('Lec 1 Inheritence')

//let say their are two object circle and square and have common function computeOptimumLocation() without inheritenct we need to write it again and again and have to modify in both classes if we moidify some fuctionality

// so to reduce that we can use inheritence

// shape <- class can be inherited by both circle and square class

// shape called as parent (base, super) class
// relation is called as is-A a relationhsip

// circle, square -> derived class, parent class, sub class

// Note-> in javaScript we don't have classes

// Lec 2 Pototypical inheritence
// Method to implement inheritence
// prototype(parent)
console.log('Lec 2 Pototypical inheritence')

// Prototype is just a regular object in memory
// check it into empty object

// Lec3 Multilevel Inheritence
console.log('Lec 3 Multilevel Inheritence')
// Check it into array object

// Lec 4 Property Descriptor
console.log('Lec 4 Property Decriptor')
// Checkinng the prototype properties

let person = { name: 'Anurag' }
let objectBase = Object.getPrototypeOf(person)
console.log(objectBase)
let descriptor = Object.getOwnPropertyDescriptor(objectBase, 'toString')
console.log('descriptor')
// we can change the internal implementation of objects
Object.defineProperty(person, 'name', {
    writable :false
})

// Lec 5 Constructor Prototypes
console.log('Lec 5 Constructor Prototypes')

// Lec 6 Prototype vs Instance Members
























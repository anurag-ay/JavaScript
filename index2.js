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




















// Module 6 Classes
console.log("MOdule 6 Classes")


// Lec 1 ES6 Classes

console.log("ES6 Classes")

class circle10{
    constructor(radius){
        this.radius = radius;
    }

    draw(){
        console.log(this.radius)
    }
}

const c = new circle10(1);
c.draw()

// Lec 2 Hoisting

console.log("Lec 2 Hoisting")
// Note in Fuction expression fuctions are not hoisted

// example

// hoisted

sayHello(); // we can call above it becaus fuctions are hoisted
function sayHello() { }

// Expression are not hoisted

// goodbye() // this will not work because this is encorporated in fuction expression
//const saygoodbye = fuction(){ }


// Note class declaration and expressions are not hoisted
// Lec 3 Static Methods
console.log("lec 3 Static Methods")

class Circle{

    constructor(radius) {
        this.radius = radius;
    }

    // Instance Method
    // they are acessible to the Objects or Instances
    draw() {
        
    }

    // Static Method
    // static Method are only accesible to class and used as utility Method
    static parse(str) {
        const radius = JSON.parse(str);
        return new Circle(radius);
    }
}

const cir = Circle.parse('"{radius:1}"');
console.log(circle);

// real world example is Math built in Object of Java Script.


// Lec 4 This keyword
console.log("Lec 4 This Keyword")

const Circle8 = function () {
    this.draw = function() {console.log(this)}
}

const c1 = new Circle8();

// Method call
c1.draw();

//or
// we can do this beacause this is poiting to the c1 object

// Note-> by default this is pointing to the window object
// we can prevent this using strict mode
// 'use strict';
const draw = c1.draw;
draw()

// Note in Classes by default body of the class is execute in strict mode.

class Circle9 {
    draw1() {
        console.log(this)
    }
}

const c2 = new Circle9()
const draw1 = c2.draw1;
draw1();

// Lec 5 Private members using symbols
console.log("Lec 5 Private members using symbols")
// Method 1 conentional method using _ before name of identifier
// Method 2 using symbols
const _radius = Symbol()
const _draw = Symbol()

class Circle11{
    constructor(radius) {
        this[_radius]=radius
    }
    [_draw]() {
    
    }
}
const c3 = new Circle(1)
// symbol method is not fool proof
// we can still access the member of the class
// const key = Object.getOwnPropertySymbols(c)[0]
// console.log(c[key])

// Lec 6 Private members using weak map
console.log("Lec 6 Private members using weak map")
// weak map->they are the dictornary keys are object and values can be anything.
// in this keys are weak thats why it is called weak map if no reference provided to the keys they will act as a grbage collector.

const _radius1 = new WeakMap();
// another private member

const _move = new WeakMap()



class Circle12{
    constructor(radius) {
        //this.radius = radius;

        // for setting the value
        _radius1.set(this, radius);

        // _move.set(this, function () {
        //     console.log('move', this)
        // })
        // because arrow fuction by default use this which is inherited from the same fuction
        _move.set(this,()=> {
            console.log('move', this)
        })
    }
    draw() {
        //getting value
        console.log(_radius.get(this))
        
        // getting value
        _move.get(this)();
        console.log('draw')
    }
}
const c4 = new Circle12(1)
console.log(c4)
console.log(c4.draw)

// lec 7 Getter and Setter

console.log("lec 7 Getter and Setter")

const _radius2 = new WeakMap();

class Circle13{
    constructor(radius) {
        _radius1.set(this, radius);

    }

    // to access method as property

    get radius() { 
        return radius().get(this)
    }
    set radius2(value){
            if (value <= 0) throw new Error('Invalid radius')
            _radius2.set(this,value)
        }
}
const c5 = new Circle13(1);
console.log(c.radius)

console.log("Lec 8 Inheritence")

class Shape{
    constructor(color) {
        this.color = color
    }

    move() {
        console.log('move');
    }
}

class Circle14 extends Shape{
    constructor(color, radius) {
        super(color)
        this.radius= radius
    }
    draw() {
        console.log('draw')
    }
}
const c6 = new Circle14('red', 1);
console.log(c6)



// Lec 8
console.log("Lec 8 Method Riding")

class Shape1{
    move() {
        console.log('move');
    }
}

class Circle15 extends Shape1{
    // if you want to use parent move method
    // super.move()
    // Method overriding
    move() {
        console.log('circle move');
    }
}
const c7= new Circle15()
console.log(c7)



// Lec 9
console.log("Lec 9 Exerice")

// Implement stack
    // push
    // pop
    // peek


const _item = new WeakMap();
class Stack{
    constructor() {
        _item.set(this,[])
    }

    push(obj) {
        _item.get(this).push(ob);
    }
    pop() {
        if (_item.get(this).length === 0)
            throw new Error('stack is empty')
        return items.pop()
    }

    peek() {
        const items = _item.get(this)
        if (items.lenght===0)
            throw new Error('Stack is empty')
        return items[items.lenght - 1]
    }

    get count() {
        return _item.get(this).length
    }
}





// Module 6 Modules

// Lec1
console.log("Lec1 Modules")

// Modularity-> breaking the software in small chunks of modules of code
// Benifits of Modularity
    // code Maintanibility
    // code Reusibility
    // abstraction

// types of module used
    // commonJS-> Nodejs
    // ES6 Module -> Browser



// Lec2

console.log("lec 2CommonJs Modules")

// importing from Circle module
const Circle16 = requre('./circle')

const c8= new Circle16(10)
c.draw()


// Lec3
console.log("lec 3 ES6 Modules")


// import { Circle } from './circle'
// const c9 = new Circle(10)
// c9.draw();

// Lec4
console.log("lec 4 ES6 tooling")
// transpiler-> translator + compiler use to convert javascript code to browser understandable code
// ex-> Bable
// Bundler-> it is responsible for bundle all the javascript file into one
// ex- webpack

// Lec5
console.log("lec 5 Babel")

// install bable and use of it

// Lec6
console.log("lec 6 Webpack")

// use of Webpack














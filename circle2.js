// implementation detail

const _radius = new WeakMap()

// Public Interface

// exporting in ES6
export class Circle{
    constructor(radius) {
        _radius.set(this, radius)
    }
    draw() {
        console.log('Circle with radius'+ _radius.get(this))
    }
}

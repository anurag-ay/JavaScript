// implementation detail

const _radius = new WeakMap()

// Public Interface

class Circle{
    constructor(radius) {
        _radius.set(this, radius)
    }
    draw() {
        console.log('Circle with radius'+ _radius.get(this))
    }
}

// exporting this module

module.exports= Circle
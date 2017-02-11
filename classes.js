class Shape {

    
    /** @param {String} shapeName  - name of the current shape*/
    constructor(shapeName) {
        this._shapeName = shapeName;
        console.log(`${shapeName} has has been created!`);
    }
    printName() {
        console.log(`I am ${this.shapeName}`);
    }

    static createShape() {
        return new Shape("CREATOR");
    }

    get shapeName() {
        console.log(`Returning shapename ${this._shapeName}`);
        return this._shapeName;
    }

    set shapeName(value) {
        console.log(`Setting shapeName to ${value}, current value is ${this.shapeName}`);
        this._shapeName = value;
    }
}

class Rectangle extends Shape {
    printName() {
        console.log("Calling super:");
        super.printName();
    }
}

var shape2 = Shape.createShape();
shape2.shapeName = 4;
console.log(shape2.shapeName)
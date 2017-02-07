class Shape {

    /** @param {String} shapeName  - name of the current shape*/
    constructor(shapeName) {
        var asd = 3;
        this.allowedShapes = ['square', 'rectangle', 'circle'];
        this.shapeName = shapeName;
        console.log(`${shapeName} has has been created!`);
    }
    _validateShape() {
        console.log(asd);
        return this.allowedShapes.indexOf(this.shapeName) != -1;
    }
}
var shape = new Shape(323423432);
console.log(`Shape is ${shape._validateShape() ? 'valid' : 'invalid'} `);
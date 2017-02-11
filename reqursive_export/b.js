/**
 * Created by andrew on 2/9/17.
 */
let a = new (require('./a'))();

class B {
    constructor() {
        console.log("B created");
    }
}

module.exports = B;
let b = new (require("./b"))();

class A {
    constructor() {
        console.log("A created");
    }
}

module.exports = A;

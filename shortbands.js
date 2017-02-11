function lol({a,b}) {
    console.log(`a is ${a}, b is ${b}`)
}
var obj = {a: 3, b: 4};

function koko() {
    return {a: 5, b: 7}
}
lol(obj);
let {a: d} = koko();
console.log(d);
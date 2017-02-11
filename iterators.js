let fibonacci = {
    [Symbol.iterator]() {
        let pre = 0, cur = 1;
        return {
            next () {
                [ pre, cur ] = [ cur, pre + cur ];
                return { done: false, value: cur }
            }
        }
    }
};


for (let d of fibonacci) {
    console.log(d);
    if (d> 100) break;
}

function* g1() {
    yield 2;
    yield 3;
    yield 4;
}

function* g2() {
    yield 1;
    yield* g1();
    yield 5;
}

var iterator = g2();

console.log(iterator.next()); // {value: 1, done: false}
console.log(iterator.next()); // {value: 2, done: false}
console.log(iterator.next()); // {value: 3, done: false}
console.log(iterator.next()); // {value: 4, done: false}
console.log(iterator.next()); // {value: 5, done: false}
console.log(iterator.next()); // {value: undefined, done: true}

function *count(start, end, step) {
    while (start <= end) {
        yield start;
        start += step;
    }
}
console.log('----');
let c = count(1, 10, 1);
for (let i of c){
    console.log(i);
}

function *fibonacci2(to) {
    let cur = 1;
    let prev = 0;
    while (cur+=prev < to) {
        yield cur;
        prev = cur;
    }
}
console.log('----');
let res = [...fibonacci2(100)];
console.log(JSON.stringify(res));
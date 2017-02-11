function *fibonacci2(to) {
    let cur = 1;
    let prev = 0;
    while ((cur+=prev) < to) {
        yield cur;
        prev = cur;
    }
}


let numbers = [ ...fibonacci2(100) ]
console.log(numbers);
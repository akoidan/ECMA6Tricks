function minimumTime(numOfParts, parts) {
    let sum = 0;
    const sortFn = (a, b) => a - b;
    while (parts.length > 1) {
        parts.sort(sortFn);
        let a = parts.shift();
        parts[0] = parts[0] + a;
        sum += parts[0];
    }
    return sum;
}

// console.log([4,3,6].shift())
console.log(minimumTime(0, [8,4,6,12]));

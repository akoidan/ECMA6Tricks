function cellCompete(newState, days) {
    for (let day = 0; day < days; day++) {
        let oldState = [...newState];
        oldState.forEach((hourse, i) => {
            let start = i === 0 ? 0 : oldState[i - 1];
            let end = i === oldState.length - 1 ? 0: oldState[i+1];
            newState[i] = start ^ end;
        })
    }
    return newState;
}


function generalizedGCD(num, arr) {
    for (let v = Math.min(...arr); v > 0; v --) {
        if (!arr.some(a => a % v)) {
            return v;
        }
    }
}

console.log(generalizedGCD(5, [75,50,100]));

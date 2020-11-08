function optimalUtilization(cap, fg, bg) {
    if (!fg.length || !bg.length) {
        return []
    }
    bg.sort((a, b) => a[1] - b[1]);
    fg.sort((a, b) => a[1] - b[1]);

    let f = 0;
    let b = bg.length - 1;
    let prevSum = 0;
    let pair = [[]];
    while (b >= 0 && f < fg.length) {
        let sum = fg[f][1] + bg[b][1];
        if (sum > cap) {
            b--;
        } else {
            if (sum > prevSum) {
                pair = [];
                prevSum = sum;
            }
            pair.push([fg[f][0], bg[b][0]]);
            f ++;
        }
    }
    return pair;
}


console.log(optimalUtilization(
    20,
    [[1,16], [2, 18], [3, 18]],
    [[1, 2], [2, 2]]
))

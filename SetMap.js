/**
 * Created by andrew on 2/11/17.
 */

let s =new Set();
s.add(3).add(4).add(3);


for (let e of s.values()) {
    console.log(e);
}
// console.log(s);
// console.log(s.has(3));

let m = new Map();
m.set(3, 4);
m.set('3', 4);
m.set(5, 6);
// console.log(m);
let k = {3: 4, 3: 5};
// console.log(k);

for ([k, v] of m) {
    console.log(k, v);
}

let i = new Float32Array();
i[0] = 3;
i[1] = 4;
console.log("-".repeat(50));
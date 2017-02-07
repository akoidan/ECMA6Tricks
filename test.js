"use strict";
let a = 3;
const pi = 3.14;
console.log(JSON.stringify(foods("a", "b")));
function foods(favFood, badFood) {
    return {
        favFood,
        badFood
    }
}
console.log('---------');
let bestSitesInTheWorld = ['pychat.org', 'twitter.org', 'vk.com', 'google.com', 'koko.com', 'linkedin'];
let [first, second, ,fourth, ...others] = bestSitesInTheWorld;

console.log(first, others, fourth);

console.log('---------');
var orders = {
    orderId: 3,
    userId: 1,
    driverId: 2,
    userName: 4,
    loginName: 'sdf'
};
var {loginName:login, userName: name} = orders;
var {loginName, userName} = orders;
console.log(userName);
console.log('---------');
var letters =  ["a", "b", "c", "d"];
var numbers = [1, 2, 3 ,4];
var lettersAndNumbers = [...letters, ...numbers];
var mix = ['a1', 'b2', 'c3'];
lettersAndNumbers.push(...mix);
console.log(lettersAndNumbers);
console.log('---------');
(function paramsExample(a, b, ...rest) {
    console.log(rest);
})(1, 2, 3, 4, 5, 6, 7, 8);
console.log('---------');
(function defaultValueExample(a = 3){
    console.log(a);
})();
console.log('---------');

/**
 * Created by andrew on 2/4/17.
 */
var lambdaExample = (arg1, arg2) => {
    let res = arg1 + arg2;
    return res;
};

var simpleLambda = (arg1, arg2) => arg1 + arg2;
var oneValue = arg1 => arg1* 2;

console.log(lambdaExample(3,4), oneValue(3), oneValue(6));
console.log('---------');

function tests() {
    this.lives = 0;
    this.lol = 4;
    console.log(this.lives);
}

tests();

function Game(attackPower, defencePower) {
    this.ATTACK = attackPower;
    const DEFENCE = DE
    this.health = 100;
    this.defence = function (damage) {
        this.health -= damage;
    }
    setTimeout( () => {
        if (this.health < 100 ){
            this.health++;
            console.log("Regenerated health to ", this.health)
        }
    } ,1000)
}
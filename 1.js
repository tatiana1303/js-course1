'use strict';
//1
function getDigitRank(num){
    if (Number.isInteger(num) && num > 0 && num < 1000){
        return{
            units: num % 10,
            tens: Math.floor(num/10)%10,
            hundreds: Math.floor(num/100),
        }
    } else{
        console.log("число должно быть целым и находиться в диапазоне от 0 до 999");
        return{};
    }
}
let num = +prompt("Введите целое число, находящееся в диапазоне от 0 до 999");
console.log(getDigitRank(num));



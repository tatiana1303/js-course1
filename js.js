'use strict';
//пример 1
let a = 1, b = 1, c, d;
//префиксная форма инкремента вернет значение а+1 = 1+1 = 2
c = ++a;
alert(c); // ответ: 2
//пример 2
// постфиксная форма инкремента вернет значение b+1 до увеличения т.е. 1
d = b++;
alert(d); //ответ: 1
//пример 3
// 2 +3 =5,переменная а из предыдущего значения равна 2, 
//в этом выражении с помощью префиксного икремента возвращается значение 3;
c = 2 + ++a;
alert(c); //ответ: 5
//пример 4
d = 2 + b++;
alert(d); //ответ: 4  переменная b из предыдущего занчения равна 2, в этом выражении с помощью постфиксного инкремента возвращено старое значение 2, 2+2=4;
alert(a); //3 перезаписанная переменная a
alert(b); //3 перезаписанная переменная b

//2
// 1 + (2 * 2) = 5
// сначала идет подсчет в скобках, переменная а = 2, 2 умножается на 2, затем прибавляется единица, в результате 5
let a1 = 2;
let x = 1 + (a1 *= 2);
console.log(x); //5

//3
let a2 = +prompt("Введите первое число");
let b2 = +prompt("Введите второе число");
if (a2 >= 0 && b2 >= 0){
    alert(a2 - b2);
} else if (a2 < 0 && b2 < 0){
    alert(a2 * b2);
} else if(a2 > 0 && b2 < 0 || a2 < 0 && b2 > 0){
    alert(a2 + b2);
}

//4
let n = 4;
let z = 3;
/**
 * сумма двух чисел
 * @param {number} n первое слагаемое
 * @param {number} z второе слагаемое
 */
function sum(n, z){
    return(n + z);
}
/**
 * вычитание одного числа из другого
 * @param {number} n уменьшаемое 
 * @param {number} z вычитаемое
 */
function sub(n, z){
    return(n - z);
}
/**
 * функция деления
 * @param {number} n делимое 
 * @param {number} z делитель
 */
function div(n, z){
    return(n / z);
}
/**
 * сфункция умножения
 * @param {number} n множимое 
 * @param {number} z множитель
 */
function multy(n, z){
    return(n * z);
}
 console.log(sum(n, z));
 console.log(sub(n, z));
 console.log(div(n, z));
 console.log(multy(n, z));

//5
/**
 * Функция которая в зависимости от значения оператора выполняет одно из арифметических действий
 * @param {number} arg1 первый аргумент
 * @param {number} arg2 второй аргумент
 * @param {string} operation название операции (+, -, /, *)
 */
function mathOperation(arg1, arg2, operation){
    switch (operation){
        case '+':
            return sum(arg1, arg2);
        case '-':
            return sub(arg1, arg2);
        case '/':
            return div(arg1, arg2);
        case '*':
            return multy(arg1, arg2);
    }
}
console.log(mathOperation(6, 4, '+'));
console.log(mathOperation(6, 4, '-'));
console.log(mathOperation(6, 4, '/'));
console.log(mathOperation(6, 4, '*'));
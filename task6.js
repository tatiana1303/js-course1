'use strict';

let money = +prompt("Укажите колличество денег, которое вы хотите положить на счет");
let moneyStr = String(money);
let lastNumeralofMoneyStr = moneyStr.charAt(moneyStr.length-1);
switch (lastNumeralofMoneyStr){
    case '1':
        alert(`Ваша сумма в ${money} рубль успешно зачислена`);
        break;
    case '2':
    case '3':
    case '4':
        alert(`Ваша сумма в ${money} рубля успешно зачислена`);
        break;
    case '5':
    case '6':
    case '7':
    case '8':
    case '9':
    case '0': 
        alert(`Ваша сумма в ${money} рублей успешно зачислена`);
        break;
}
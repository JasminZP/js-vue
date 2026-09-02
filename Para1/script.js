// alert("Pavlo")
// let vik = 18;
// const name = ' Pavlo';
// console.log(name);
// console.log(vik);
//
// vik = 120;

//
// const name = 'Churka';
// let number = 0;
// let isTrue = false;
//
// console.log(typeof name);

//
// + -
// * / %
// **
//
// const name = prompt("What is your name?");
// let num1 = prompt("Vvedit pershe chislo");
// let num2 = prompt("Vvedit druge chislo");
// console.log(Number(num1) + Number(num2));
// console.log((num1 - 0) + (num2 - 0));
//
// let num3 = 100;
// console.log(typeof String(num3));
//

let productName = prompt("Enter your product name");
let price = Number(prompt("Enter your price"));
let quantity = Number(prompt("Enter your quantity"));
let delivery = Number(prompt("Enter your delivery"));

let total = price * quantity + delivery;

console.log(`Zagalnya vartist za tovar ${productName} stanovit ${total} grn`);


alert('Tovar: ' + productName +
"\nVartist tovariv: " + total);

let znijka = Number(prompt("Enter your znijka in %"));
alert("Zi znihkoyu vash tovar koshtue: " + (price*quantity*znijka/100 + delivery));
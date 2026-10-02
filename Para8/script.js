// function name () {
//
// }

// function showMessage() {
//     alert("Pavlo")
// }
//
// showMessage();

// function showInfo() {
//     console.log("V gostyah u Mariyki")
//     console.log("Ya Pavlo")
// }
// function showProducts(name, price, count) {
//     console.log("Mariyka prodae: " + name + "\nЗа оптовою ціною: " + price)
//     console.log("Загальна вартість: ", price*count)
// }
// showInfo();
// showProducts("Pralnyi poroshock", 800, 3);

// function calculateTotal(price, count) {
//     return price * count;
// }
//
// let total = calculateTotal(800, 3);
// console.log(total);

// function discount(total) {
//     if (total >= 5000) {
//         return 10;
//     }
//     else {
//         return 0;
//     }
// }
// let discount1 = discount(1000);
// let discount2 = discount(6000);
//
// function gpt(price, count) {
//     return price * count;
// }
//
// function gd(total) {
//     if (total >= 10000) {
//         return 15;
//     }
//     else if (total >= 5000) {
//         return 10;
//     }
//     else if (total >= 2000) {
//         return 5;
//     }
//     else {
//         return 0;
//     }
// }
// function gdv(total, percent) {
//     return total*percent/100;
// }
//
// function getFinalPrice(total, dis) {
//     return total - dis;
// }
//
// let productName = +prompt("Enter product name");
// let price = +prompt("Enter product price");
// let count = +prompt("Enter count");
//
// let producttotal = gpt(price, count);
// let productdiscount = gd(producttotal);
// let disvalue = gdv(producttotal, productdiscount);
// let finalprice = getFinalPrice(producttotal, disvalue);
//
// console.log(`Фінальна ціна ${productName}: ${finalprice}`);


// ДОМАШКА ДОМАШКА ДОМАШКА ДОМАШКА ДОМАШКА ДОМАШКА ДОМАШКА ДОМАШКА ДОМАШКА ДОМАШКА ДОМАШКА ДОМАШКА ДОМАШКА
function calculateTickets(price, count) {
    return price * count;
}

function getTicketDiscount(total) {
    if (total >= 1500) {
        return 15;
    }
    else if (total >= 1000) {
        return 10;
    }
    else if (total >= 500) {
        return 5;
    }
    else {
        return 0;
    }
}

function calculateTicketDiscount(total, percent) {
    return total * percent / 100;
}

function calculateTicketFinalPrice(total, discount) {
    return total - discount;
}


let ticketPrice = +prompt("Enter ticket price");
let ticketCount = +prompt("Enter ticket count");

let total = calculateTickets(ticketPrice, ticketCount);
let discountPercent = getTicketDiscount(total);
let discount = calculateTicketDiscount(total, discountPercent);
let finalPrice = calculateTicketFinalPrice(total, discount);

console.log(`Загальна вартість: ${total} грн`);
console.log(`Знижка: ${discountPercent}%`);
console.log(`Сума знижки: ${discount} грн`);
console.log(`Кінцева сума до сплати: ${finalPrice} грн`);
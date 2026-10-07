// let prices = [912, 124, 64623, 4]
// console.log(prices[1]);
//
// prices[2] = "pavlo";
//
// console.log(prices.length);
// let sum = 0;
// for(let i = 0; i < prices.length; i++){
//     console.log(price[i]);
//     sum += prices[i];
// }
// console.log(sum);
// function getTotalPrices(prices) {
//     let sum = 0;
//     for (let i = 0; i < prices.length; i++) {
//         sum += prices[i];
//     }
//     return sum;
// }

// ______________________________________________________
// let price = [231, 3, 54, 345, 2, 34]
// let result = getTotalPrices(prices);
// console.log(result);
// let sum = 0;
// let limit = 50;
// function finalPavlo(price) {
//     for (let i = 0; i < price.length; i++) {
//         if (price[i] > 50) {
//             console.log(price[i])
//             sum += price[i];
//         }
//     }
// }
// let result = finalPavlo(price);
//_____________________________________________________
let N = 0;
let mass = [];
function finalPrice() {
    N = +prompt("Кількість чисел")
}
function Masiv(N) {
    for (let i = 1; i <= N; i++) {
        let chislo = +prompt("Vvedit chislo")
        if (chislo % 2 === 0) {
            mass += chislo;
        }
    }
}
finalPrice();
Masiv(N);
console.log(mass)
// ________________________________________________________
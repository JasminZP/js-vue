// let mass = ["Ann", "Oleksandra", "Olesia", "PavloVelykyi"];
// mass.push("Maria");
// console.log(mass);
// mass.pop();
// mass.unshift("Pavlo");
// mass.shift();
//
// let mass2 = mass.slice(1, 3)
// console.log(mass2);
//
// let mass = ["Ann", "Oleksandra", "Olesia", "PavloVelykyi"];
// let deleted = mass.splice(2, 1);
// console.log(deleted);
//
// mass.splice(1, 0, "Seva")
// mass.splice(0, 1, "Tetiana", "Nadiia")
// console.log(mass);

//
// let event = ["Ann", "Oleksandra", "Olesia", "PavloVelykyi"];
// function add(name) {
//     if (name.trim() === "") {
//         alert("Please")
//         return;
//     }
//     let exists = false;
//     for (let i = 0; i < event.length; i++) {
//         if (event[i] === name) {
//             exists = true;
//         }
//     }
//     if (exists) {
//         alert("Uchasnik vje zareestrovaniy " + name)
//         return;
//     }
//     event.push(name);
//     alert("Zareestrovano uchasnika " + name)
// }
// function remove(name) {
//     let index = -1;
//     for (let i = 0; i < event.length; i++) {
//         if (event[i] === name) {
//             index = i;
//             break;
//         }
//     }
//     if (index === -1) {
//         alert("Nema takogo pavla")
//     }
//     else {
//         event.splice(index, 1);
//         alert("Uchasnika vidaleno")
//     }
// }
// function showAll() {
//     alert(`Vsogo uchasnikiv: ${event.length}`)
// }
//
// add("Slavik")
// remove("Pavlo")
// showAll();

// let event = ["Ann", "Oleksandra", "Olesia", "PavloVelykyi"];
//
// for(let i = 0; i < event.length; i++){
//     console.log(event[i]);
// }

// for (let i of event) {
//     console.log(i);
// }
//
// event.forEach(function(name, index) {
//     console.log(index);
// })


// ДЗ ДЗ ДЗ ДЗ ДЗ ДЗ ДЗ ДЗ ДЗ ДЗ ДЗ ДЗ ДЗ ДЗ ДЗ ДЗ ДЗ ДЗ ДЗ ДЗ ДЗ ДЗ ДЗ ДЗ ДЗ ДЗ ДЗ ДЗ ДЗ ДЗ ДЗ ДЗ ДЗ ДЗ ДЗ ДЗ ДЗ ДЗ ДЗ ДЗ ДЗ ДЗ ДЗ ДЗ ДЗ ДЗ ДЗ ДЗ ДЗ ДЗ ДЗ
// 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
// let mass = ["Марія", "Олександра", "Влад", "Іван", "Павло"];
//
// mass.push("Влада");
// mass.unshift("Всеволод");
// mass.pop();
// mass.splice(2, 1, "Єгор");
//
// for (let i = 0; i < mass.length; i++) {
//     console.log((i + 1) + ". " + mass[i]);
// }
//
// for (let name of mass) {
//     console.log(name);
// }
//
// mass.forEach(function(name) {
//     console.log(name.length);
// });

// 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
let prices = [120, 250, 180, 300, 150, 400];

let sum = 0;

for (let i = 0; i < prices.length; i++) {
    sum += prices[i];
}

console.log(sum);

let count = 0;

for (let price of prices) {
    if (price >= 200) {
        count++;
    }
}

console.log(count);

let average = sum / prices.length;

console.log(average);

let sum2 = 0;

prices.forEach(function(price) {
    sum2 += price;
});

console.log(sum2);

let count2 = 0;

prices.forEach(function(price) {
    if (price >= 200) {
        count2++;
    }
});

console.log(count2);
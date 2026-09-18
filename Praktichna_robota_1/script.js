// TicketFlow - якщо чесно, назва погана. П.С. не знижуйте оцінку

const kino = 150;
const teatr = 220;
const concert = 350;

let choice = +prompt("Оберіть подію: \n" + "1 - Кіно\n" + "2 - Театр\n" + "3 - Концерт");

while (Number.isNaN(choice) || choice < 1 || choice > 3) {
    alert("Будь ласка, введіть коректний номер події.");
    choice = +prompt("1 - Кіно\n" + "2 - Театр\n" + "3 - Концерт");
}

let price;

switch (choice) {
    case 1:
        price = kino;
        break;

    case 2:
        price = teatr;
        break;

    case 3:
        price = concert;
        break;
}


let tday = +prompt("Виберіть день події:\n" + "1 - будній\n" + "2 - вихідний");

while (Number.isNaN(tday) || tday < 1 || tday > 2) {
    alert("Будь ласка, введіть коректний тип дня.");
    tday = +prompt("1 - будній\n" + "2 - вихідний");
}

if (tday === 2) {
    price = price * 1.15;
}

let numoftick = +prompt("Кількість квитків (1-6)");

while (Number.isNaN(numoftick) || numoftick < 1 || numoftick > 6) {
    alert("Будь ласка, введіть коректну кількість квитків.");
    numoftick = +prompt("Кількість квитків (1-6)");
}


let processed = 0;
let free = 0;
let discount = 0;
let discountpr = 0;
let fullprice = 0;
let fullpricepr = 0;
let total = 0;


for (let i = 1; i <= numoftick; i++) {

    let age = +prompt(`Введіть вік для квитка №${i}`);

    if (age === -1) {
        break;
    }

    while (Number.isNaN(age) || age < 0 || age > 120) {
        alert("Некоректний вік.");
        age = +prompt(`Введіть вік для квитка №${i}`);
    }


    let ticketPrice = price;



    if (age >= 0 && age <= 5) {
        free++;
        processed++;
        alert("Квиток безкоштовний.");
        continue;
    }


    if (age >= 6 && age <= 12) {
        ticketPrice = price * 0.5;
        discount++;
        discountpr += ticketPrice;
    }

    else if (age >= 13 && age <= 17) {
        ticketPrice = price * 0.8;
        discount++;
        discountpr += ticketPrice;
    }

    else if (age >= 18 && age <= 25) {

        let student = prompt("Чи є студентський квиток?\n" + "1 - Так\n" + "2 - Ні");

        if (student === "1") {
            ticketPrice = price * 0.9;
            discount++;
            discountpr += ticketPrice;
        }
        else {
            ticketPrice = price;
            fullprice++;
            fullpricepr += ticketPrice;
        }
    }

    else if (age >= 26 && age <= 59) {
        ticketPrice = price;
        fullprice++;
        fullpricepr += ticketPrice;
    }

    else if (age >= 60) {
        ticketPrice = price * 0.75;
        discount++;
        discountpr += ticketPrice;
    }


    processed++;
    total += ticketPrice;
}

if (total > 1000) {
    total = total * 0.95;
}


alert("Оброблено квитків: " + processed + "\n" +
    "Безкоштовних: " + free + "\n" +
    `${discount} зі знижкою: ` + discountpr + "\n" +
    `${fullprice} за повною ціною: ` + fullpricepr + "\n" +
    "Загальна сума: " + Math.round(total*10)/10 + " грн");

// Math.round я піддивився у допоміжках у вебштормі, бо виходило число.999999999999994 через знижку у 5% і тд
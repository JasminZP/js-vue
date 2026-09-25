const Num = 7;
let cost = 0;
let pravto = 0;
let electro = 0;
let sum = 0;
let max = 0;
for(let i = 1; i <= 7; i++) {
    let tip = +prompt("тип автомобіля:\n" +
        "1 — звичайний;\n" +
        "2 — електромобіль");
    let god = +prompt("Кількість годин стоянки")
    if (god === 0) {
        break;
    }

    if (god < 0 || god > 12) {
        continue;
    }
    if (tip === 1) {
        cost = god * 40;
        pravto ++;
    }
    else if (tip === 2) {
        cost = god * 30;
        electro ++;
        pravto ++;
    }
    else {
        alert("Помилка");
        continue;
    }
    if (god > 5) {
        cost -= 20 * god;
    }
    if (cost >= max) {
        max = cost;
    }
    sum += cost;
}
alert(`Правильно оброблено: ${pravto} \n
Електромобілів: ${electro}\n
Загальна сума: ${sum} \n
Найбільша оплата: ${max}`)
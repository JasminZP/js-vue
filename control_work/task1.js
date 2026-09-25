let age = +prompt("Ваш вік")
let day = +prompt("Виберіть день: 1 — будній, 2 — вихідний")
let daycost = 0;
let totalcost = 0;
if (day === 1) {
    daycost = 200
}
else if (day === 2) {
    daycost = 250
}
if (Number.isNaN(day)) {
    alert("Не правильно введений день")
}
else if (Number.isNaN(age) || age <= 0 || age > 120) {
    alert("Неправильний вік")
}


if (age <= 7) {
    totalcost = 0
}
else if (age >= 8 && age <= 17) {
    totalcost = daycost * 0.5
}
else if (age >= 18 && age <= 59) {
    totalcost = daycost
}
else if (age >= 60) {
    totalcost = daycost - daycost*0.4
}
alert(`Вік: ${age} \n День: ${day} \n Результат: ${totalcost}`)
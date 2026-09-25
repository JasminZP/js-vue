let N = +prompt("колво учнів")
let sum = 0;
let simivish = 0;
let siminij = 0;
let max = 0;
for (let i = 1; i <= N; i++) {
    let ocinka = +prompt(`введіть оцінку номер ${i}`);
    if (ocinka <= 12 && ocinka > 0) {
        sum += ocinka

        if (ocinka >= 7) {
            simivish ++;
        }
        if (ocinka < 7) {
            siminij ++;
        }
        if (ocinka >= max) {
            max = ocinka;
        }
    }
    else {
        alert("Неправильна оцінка")
    }
}
let ser = sum/N;
alert(`Сума: ${sum}\n
Середня: ${ser}\n
Оцінок вишче 7: ${simivish}\n
Оцінок нижче 7: ${simivish}\n
Найбільша: ${max}`)
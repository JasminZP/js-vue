const pin = 2026;
let i = 4;
while (i > 1) {
    let pinkod = +prompt("Введіть пін код")
    if (pinkod === pin) {
        alert("Доступ дозволено")
        break;
    }
    else if (pinkod !== pin) {
        alert(`Залишилося ${i-2} спроб`)
    }
    i--;
}
if (i === 1) {
    alert("Доступ заблоковано")
}
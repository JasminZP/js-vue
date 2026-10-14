
let clubs = [
    { id: 1, name: "Програмування", category: "IT", price: 800, members: 15, active: true },
    { id: 2, name: "Футбол", category: "Спорт", price: 600, members: 20, active: true },
    { id: 3, name: "Малювання", category: "Мистецтво", price: 500, members: 12, active: false },
    { id: 4, name: "Шахи", category: "Інтелектуальний", price: 400, members: 10, active: true },
    { id: 5, name: "Танці", category: "Спорт", price: 700, members: 18, active: false }
];

let choice;

do {
    choice = prompt(
        "КАТАЛОГ ГУРТКІВ\n\n" +
        "1 - Показати всі гуртки\n" +
        "2 - Знайти гурток за ID\n" +
        "3 - Записати учасника\n" +
        "4 - Змінити статус набору\n" +
        "5 - Додати новий гурток\n" +
        "6 - Показати статистику\n" +
        "0 - Вихід"
    );

    if (choice === null) break;

    switch (choice) {
        case "1": {
            if (clubs.length === 0) {
                alert("Каталог порожній.");
            } else {
                let result = "";

                clubs.forEach(function (club) {
                    let status;

                    if (club.active === true) {
                        status = "Відкрито";
                    } else {
                        status = "Закрито";
                    }

                    result +=
                        "ID: " + club.id + "\n" +
                        "Назва: " + club.name + "\n" +
                        "Напрям: " + club.category + "\n" +
                        "Ціна: " + club.price + " грн\n" +
                        "Учасники: " + club.members + "\n" +
                        "Набір: " + status + "\n\n";
                });

                alert(result);
            }
            break;
        }

        case "2":
        case "3":
        case "4": {
            let id = +prompt("Введіть ID гуртка:");

            if (!Number.isInteger(id) || id <= 0) {
                alert("Введіть правильний ID.");
                break;
            }

            let foundClub = null;

            for (let club of clubs) {
                if (club.id === id) {
                    foundClub = club;
                    break;
                }
            }

            if (foundClub === null) {
                alert("Гурток не знайдено.");
                break;
            }

            if (choice === "2") {
                let status;

                if (foundClub.active === true) {
                    status = "Відкрито";
                } else {
                    status = "Закрито";
                }

                alert(
                    "ID: " + foundClub.id + "\n" +
                    "Назва: " + foundClub.name + "\n" +
                    "Напрям: " + foundClub.category + "\n" +
                    "Ціна: " + foundClub.price + " грн\n" +
                    "Учасники: " + foundClub.members + "\n" +
                    "Набір: " + status
                );
            }

            if (choice === "3") {
                if (foundClub.active === false) {
                    alert("Набір до цього гуртка закрито.");
                } else {
                    if (confirm("Записати учасника до гуртка " + foundClub.name + "?")) {
                        foundClub.members++;
                        alert("Учасника записано! Усього учасників: " + foundClub.members);
                    }
                }
            }

            if (choice === "4") {
                if (confirm("Змінити статус набору?")) {
                    foundClub.active = !foundClub.active;

                    let status;

                    if (foundClub.active === true) {
                        status = "відкрито";
                    } else {
                        status = "закрито";
                    }

                    alert("Набір " + status + ".");
                }
            }
            break;
        }

        case "5": {
            let name = prompt("Назва гуртка:");

            if (name === null || name.trim() === "") {
                alert("Назва не може бути порожньою.");
                break;
            }

            let category = prompt("Напрям гуртка:");

            if (category === null || category.trim() === "") {
                alert("Напрям не може бути порожнім.");
                break;
            }

            let price = +prompt("Вартість занять за місяць:");

            if (!Number.isFinite(price) || price < 0) {
                alert("Ціна не може бути від'ємною.");
                break;
            }

            let members = +prompt("Кількість учасників:");

            if (!Number.isInteger(members) || members < 0) {
                alert("Кількість має бути цілим невід'ємним числом.");
                break;
            }

            let newId = 1;

            for (let club of clubs) {
                if (club.id >= newId) {
                    newId = club.id + 1;
                }
            }

            clubs.push({
                id: newId,
                name: name.trim(),
                category: category.trim(),
                price: price,
                members: members,
                active: true
            });

            alert("Гурток додано! Його ID: " + newId);
            break;
        }

        case "6": {
            let activeCount = 0;
            let totalMembers = 0;
            let totalPrice = 0;

            for (let club of clubs) {
                if (club.active === true) {
                    activeCount++;
                }

                totalMembers += club.members;
                totalPrice += club.price;
            }

            let averagePrice = 0;

            if (clubs.length > 0) {
                averagePrice = totalPrice / clubs.length;
            }

            alert(
                "Усього гуртків: " + clubs.length + "\n" +
                "Відкритий набір: " + activeCount + "\n" +
                "Усього учасників: " + totalMembers + "\n" +
                "Середня вартість: " + averagePrice.toFixed(2) + " грн"
            );
            break;
        }

        case "0":
            alert("Роботу завершено.");
            break;

        default:
            alert("Неправильний пункт меню.");
    }
}
while (choice !== "0");

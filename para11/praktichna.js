let clubs = [
    {
        id: 1,
        name: "Програмування",
        category: "IT",
        price: 800,
        members: 15,
        active: true
    },
    {
        id: 2,
        name: "Футбол",
        category: "Спорт",
        price: 600,
        members: 20,
        active: true
    },
    {
        id: 3,
        name: "Малювання",
        category: "Мистецтво",
        price: 500,
        members: 12,
        active: false
    },
    {
        id: 4,
        name: "Шахи",
        category: "Інтелектуальний",
        price: 400,
        members: 10,
        active: true
    },
    {
        id: 5,
        name: "Танці",
        category: "Спорт",
        price: 700,
        members: 18,
        active: false
    }
];

let choice;

do {
    choice = prompt(
        "КАТАЛОГ ГУРТКІВ\n \n" +
        "1 - Показати всі гуртки\n" +
        "2 - Знайти гурток за ID\n" +
        "3 - Записати учасника\n" +
        "4 - Змінити статус набору\n" +
        "5 - Додати новий гурток\n" +
        "6 - Показати статистику\n" +
        "0 - Вихід"
    );

    if (choice === null) {
        break;
    }

    switch (choice) {

        case "1":
            if (clubs.length === 0) {
                alert("Каталог порожній.");
            }
            else {
                let result = "КАТАЛОГ ГУРТКІВ:\n \n";

                clubs.forEach(function (club) {
                    let status;

                    if (club.active === true) {
                        status = "Набір відкрито";
                    }
                    else {
                        status = "Набір закрито";
                    }

                    result +=
                        "ID: " + club.id + "\n" +
                        "Назва: " + club.name + "\n" +
                        "Напрям: " + club.category + "\n" +
                        "Ціна: " + club.price + " грн\n" +
                        "Учасники: " + club.members + "\n" +
                        "Статус: " + status + "\n";
                });

                alert(result);
            }
            break;

        case "2": {
            let id = +prompt("Введіть ID гуртка:");

            if (id === null) {
                alert("ID не введено.");
                break;
            }

            let foundClub = null;

            for (let club of clubs) {
                if (club.id === id) {
                    foundClub = club;
                    break;
                }
            }

            if (foundClub !== null) {
                alert(
                    "Інформація про гурток:\n\n" +
                    "ID: " + foundClub.id + "\n" +
                    "Назва: " + foundClub.name + "\n" +
                    "Напрям: " + foundClub.category + "\n" +
                    "Ціна: " + foundClub.price + " грн\n" +
                    "Учасники: " + foundClub.members + "\n" +
                    "Набір відкрито: " +
                    (foundClub.active ? "Так" : "Ні")
                );
            }
            else {
                alert("Гурток із таким ID не знайдено.");
            }
            break;
        }

        case "3": {
            let id = +prompt("Введіть ID гуртка:");

            if (id === null) {
                alert("ID не введено.");
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
            }
            else if (foundClub.active === false) {
                alert("Набір до цього гуртка закрито.");
            }
            else {
                if (confirm("Записати учасника до гуртка \"" + foundClub.name + "\"?")) {
                    foundClub.members++;
                    alert(
                        "Учасника записано!\n" +
                        "Кількість учасників: " +
                        foundClub.members
                    );
                }
                else {
                    alert("Запис скасовано.");
                }
            }
            break;
        }

        case "4": {
            let id = +prompt("Введіть ID гуртка:");

            if (id === null) {
                alert("ID не введено.");
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
            }
            else {
                let newStatus = foundClub.active
                    ? "закрити"
                    : "відкрити";

                if (confirm("Ви хочете " + newStatus + " набір до гуртка \"" + foundClub.name + "\"?")) {
                    foundClub.active = !foundClub.active;

                    let status;

                    if (foundClub.active === true) {
                        status = "відкрито";
                    }
                    else {
                        status = "закрито";
                    }

                    alert(
                        "Статус змінено!\n" +
                        "Набір: " + status
                    );
                }
            }
            break;
        }

        case "5": {
            let name = prompt("Введіть назву гуртка:");

            if (name === null) {
                break;
            }

            name = name.trim();

            if (name === "") {
                alert("Назва гуртка не може бути порожньою.");
                break;
            }

            let category = prompt("Введіть напрям гуртка:");

            if (category === null) {
                break;
            }

            category = category.trim();

            if (category === "") {
                alert("Напрям не може бути порожнім.");
                break;
            }

            let priceInput = +prompt("Введіть вартість занять за місяць:");

            if (priceInput === null || priceInput.trim() === "") {
                alert("Вартість не введено.");
                break;
            }


            if (!Number.isFinite(priceInput) || priceInput < 0) {
                alert("Ціна повинна бути невід'ємним числом.");
                break;
            }

            let membersInput = +prompt("Введіть кількість учасників:");

            if (membersInput === null || membersInput.trim() === "") {
                alert("Кількість учасників не введено.");
                break;
            }

            if (!Number.isInteger(membersInput) || membersInput < 0) {
                alert("Кількість учасників повинна бути " + "невід'ємним цілим числом.");
                break;
            }

            let newId = 1;

            for (let club of clubs) {
                if (club.id >= newId) {
                    newId = club.id + 1;
                }
            }

            let newClub = {
                id: newId,
                name: name,
                category: category,
                price: priceInput,
                members: membersInput,
                active: true
            };

            clubs.push(newClub);

            alert(
                "Гурток успішно додано!\n \n" +
                "ID: " + newClub.id + "\n" +
                "Назва: " + newClub.name + "\n" +
                "Напрям: " + newClub.category + "\n" +
                "Ціна: " + newClub.price + " грн\n" +
                "Учасники: " + newClub.members + "\n" +
                "Набір відкрито."
            );
            break;
        }

        case "6": {
            let totalMembers = 0;
            let activeCount = 0;
            let totalPrice = 0;

            for (let club of clubs) {
                totalMembers += club.members;
                totalPrice += club.price;

                if (club.active === true) {
                    activeCount++;
                }
            }

            let averagePrice = 0;

            if (clubs.length > 0) {
                averagePrice = totalPrice / clubs.length;
            }

            alert(
                "СТАТИСТИКА:\n \n" +
                "Усього гуртків: " + clubs.length + "\n" +
                "Відкритий набір: " + activeCount + "\n" +
                "Усього учасників: " + totalMembers + "\n" +
                "Середня вартість: " +
                averagePrice.toFixed(2) + " грн"
            );
            break;
        }

        case "0":
            alert("Роботу програми завершено.");
            break;

        default:
            alert("Неправильний пункт меню. Спробуйте ще раз.");
    }

}
while (choice !== "0");
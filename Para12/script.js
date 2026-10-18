// function isHighScore(score) {
//     return score >= 10;
// }
// let scores = [7, 12, 8, 9, 10, 5]
// let HighScore = scores.filter(isHighScore);
// console.log(HighScore);

// function isHighScore(score) {
//     return score >= 10;
// }


// let scores = [7, 12, 8, 9, 10, 5]
//
// let highScore = scores.filter(score => score >= 10)
// let HighScore = scores.filter(isHighScore);
// console.log(HighScore);

// let courses =  [
//     {id:1, title: "HTML", price:700, description: "pavlo", active: true},
//     {id:2, title: "CSS", price:300, description: "pavlo", active: true},
//     {id:3, title: "JavaScript", price:400, description: "pavlo", active: true},
//     {id:4, title: "Vue", price:800, description: "pavlo", active: false},
// ]
// let found = courses.find(course => course.id === 3);
// console.log(found);
// if (found !== undefined) {
//     console.log(found.title);
// }
// else {
//     console.log("Takogo course nema");
// }
// let activeCourse = courses.filter(course => course.active);
// let lowCost = courses.filter(course => course.price <= 700);
// console.log(lowCost);
// console.log(activeCourse);
//
// let title = courses.map(course => course.title);
// let sellPrice = courses.map(course => course.price * 0.9);
// console.log(`Початкові дані: ${courses}`)
// console.log(`Назви курсів ${title}`);
// console.log(`Оновлена вартість ${sellPrice}`);
//
// let search = courses.filter(course => course.title.includes("Script"))
// console.log(search);

// function isAvailable(book) {
//     return book.available === true;
// }
//
// let books = [
//     {id:1, title: "HTML dlya noobs", author: "olega", year: 2024, available: true},
//     {id:2, title: "JavaScript dlya noobs", author: "olega2", year: 2022, available: false},
//     {id:3, title: "CSS dlya noobs", author: "olega3", year: 2022, available: true},
//     {id:4, title: "HTML, JavaScript, CSS dlya noobs", author: "olega4", year: 2024, available: false},
// ]
// let userIdBooks = +prompt("Id please jd.askdasm");
// let searchBookId = books.find(book => book.id === userIdBooks);
// let availableBooks = books.filter(isAvailable);
// let title = books.map(book => book.title).join(", ");
// let js = books.filter(book => book.title.includes("JavaScript"));
// console.log(availableBooks);
// console.log(title);
// console.log(js);
// console.log(userIdBooks);
// ДЗ ДЗ ДЗ ДЗ ДЗ ДЗ ДЗ ДЗ ДЗ ДЗ ДЗ ДЗ ДЗ ДЗ ДЗ ДЗ ДЗ ДЗ ДЗ ДЗ ДЗ ДЗ ДЗ ДЗ ДЗ ДЗ ДЗ ДЗ

let courses = [
    {id:1, title:"HTML", category:"Web", price:700, duration:10, rating:4.5, available:true},
    {id:2, title:"CSS", category:"Web", price:300, duration:8, rating:4.2, available:true},
    {id:3, title:"JavaScript", category:"Programming", price:400, duration:20, rating:4.9, available:true},
    {id:4, title:"Vue", category:"Web", price:800, duration:18, rating:4.7, available:false},
    {id:5, title:"Python", category:"Programming", price:600, duration:15, rating:4.8, available:true},
    {id:6, title:"Figma", category:"Design", price:500, duration:9, rating:4.3, available:true},
    {id:7, title:"Git", category:"Programming", price:200, duration:6, rating:4.4, available:false},
    {id:8, title:"Photoshop", category:"Design", price:900, duration:12, rating:4.6, available:true}
];

function show(list) {
    alert(list.length ? list.map(c => c.title + " — " + c.price + " грн").join("\n") : "Курсів не знайдено");
}

function byId() {
    let id = +prompt("Введіть ID");
    let course = courses.find(c => c.id === id);
    if (course) show([course]);
    else alert("Курс не знайдено");
}

function byCategory() {
    let category = prompt("Введіть категорію");
    show(courses.filter(c => c.category.toLowerCase() === category.toLowerCase()));
}

function byPrice() {
    let price = +prompt("Максимальна ціна");
    show(courses.filter(c => c.price <= price));
}

function byTitle() {
    let title = prompt("Введіть частину назви");
    show(courses.filter(c => c.title.toLowerCase().includes(title.toLowerCase())));
}

function titles() {
    alert(courses.map(c => c.title).join("\n"));
}

function discount() {
    show(courses.map(c => ({title:c.title, price:Math.round(c.price * 0.85)})));
}

function byCheap() {
    let result = courses.filter(c => true);
    result.sort((a, b) => a.price - b.price);
    show(result);
}

function byRating() {
    let result = courses.filter(c => true);
    result.sort((a, b) => b.rating - a.rating);
    show(result);
}

function byName() {
    let result = courses.filter(c => true);
    result.sort((a, b) => a.title.localeCompare(b.title));
    show(result);
}

function availablePrice() {
    let result = courses.filter(c => c.available);
    let sum = result.reduce((total, c) => total + c.price, 0);
    alert("Загальна: " + sum + " грн\nСередня: " + (sum / result.length) + " грн");
}

let choice;

do {
    choice = prompt("1 ID\n2 Категорія\n3 Ціна\n4 Назва\n5 Усі назви\n6 Знижка 15%\n7 Ціна за зростанням\n8 Рейтинг за спаданням\n9 Назва за алфавітом\n10 Ціна доступних курсів");

    switch (choice) {
        case "1": byId(); break;
        case "2": byCategory(); break;
        case "3": byPrice(); break;
        case "4": byTitle(); break;
        case "5": titles(); break;
        case "6": discount(); break;
        case "7": byCheap(); break;
        case "8": byRating(); break;
        case "9": byName(); break;
        case "10": availablePrice(); break;
    }
} while (choice !== null && confirm("Повернутися до меню?"));

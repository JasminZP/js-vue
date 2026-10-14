// let book = {
//     title: "Kobzar",
//     author: "Shevchenko",
//     year: "1840",
//     price: 500,
//     available: true,
// }
// console.log(book);

// let books =[
//     {
//         id: 1,
//         title: "Kobzar",
//         author: "Shevchenko",
//         year: "1840",
//         price: 500,
//         available: true,
//     },
//     {
//         id: 2,
//         title: "Lisova pisnya",
//         author: "Ukrayinnka",
//         year: "1911",
//         price: 450,
//         available: true,
//     },
//     {
//         id: 3,
//         title:  "Tigrolov",
//         author: "Bagranyi",
//         year: "1943",
//         price: 550,
//         available: false,
//     },
//     {
//         id: 4,
//         title:  "Misto",
//         author: "Pidmogilnyi",
//         year: "1927",
//         price: 450,
//         available: false,
//     }
// ]
// console.log(books[2]);
// for(let book of books) {
//     console.log(book.title);
// }
// books.forEach(function (book) {
//     console.log(book.title);
// })

// let availableCount = 0;
// let totalPrice = 0;
// for(let book of books) {
//     if (book.available === true) {
//         availableCount++;
//         totalPrice += book.price;
//     }
// }
// console.log(availableCount);
// console.log(totalPrice);
//
// books.push( {
//     id: 5,
//     title: "Zahar berkut",
//     author: "Franko",
//     year: "1882",
//     price: 500,
//     available: true
// })
//
// console.log(books.length)
// idBooks = +prompt("Id knijki: ");
// let foundBook = null;
// for(let book of books) {
//     if (book.id === idBooks) {
//         foundBook = book;
//         break;
//     }
// }
// if (foundBook !== null) {
//     let status = "Nema";
//     if (foundBook.available === true) {
//         status = "U naiavnosti";
//     }
//     alert(status)
// }
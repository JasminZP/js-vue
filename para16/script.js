let news = [
    {   category: "JavaScript",
        title: "JavaScript for child",
        description: "Pavlo",
        data: "20.11.2026"},
    {   category: "Design",
        title: "Design for chiyniki",
        description: "Pavlo2",
        data: "20.11.2026"}
]

let newsList = document.querySelector('#newsList');
let newsCount = document.querySelector('#newsCount');


function renderNews(items) {
    let card = document.createElement('article');
    card.classList.add('news-card');
    let tag = document.createElement('span');
    tag.classList.add('tag');
    tag.textContent = items.category;

    let title = document.createElement('h2');
    title.textContent = items.title;

    let description = document.createElement('p');
    description.textContent = items.description;

    let date = document.createElement('small');
    date.textContent = items.data;

    card.append(tag, title, description, date);
    newsList.append(card);

}
renderNews(news);
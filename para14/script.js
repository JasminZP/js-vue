let enrollBtn = document.querySelector("#enrollBtn");
let status = document.querySelector("#status")
enrollBtn.addEventListener("click", function () {
  status.textContent = "Vi sapisani";
  status.classList.add("succes");
  enrollBtn.textContent = "Zapis oformleno";
});

let studentsName = document.querySelector("#studentsName");
let welcome = document.querySelector("#welcome");

studentsName.addEventListener("input", function () {
  let name = studentsName.value.trim().autocapitalize();
  if (name === "") {
    welcome.textContent = "Vitaemo";
  }
  else {
    welcome.textContent = "Vitaemo, " + name;
  }
});
let format = document.querySelector("#format");
let price = document.querySelector("#price");

format.addEventListener("change", function () {
  let selectPrice = Number(format.value);
  price.textContent = selectPrice + "grn";
});

let detailBtn = document.querySelector("#detailBtn");
let details = document.querySelector("#details");

detailBtn.addEventListener("click", function () {
  details.classList.toggle("hidden");
  if (details.classList.contains("hidden")) {
    detailBtn.textContent = "Pokazati Opis";
  }
  else {
    detailBtn.textContent = "Prihovati Opis";
  }
});

let card = document.querySelector("#card");
let themeBtn = document.querySelector("#themeBtn");

themeBtn.addEventListener("click", function () {
  card.classList.toggle("dark");
  if (card.classList.contains("dark")) {
    themeBtn.textContent = "Svitla thema";
  }
  else {
    themeBtn.textContent = "Temna tema";
  }
})
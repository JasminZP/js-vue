const saveButton = document.querySelector("#saveProfile");
const message = document.querySelector("#resultMessage");

const nameField = document.querySelector("#userName");
const greetingText = document.querySelector("#greeting");

const themeSelect = document.querySelector("#colorScheme");
const profilePanel = document.querySelector("#profilePanel");

const infoButton = document.querySelector("#infoToggle");
const infoBlock = document.querySelector("#extraInfo");

nameField.addEventListener("input", function () {
  const enteredName = nameField.value.trim();

  if (enteredName === "") {
    greetingText.textContent = "Вітаємо у вашому профілі!";
  } else {
    greetingText.textContent = "Вітаємо, " + enteredName + "!";
  }
});

saveButton.addEventListener("click", function () {
  const enteredName = nameField.value.trim();

  if (enteredName === "") {
    message.textContent = "Спочатку введіть своє ім’я.";
    message.classList.remove("confirmed");
  } else {
    message.textContent = "Профіль успішно оновлено!";
    message.classList.add("confirmed");
    saveButton.textContent = "Підтверджено";
  }
});

themeSelect.addEventListener("change", function () {
  profilePanel.classList.remove("night-mode", "mint-mode");

  if (themeSelect.value === "dark") {
    profilePanel.classList.add("night-mode");
  } else if (themeSelect.value === "mint") {
    profilePanel.classList.add("mint-mode");
  }
});

infoButton.addEventListener("click", function () {
  infoBlock.classList.toggle("is-hidden");

  if (infoBlock.classList.contains("is-hidden")) {
    infoButton.textContent = "Показати додаткову інформацію";
  } else {
    infoButton.textContent = "Приховати додаткову інформацію";
  }
});

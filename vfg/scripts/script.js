// Инициализация приложения производится после загрузки DOM
document.addEventListener("DOMContentLoaded", initHobbyApp);

// Получение элементов
function getElements() {
  return {
    hobbyNameInput: document.getElementById("hobby-name"),
    hobbyDescriptionInput: document.getElementById("hobby-description"),
    addHobbyBtn: document.getElementById("add-hobby"),
    hobbiesContainer: document.getElementById("hobbies-container"),
    hobbyTemplate: document.getElementById("hobby-template"),
  };
}

// Создание карточки хобби
function createHobbyCard(name, description, template) {
  const hobbyCard = template.content.cloneNode(true);

  const cardTitle = hobbyCard.querySelector(".card-title");
  const cardDescription = hobbyCard.querySelector(".card-description");
  cardTitle.textContent = name;
  cardDescription.textContent = description;

  attachHobbyEvents(hobbyCard);

  return hobbyCard;
}

// Вешает обработчики событий
function attachHobbyEvents(hobbyCard) {
  const likeBtn = hobbyCard.querySelector(".button-like");
  const deleteBtn = hobbyCard.querySelector(".button-delete");

  likeBtn.addEventListener("click", function () {
    this.classList.toggle("active");
    this.closest(".card").classList.toggle("liked");
  });

  deleteBtn.addEventListener("click", function () {
    this.closest(".card").remove();
  });
}

// Сброс значений в инпутах
function resetInputs(inputs) {
  inputs.hobbyNameInput.value = "";
  inputs.hobbyDescriptionInput.value = "";
}

// Обработка добавления нового хобби
function handleAddHobby(inputs) {
  const name = inputs.hobbyNameInput.value.trim();
  const description = inputs.hobbyDescriptionInput.value.trim();

  if (name === "") {
    alert("Введите название хобби!");
    return;
  }

  const hobbyCard = createHobbyCard(name, description, inputs.hobbyTemplate);
  inputs.hobbiesContainer.appendChild(hobbyCard);
  resetInputs(inputs);
}

// Инициализация всего приложения, регистрация событий и т.д.
function initHobbyApp() {
  const inputs = getElements();
  inputs.addHobbyBtn.addEventListener("click", () => handleAddHobby(inputs));
}

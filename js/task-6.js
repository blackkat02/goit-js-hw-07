const refs = {
  controls: document.querySelector("#controls input"),
  create: document.querySelector("[data-create]"),
  destroy: document.querySelector("[data-destroy]"),
  container: document.querySelector("#boxes"),
};

refs.create.addEventListener("click", handleClick);
refs.destroy.addEventListener("click", destroyBoxes);

function handleClick() {
  const amount = Number(refs.controls.value.trim());

  if (amount < 1 || amount > 100 || isNaN(amount)) {
    alert("Enter a number from 1 to 100 please!");
    refs.controls.value = "";
    return;
  }

  createBoxes(amount);
  refs.controls.value = "";
}

function createBoxes(amount) {
  refs.container.replaceChildren(); // Очищення контейнера
  let size = 30;
  const fragment = document.createDocumentFragment(); // Використовуємо фрагмент

  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement("div");
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    box.classList.add("box");

    fragment.appendChild(box); // Додаємо в фрагмент
    size += 10;
  }

  refs.container.appendChild(fragment); // Додаємо все разом в DOM
}

function destroyBoxes() {
  refs.container.replaceChildren();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

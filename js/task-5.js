const changeColorBtn = document.querySelector(".change-color");
const body = document.body;
const colorText = document.querySelector(".color");

// Обробник події для зміни кольору при кліку на кнопку
changeColorBtn.addEventListener("click", () => {
  const randomColor = getRandomHexColor();
  body.style.backgroundColor = randomColor;
  colorText.textContent = randomColor;
});

// Функція для генерації випадкового HEX-кольору
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`;
}

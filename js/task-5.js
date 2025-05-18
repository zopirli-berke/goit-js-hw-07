const btn = document.querySelector(`.change-color`);
const colorOutput = document.querySelector(`.color`);
const widget = document.querySelector(`.widget`);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

btn.addEventListener(`click`, () => {
  const getRandomColor = getRandomHexColor();
  document.body.style.backgroundColor = getRandomColor;
  colorOutput.textContent = getRandomColor;
});

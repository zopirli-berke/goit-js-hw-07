const createBtn = document.querySelector(`[data-create]`);
const destroyBtn = document.querySelector(`[data-destroy]`);
const controls = document.querySelector(`#controls`);
const input = document.querySelector(`input`);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`;
}

function createBoxes() {
  const input = document.querySelector("input");
  const amount = Number(input.value);
  const boxesContainer = document.querySelector("#boxes");

  boxesContainer.innerHTML = "";

  if (amount < 1 || amount > 100 || isNaN(amount)) {
    alert("Please enter a number between 1 and 100");
    return;
  }

  for (let i = 0; i < amount; i++) {
    const boxSize = 30 + i * 10;
    const box = `<div style="
        width: ${boxSize}px; 
        height: ${boxSize}px; 
        background-color: ${getRandomHexColor()}; 
        margin: 5px;
        display: inline-block;
        "></div>`;
    boxesContainer.insertAdjacentHTML("beforeend", box);
  }

  document.querySelector("input").value = "";
}

createBtn.addEventListener(`click`, createBoxes);

function destroyBoxes() {
  document.querySelector(`#boxes`).innerHTML = ``;
}

destroyBtn.addEventListener(`click`, destroyBoxes);

// style class add

controls.classList.add(`controls-style`);
input.classList.add(`input`);
createBtn.classList.add(`create-btn`);
destroyBtn.classList.add(`destroy-btn`);

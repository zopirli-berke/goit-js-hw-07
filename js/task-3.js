const nameInput = document.querySelector(`#name-input`);
const nameOutput = document.querySelector(`#name-output`);

nameInput.addEventListener(`input`, () => {
  const nameInputValue = nameInput.value.trim();

  nameOutput.textContent = nameInputValue === `` ? `Anonymous` : nameInputValue;
});

// Input style class add

nameInput.classList.add(`input`);

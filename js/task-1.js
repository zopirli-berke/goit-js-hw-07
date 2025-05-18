const categoriesItemsEl = document.querySelectorAll(`.item`);
const listItem = document.querySelectorAll(`.item li`);
const categories = document.querySelector(`#categories`);
const listContainer = document.querySelectorAll(`.item ul`);

console.log(`Number of categories: ${categoriesItemsEl.length}`);

categoriesItemsEl.forEach((item) => {
  const categoriesTitleEl = item.querySelector(`h2`);
  const listElementsCountEl = item.querySelectorAll(`ul li`);

  console.log(`Category: ${categoriesTitleEl.textContent}`);
  console.log(`Elements: ${listElementsCountEl.length}`);
});

// style class add
categoriesItemsEl.forEach((item) => {
  item.classList.add(`item-style`);
});

listItem.forEach((item) => {
  item.classList.add(`list-item`);
});

categories.classList.add(`categories`);

listContainer.forEach((item) => {
  item.classList.add(`list-container`);
});

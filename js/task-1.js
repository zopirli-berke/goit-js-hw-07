const categoriesItemsEl = document.querySelectorAll(`.item`);

console.log(`Number of categories: ${categoriesItemsEl.length}`);

categoriesItemsEl.forEach((item) => {
  const categoriesTitleEl = item.querySelector(`h2`);
  const listElementsCountEl = item.querySelectorAll(`ul li`);

  console.log(`Category: ${categoriesTitleEl.textContent}`);
  console.log(`Elements: ${listElementsCountEl.length}`);
});

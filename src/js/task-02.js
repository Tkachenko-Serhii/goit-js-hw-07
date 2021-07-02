const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const ingredientContainer = document.querySelector("#ingredients");
const ingredient = ingredients.map((item) => {
  const listEl = document.createElement("li");
  listEl.textContent = item;
  return listEl;
});

ingredientContainer.append(...ingredient);

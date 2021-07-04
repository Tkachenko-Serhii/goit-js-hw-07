console.log("========Вариант №1========");
const childElCount = document.querySelector("ul").childElementCount;
console.log(`В списке ${childElCount} категории`);

const category = document.querySelectorAll("h2");
category.forEach((item) => {
  console.log(`Категория: ${item.textContent};`);
  console.log(
    `Количество элементов: ${item.nextElementSibling.childElementCount};`
  );
});

console.log("========Вариант №2========");
const categoriesList = document.querySelector("#categories");

const childCount = categoriesList.querySelectorAll(".item").length;
console.log(`В списке ${childCount} категории`);

const categoriesListArray = categoriesList.children;
const arrRef = Array.from(categoriesListArray);
arrRef.forEach((item) => {
  console.log(`Категория: ${item.firstElementChild.textContent}
Количество элементов: ${item.lastElementChild.children.length}`);
});

console.log("========Вариант №3========");
console.log(`В списке ${childElCount} категории`);

const categoriesListItem = categoriesList.querySelectorAll(".item");
categoriesListItem.forEach((category) => {
  console.log("Категория:", category.querySelector("h2").textContent);
  console.log("Количество элементов:", category.querySelectorAll("li").length);
});

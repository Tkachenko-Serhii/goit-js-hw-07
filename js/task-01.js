const childElCount = document.querySelector("ul").childElementCount;
console.log(`В списке ${childElCount} категории`);

const category = document.querySelectorAll("h2");
category.forEach((item) =>
  console.log(
    `Категория: ${item.textContent};`,
    `Количество элементов: ${item.nextElementSibling.childElementCount};`
  )
);

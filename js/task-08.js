const refs = {
  boxes: document.querySelector("#boxes"),
  render: document.querySelector('button[data-action="render"]'),
  destroy: document.querySelector('button[data-action="destroy"]'),
  input: document.querySelector("input"),
};

refs.render.addEventListener("click", createBoxes);
refs.destroy.addEventListener("click", destroyBoxes);
function createBoxes() {
  const arrNumbers = Array.apply(null, { length: Number(refs.input.value) + 1 })
    .map(Number.call, Number)
    .slice(1);
  const arrBoxes = arrNumbers.reduce((arr, num) => {
    const box = document.createElement("div");
    box.style.backgroundColor =
      "#" + (Math.random().toString(16) + "000000").substring(2, 8);
    box.style.width = `${30 + num * 10}px`;
    box.style.height = `${30 + num * 10}px`;
    box.style.margin = "16px";
    refs.boxes.append(box);
  }, []);
}

function destroyBoxes() {
  refs.input.value = "";
  refs.boxes.innerHTML = "";
}

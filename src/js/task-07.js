const refs = {
  input: document.querySelector("#font-size-control"),
  text: document.querySelector("#text"),
};

refs.input.min = 0;

refs.input.addEventListener("input", whenInputRangeChange);

function whenInputRangeChange(event) {
  refs.text.style.fontSize = event.currentTarget.value + "px";
  return;
}

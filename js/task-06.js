const refs = {
  input: document.querySelector("#validation-input"),
  length: document.querySelector('input[data-length="6"]'),
};
refs.input.addEventListener("blur", onBlurLose);

function onBlurLose(event) {
  const length =
    event.currentTarget.value.length < refs.length.dataset.length
      ? refs.input.classList.add("invalid")
      : refs.input.classList.replace("invalid", "valid");
}

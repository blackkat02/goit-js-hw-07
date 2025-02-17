const refs = {
    nameInput: document.querySelector("#name-input"),
    nameOutput: document.querySelector("#name-output"),
}

refs.nameInput.addEventListener("input", event => {
  const name = event.target.value.trim();
  refs.nameOutput.textContent = name === "" ? "Anonymous" : name;
});

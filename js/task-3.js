const el = document.querySelector("input#name-input");
const span = document.querySelector("#name-output");
el.addEventListener("input", handleInput);
function handleInput(event) {
  const name = el.value.trim();
  if (name) {
    span.textContent = name;
  } else span.textContent = "Anonymous";
}

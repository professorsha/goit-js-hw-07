const inputQuantity = document.querySelector("#controls>input");
const btnCreate = document.querySelector("[data-create]");
const btnDestroy = document.querySelector("[data-destroy]");
const box = document.querySelector("#boxes");

let boxsize;
let newDiv;

btnCreate.addEventListener("click", handleCreate);

function handleCreate(event) {
  inputQuantity.focus();
  if (inputQuantity.value > 0 && inputQuantity.value < 101) {
    createBoxes(inputQuantity.value);
    inputQuantity.value = "";
  } else {
    alert(
      "Ви ввели некоректне значення! Введіть значення в діапазоні від 1 до 100"
    );
  }
}
function createBoxes(amount) {
  box.innerHTML = "";
  boxsize = 30;
  for (let i = 1; i <= amount; i += 1) {
    newDiv = `<div style="width: ${boxsize}px; height: ${boxsize}px; background: ${getRandomHexColor()}"></div>`;
    box.insertAdjacentHTML("beforeend", newDiv);
    boxsize += 10;
  }
}
btnDestroy.addEventListener("click", handleDestroy);
function handleDestroy(event) {
  box.innerHTML = "";
  inputQuantity.value = "";
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

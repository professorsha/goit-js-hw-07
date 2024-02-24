const btn = document.querySelector("button.change-color");
const textColor = document.querySelector("span.color");
const body = document.body.style;
btn.addEventListener("click", handleColor);
function handleColor(event) {
  const backgroundColor = getRandomHexColor();
  textColor.textContent = backgroundColor;
  body.backgroundColor = backgroundColor;
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

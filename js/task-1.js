const items = document.querySelectorAll("li.item");
console.log(`Number of categories: ${items.length}`);
items.forEach((item) => {
  const title = item.querySelector("h2");
  console.log(`Categories: ${title.textContent}`);
  const subItems = item.querySelectorAll("ul>li");
  console.log(`Elements: ${subItems.length}`);
});

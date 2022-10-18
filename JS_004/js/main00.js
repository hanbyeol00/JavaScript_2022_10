const but1 = document.querySelector("#but1");
const but2 = document.querySelector("#but2");
const but3 = document.querySelector("#but3");
const div1 = document.querySelector("#div1");

but1.addEventListener("click", () => {
  div1.style.backgroundColor = "red";
});
but2.addEventListener("click", () => {
  div1.style.backgroundColor = "blue";
});
but3.addEventListener("click", () => {
  div1.style.backgroundColor = "Yellow";
});

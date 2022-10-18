const content = document.querySelector("#content");
const btnRed = document.querySelector("#btnred");
const btnBlue = document.querySelector("#btnblue");
const btnYello = document.querySelector("#btnyellow");

btnRed?.addEventListener("click", () => {
  content.style.backgroundColor = "red";
});
btnBlue?.addEventListener("click", () => {
  content.style.backgroundColor = "blue";
  content.style.color = "white";
});
btnYello?.addEventListener("click", () => {
  content.style.backgroundColor = "Yellow";
});

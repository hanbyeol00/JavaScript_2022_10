const q = document.querySelector("input");
const btn = document.querySelector("#btn");

btn.addEventListener("click", () => {
  const qt = q.value;
  document.location.href = "https://google.co.kr/search" + qt;
});

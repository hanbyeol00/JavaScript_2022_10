const inputNum1 = document.querySelector("#num1");
const inputNum2 = document.querySelector("#num2");
const spanSum = document.querySelector("#sum");

const btncacl = document.querySelector("button");

btncacl?.addEventListener("click", () => {
  const num1 = inputNum1.value;
  const num2 = inputNum2.value;

  spanSum.innerText = Number(num1) + Number(num2);
  // innerText 를 이용해 값 구하기
});

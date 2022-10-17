const but = document.querySelector("#bt");
const relt1 = document.querySelector("#result1");
const relt2 = document.querySelector("#result2");
const relt3 = document.querySelector("#result3");
const relt4 = document.querySelector("#result4");
const inputNum1 = document.querySelector("#num1");
const inputNum2 = document.querySelector("#num2");

inputNum1.focus();

but.addEventListener("click", () => {
  const txtNum1 = inputNum1.value;
  const txtNum2 = inputNum2.value;
  const sum1 = Number(txtNum1) + Number(txtNum2);
  const sum2 = Number(txtNum1) - Number(txtNum2);
  const sum3 = Number(txtNum1) * Number(txtNum2);
  const sum4 = Number(txtNum1) / Number(txtNum2);

  if (!txtNum1) {
    alert("정수1의 값을 입력하세요");
    inputNum1.focus();
  } else if (!txtNum2) {
    alert("정수2의 값을 입력하세요");
    inputNum2.focus();
  } else {
    relt1.innerText = txtNum1 + " + " + txtNum2 + "=" + sum1;
    relt2.innerText = txtNum1 + " - " + txtNum2 + "=" + sum2;
    relt3.innerText = txtNum1 + " x " + txtNum2 + "=" + sum3;
    relt4.innerText = txtNum1 + " ÷ " + txtNum2 + "=" + sum4;
  }
});

const inputs = document.querySelectorAll("input");
const btn = document.querySelector("button.btn");
const tbodyAddr = document.querySelector("tbody.addr");

const textCheck = () => {
  for (let i = 0; i < inputs.length; i++) {
    const input = inputs[i];
    const holderText = inputs[i].placeholder;
    if (!input.value) {
      alert(`${holderText}를 입력해 주세요`);
    } else {
      continue;
    }
    input.value = "";
    input.focus();
    return false;
  }
  return true;
};
const textInput = () => {
  const tr = document.createElement("TR");
  inputs.forEach((input) => {
    let td = document.createElement("TD");
    td.textContent = input.value;
    tr.appendChild(td);
    input.value = "";
    inputs[0].focus();
  });
  tbodyAddr.appendChild(tr);
};
btn?.addEventListener("click", () => {
  if (textCheck()) {
    textInput();
  }
});

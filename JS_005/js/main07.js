const inputs = document.querySelectorAll("input");
const btnOk = document.querySelector("button.btn_ok");
const spans = document.querySelectorAll("span");
btnOk?.addEventListener("click", () => {
  for (let i = 0; i < inputs.length; i++) {
    document.writeln(inputs[i].value);
    // spans[i].innerText = inputs[i].value;
  }
});

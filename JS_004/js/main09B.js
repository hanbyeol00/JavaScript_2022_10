const index = {
  username: 0,
  password: 1,
  rePassword: 2,
};
// username, password, re_password input box
// 변수에 보관
const joinInputs = document.querySelectorAll("input");
const username = joinInputs[index.username];
const password = joinInputs[index.password];
const rePassword = joinInputs[index.rePassword];
const btnSubmit = document.querySelector("button.btn_submit");

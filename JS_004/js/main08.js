/**
 * 회원가입 버튼을 클릭하면
 * 1.아이디, 비번, 비번확인을 입력했는지 확인하고
 *      입력하지 않았으면 입력하도록 focus() 지정
 * 2. 비밀번호와 비밀번호 확인 데이터가 다르면
 *      비밀번호 부터 다시 입력받도록 하기
 */

const btnSubmit = document.querySelector("button.btn_submit");
const inputs = document.querySelectorAll("#input");
const userName = document.querySelector("#username");
const userpswd = document.querySelector("#password");
const repswd = document.querySelector("#re_password");

btnSubmit.addEventListener("click", () => {
  const txtUser = userName.value;
  const txtPswd = userpswd.value;
  const txtRepswd = repswd.value;

  if (!txtUser) {
    alert("아이디를 입력하세요");
    userName.focus();
  } else if (!txtPswd) {
    alert("비밀번호를 입력하세요");
    userpswd.focus();
  } else if (txtPswd != txtRepswd) {
    alert("비밀번호와 비밀번호확인이 틀립니다");
    userpswd.focus();
  }
});

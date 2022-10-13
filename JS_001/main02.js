const btnSave = document.querySelector("#save");
const inputName = document.querySelector("#name");
const inputTel = document.querySelector("#tel");

// save button 을 클릭했을때 할일 지정
btnSave.addEventListener("click", () => {
  // 확인 메세지 보이기
  alert("저장 버튼을 클릭했습니다");
  // alert 알림창
  // input#name 에 입력된 text(value 속성값)를
  // txtName 변수에 보관하기
  const txtName = inputName.value;
  // 이름을 문자열과 txtName 에 보관된 tet를
  alert("이름은" + txtName);

  const txtTel = inputTel.value;
  alert("전화번호는" + txtTel);

  alert("이름 : " + txtName + "\n" + "전화번호 : " + txtTel);

  confirm("보낼까요?");
});

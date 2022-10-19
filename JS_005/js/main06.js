/**
 * input box 에 이름, 주소, 전화번호를 입력하면
 * 화면의 span tag 의 해당 위치에 확인 값을
 * 출력하기
 */
const inputs = document.querySelectorAll("input");
const btnOk = document.querySelector("button.btn_ok");
const spans = document.querySelectorAll("span");
const info = {};
const infoIndex = {
  이름: 0,
  주소: 1,
  전화번호: 2,
};
btnOk?.addEventListener("click", () => {
  info.이름 = inputs[infoIndex.이름].value;
  info.주소 = inputs[infoIndex.주소].value;
  info.전화번호 = inputs[infoIndex.전화번호].value;

  spans[infoIndex.이름].innerText = info.이름;
  spans[infoIndex.주소].innerText = info.주소;
  spans[infoIndex.전화번호].innerText = info.전화번호;
});

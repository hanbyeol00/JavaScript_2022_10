/*
 * 1. 이름, 주소, 전화번호를 입력한 후 추가 버튼을 클릭하면
 *    입력된 이름, 주소, 전화번호를 table 에 추가
 * 2. 화면에 UI 를 각자 디자인
 */

const btn = document.querySelector("button.btn");
const tbodyAddr = document.querySelector("tbody.addr");
const inputs = document.querySelectorAll("input");


btn?.addEventListener("click", () => {
  let tr = document.createElement("TR"); //  새로운 tr tag 생성
  for (let i = 0; i < inputs.length; i++) { // i가 0이고 inputs안에 3개의 input이 있어 3회 실행
    let td = document.createElement("TD"); // 새로운 td tag를 생성
    td.innerText = inputs[i].value; // 생성된 td에 input[i](for이 3번 반복되면서 안에 0 1 2 숫자가 변경됨)의 안에 값이 입력됨
    tr.appendChild(td); // td tag가 tr tag에 추가된다
  }
  tbodyAddr.appendChild(tr); // 위에 for문으로 생성된 td와 합쳐진 tr tag를 html에 tbody 에 추가된다
});
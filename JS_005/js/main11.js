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
  for (let i = 0; i < inputs.length; i++) {
    // i가 0이고 inputs안에 3개의 input이 있어 3회 실행
    let td = document.createElement("TD"); // 새로운 td tag를 생성
    td.innerText = inputs[i].value; // 생성된 td에 input[i](for이 3번 반복되면서 안에 0 1 2 숫자가 변경됨)의 안에 값이 입력됨
    tr.appendChild(td); // td tag가 tr tag에 추가된다
  }
  tbodyAddr.appendChild(tr); // 위에 for문으로 생성된 td와 합쳐진 tr tag를 html에 tbody 에 추가된다
});

/**
 * 식별자(Identifier)
 * 1. 프로젝트에서 이름만으로 구분할 수 있는 것들로 함수, 변수, 객체 등의 이름을 말한다
 * 2. 식별자는 유일(Unique)성을 만족해야 한다.(scope 내에서 중복 선언 금지)
 *
 * 식별자 명명(이름부여) 규칙
 * 1. 첫글자는 영문자이어야 한다
 *    1. 함수, 변수, 객체는 첫 글자를 소문자로 시작한다.
 *    2. 첫 글자를 숫자로 작성할 수 없다.
 *    3. 예외적으로 첫 글자를 Under Score(_, under Bar)또는 $ 로 시작하기도 한다.
 * 2. 두 번째 글자부터는 영문, 숫자, _ 를 사용할 수 있다.
 *    1. 키워드(function, const, let, var for, if 등), 특수문자, 공백은 사용할 수 없다.
 * 3. 두 단어 이상을 조합하여 이름만 보고 용도를 알 수 있도록 의미 있게 만든다.
 *    1. 두 단어 이상을 조합할때 두 번째 단어부터 단어 첫 글자를 대문자로 한다. (Camel Case)
 * 4. 변수명은 ㅊ럿 단어를 변수에 저장할 데이터(값)의 type 으로 정한다.
 * 5. 연습할 때에도 a, aa, b, bb, nnn 등의 알파벳으로 변수를 사용하지 않도록 한다.
 */

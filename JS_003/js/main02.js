const inputNum1 = document.querySelector("#num1");
const inputNum2 = document.querySelector("#num2");
const result = document.querySelector("#result");

// 본문의 span tag들 모두를 가져와서 spans 에 보관하라
// querySelectorAll = 하나의 변수에 여러개의 태그를 담을수 있다
// 0번부터 이름이 붙는다.
// 배열 Arrays
const spans = document.querySelectorAll("span");

// 본문에 button tag 가 한개만 있기 때문에
//별도의 id 를 부착하지 않고 직접 tag 를 가져와서 변수에 보관
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  const intNum1 = Number(inputNum1.value);
  const intNum2 = Number(inputNum2.value);

  // spans[]괄호안에 들어있는 숫자 index, 첨자
  spans[0].innerText = intNum1;
  spans[3].innerText = intNum1;
  spans[6].innerText = intNum1;
  spans[9].innerText = intNum1;

  spans[1].innerText = intNum2;
  spans[4].innerText = intNum2;
  spans[7].innerText = intNum2;
  spans[10].innerText = intNum2;

  spans[2].innerText = intNum1 + intNum2;
  spans[5].innerText = intNum1 - intNum2;
  spans[8].innerText = intNum1 * intNum2;
  spans[11].innerText = intNum1 / intNum2;
});
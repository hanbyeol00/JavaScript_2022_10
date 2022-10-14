const inputNum = document.querySelector("#num");
const btn = document.querySelector("#btn");

btn.addEventListener("click", () => {
  const txtNum = inputNum.value;
  // input box 에 입력한 값이 0 이면
  // 0 이외의 값을 입력하세요 alert 띄우기
  if (txtNum <= 0) {
    // === 일땐 txtNum를 Number()로 묶어줘야한다
    // == <= 일땐 안묶어줘도 된다
    alert("0 이외의 값을 입력하세요");
  }
  /**
   * 비교연산자 주의!!
   * 1. === :
   *    데이터의 type 이 일치하고,
   *    값이 일치하는 경우만
   *    true 가 된다
   * 2. == :
   *    데이터의 type 은 겁사 하지 않고
   *    값만 일치하는지 검사하여
   *    일치하면 true
   * 3. 변수 <= 숫자 :
   *    변수의 값을 자동으로 Numer type 을 변환하여
   *    비교연산을 수행한다
   */
});

const inputNum = document.querySelector("#num");
const btn = document.querySelector("#btn");

btn.addEventListener("click", () => {
  const txtNum = inputNum.value;

  /**
   * const intNum = Number(txtNum);
   * 다른방법
   * if (intNum <= 0) {
   * alert("0보다 큰 수를 입력하세요");
   * }
   */

  if (Number(txtNum) <= 0) {
    alert("0보다 큰 수를 입력하세요");
  } else {
    alert("확인되었습니다.");
  }
  /**
   * 숫자일 경우 범위를 검사하는 방법
   *
   * intNum 변수 값이 0 이상 :
   *    intNum >= 0, 0 <= intNum
   * intNum 변수 값이 100 이하:
   *    intNum <= 100
   * intNum 변수 값이 0 보다 큰 :
   *    intNum > 0
   * intNum 변수 값이 100보다 작은 :
   *    intNum < 100
   *
   * if(조건이 ture)
   * else(ture가 아닌경우)
   */

  // input bos 에 입력된 숫자가 0이면
  // 0보다 큰 수를 입력하세요 라고 alert 보이기
});

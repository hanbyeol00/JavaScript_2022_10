const inputNum1 = document.querySelector("#num1");
const inputNum2 = document.querySelector("#num2");
const spanSum = document.querySelector("#sum");

const btncacl = document.querySelector("button");

btncacl?.addEventListener("click", () => {
  const num1 = inputNum1.value;
  const num2 = inputNum2.value;

  spanSum.innerText = Number(num1) + Number(num2);
  // innerText 를 이용해 값 구하기
  /**
   * IDE : 통합개발환경
   * Intergrated, Development, Environment
   * 소스코드작성, 컴파일, 테스트, 배포 등을 하나의 환경에서
   * 처리할 수 있도록 만들어진 개발 도구
   * ex) vscode, eclipse
   */
});

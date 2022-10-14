const inputName = document.querySelector("#name");
const btnOk = document.querySelector("#btn");

// 누군가 button 을 클릭하면
btnOk.addEventListener("click", () => {
  /**
   * 이름이 홍길동 이면
   * 안녕하세요 회원님 이라고 alert 을 띄우고
   * 아니면
   * 어서오세요 회원가입을 해 주세요 라고
   * alert 을 띄우자
   * (조건연산)
   */
  const txtName = inputName.value;

  if (txtName === "") {
    alert("이름을 입력해 주세요");
    return;
    /** return; 은 클릭하기 이전으로 되돌아간다
        =(연산자)
        = 이 하나인건 값을 세팅한다 (할당연산자)
        === 이 세개인건 값과 비교한다 
    */
  }

  if (txtName === "홍길동") {
    alert("안녕하세요 " + txtName + "님 반갑습니다");
  } else {
    alert("어서오세요 회원가입을 해 주세요");
  }
});

/**
 * 회원가입 버튼을 클릭하면
 * 1.아이디, 비번, 비번확인을 입력했는지 확인하고
 *      입력하지 않았으면 입력하도록 focus() 지정
 * 2. 비밀번호와 비밀번호 확인 데이터가 다르면
 *      비밀번호 부터 다시 입력받도록 하기
 */
/**
 * Selector
 * css 나 js 코드에서 참조할수 있는 tag 요소들
 * tagName(div, p) : 여러개 있을 수 있다,
 * id(#username, #password) : 한 화면에 1개만 있어야 한다,
 * class(div.div1, button.btn) : 여러개 있을 수 있다
 */
const btnSubmit = document.querySelector("button.btn_submit");
const userName = document.querySelector("#username");
const userPswd = document.querySelector("#password");
const rePswd = document.querySelector("#re_password");
/**
 * HTML 에서 id 나 class 이름을 지을때
 * snack case 로 많이 작성한다
 * 이 이름을 JS 코드에서 변수로 선언할때는
 * 가급적 camel case 로 작성하는 것이 좋다
 */
btnSubmit?.addEventListener("click", () => {
  const txtUser = userName.value;
  const txtPswd = userPswd.value;
  const txtRePswd = rePswd.value;

  // if (username.value === "") : 보편적인 언어
  // JS 고유의 코드
  if (!txtUser) {
    alert("아이디를 입력하세요");
    userName.focus();
  } else if (!txtPswd) {
    alert("비밀번호를 입력하세요");
    userpswd.focus();
  } else if (txtPswd != txtRePswd) {
    alert("비밀번호와 비밀번호확인이 틀립니다");
    userpswd.focus();
  } else {
    // 서버로 전송하는 코드
  }
  return false;
  // return 코드는 모듈에서 많이 사용 금지 (언제 끝나는지 이해하기 힘듬)
});

// js 파일을 html 문서 어디에서든 연결하기 위한 조치
// 화면에 모든 html 구성요소가 모두 나타나면
document.addEventListener("DOMContentLoaded", () => {
  // 화면의 tag 요소를 JS 코드에서 사용하기 위하여
  // 객체에 tag 요소를 선택하여(select) 객체에 보관하기
  // inputs, inputScores 는 selectAll() 을 사용하여
  //    다수의 요소를 보관하기 위한 객체 배열
  // btnOk 는 selector()를 사용하여
  //    단일 요소를 보관하기 위한 객체
  const inputs = document.querySelectorAll("input");
  const inputScores = document.querySelectorAll("input.sc_score");
  const btnOk = document.querySelector("button.score_add");
  const tbodyScore = document.querySelector("tbody.score");

  // 성적들 데이터를 저장할 배열을 선언
  let scores = [];

  /**
   * 기능구현을 위한 요구사항
   * 1. input box 에 값을 입력하고 추가 버튼을 클릭하면
   * 2. input box 에 입력된 값(데이터)의 유효성 검사
   *        학번, 이름 : 입력이 되지 않았을때
   *                alert 띄우고 다시입력
   *        국어, 영어, 수학 : 입력이 되지 않으면 alert, 다시입력
   *            점수범위(0 ~ 100)에서 벗어나면 alert, 다시입력
   * 3. 입력된 데이터(학번, 이름, 국어, 영어, 수학 점수)를
   *        어딘가에 저장하기
   * 4. 저장된 데이터를 localStorage 에 영구 보관하기
   *        영구보관하기 : persistance 처리, 영속성 유지
   * 5. 저장된 데이터를 table 에 보이기
   * 6. 다시(새로고침) 시작했을때 localStorage 에 보관된 데이터를
   *        읽어와서 table 에 보이기
   */
  // 유효성 검사
  const scoreCheck = () => {
    // 입력된 점수의 유효성 검사 실시
    for (let i = 0; i < inputScores.length; i++) {
      const input = inputScores[i];
      /**
       * for() 반복문에 의해서 점수를 입력받는 input 만큼
       * 코드가 반복실행된다(여기에서는 3번 실행)
       * 만약 첫번째 input 값을 검사하는데
       * 1번 조건문이 실행 = 아무것도 입력되지 않았을때
       *    "점수를 입력..." alert 이 뜰 것이고
       *    실행은 input.focus() 로 점프한다
       * 1번 조건문이 실행되지 않았으면
       * 2번 조건문 검사를 하고
       *        2번 조건문이 실행 = 0 < 점수 > 100 인경우
       *        "점수 범위..." alert 이 뜰것이고
       *        실행은 input.focus() 로 점프한다
       * 1번, 2번 조건문이 모두 통과 = 점수가 정상이다
       *        else 에 있는 continue 가 실행되고
       *        다음 점수를 검사를 시도한다
       * 만약 1번, 2번 검사에서 한번이라도 문제를 찾으면
       *    input.focus(), return false 가 실행되어
       *    검사 과정을 즉시 중단한다
       *    그리고 return false 로 false 값을 돌려준다
       */
      if (!input.value) {
        // 1
        alert(`${input.placeholder} 점수를 입력하세요`);
      } else if (Number(input.value) < 0 || Number(input.value) > 100) {
        // 2
        alert(`${input.placeholder} 점수는 0 ~ 100 범위로 입력하세요`);
      } else {
        continue;
      }
      // 입력된 box 문자열을 clear 하여
      // 다시 입력을 쉽게 할수 있도록 도와주는 역활
      // input.value = "";

      // select 는 입력된 text 에 선택 block을 설정하여
      // 즉시 문자열을 입력하면 text 를 지우고 다시 입력
      // 방향키를 누르면 문자열 중간의 글자들을 수정할수 있도록
      // 하여주는 역활
      input.select();
      input.focus();
      return false;
    } // for() end
    // 코드가 여기에 다다르면 3과몽의 점수 유효성 검사가
    // 모두 정상이다
    return true;
  };

  // 입력된 데이터를 어딘가에 저장하기
  /**
   * 입력된 데이터를 어디에 저장할 것인가?
   * 1. 입력할 성적데이터는 항목이 5개이다
   * 2. 다수의 학생 성적들을 입력해야 할 것이다
   */
  const scoreInput = () => {
    /**입력된 성적을 성적들(scores) 배열에 추가
     * 학생 한 사람의 성적에는 5개의 항목(학번, 이름, 국어, 영어, 수학)이 있다
     * 5개의 항목이 하나의 묶음으로 구성되어야 할 것이기 때문에
     * 이 데이터를 객체로 묶어주야한다
     * 성적객체 = {학번, 이름, 국어, 영어, 수학} 선언
     */
    const sc_num = inputs[0].value;
    const sc_name = inputs[1].value;
    const sc_kor = Number(inputs[2].value);
    const sc_eng = Number(inputs[3].value);
    const sc_math = Number(inputs[4].value);

    // score 객체 (한사람 성적 데이터 묶음)
    const score = {
      num: sc_num,
      name: sc_name,
      kor: sc_kor,
      eng: sc_eng,
      math: sc_math,
    };

    // 점수 input 데이터를 가져와서 총점 계신
    let sc_total = 0;
    for (let i = 0; i < inputScores.length; i++) {
      const input = inputScores[i];
      sc_total += Number(input.value);
    }
    // 평균계산하기
    // 평균은 반드시 전체 총 합이 계산이 완료된 후 실행한다
    // 총점을 계산하는 for() 반복문내에서 계산하면
    // 오차가 발생할 확률이 높아진다
    let sc_avg = Math.floor(sc_total / inputScores.length);

    // score 객체에 총점과 평균 추가하기
    score.sc_total = sc_total;
    score.sc_avg = sc_avg;

    // 여기까지 만들어진 객체가 잘만들어 졌는지
    // 데이터가 정확한지 검사하기
    console.table(score);

    // scores 배열에 score 객체 추가하기
    scores.push(score);
    console.table(scores);

    // scoreInput() 함수가 끝나는 부분
    // 여기에 다다르면 score 는 소멸되고,
    // scores는 score 들을 담고 계속 유지 되고 있다
  };

  // 어딘가(scores)에 저장된 데이터를 localStorage 에 보관하기
  const scoreSave = () => {
    if (scores) {
      localStorage.setItem("kScore", JSON.stringify(scores));
    }
  };

  // 어딘가(scores)에 저장된 데이터를 table 에 보이기
  const scorePrint = () => {
    if (!scores) {
      return false;
    }
    // table 의 tbody 에 이미 추가된 모든 tr, td 요소 제거
    // tbodyScore.innerText = "";
    // tbodyScore.innerHTML = "";
    tbodyScore.textContent = "";

    // 전체 데이터(score 들) 개수 만큼 반복하기
    for (let i = 0; i < scores.length; i++) {
      const score = scores[i];
      // 전체 데이터(score 들) 개수 만큼 TR 생성하기
      const tr = document.createElement("TR");
      // score 항목들을 TD 에 담기
      let td = document.createElement("TD");
      td.textContent = score.num;
      tr.appendChild(td);

      td = document.createElement("TD");
      td.textContent = score.name;
      tr.appendChild(td);

      td = document.createElement("TD");
      td.textContent = score.kor;
      tr.appendChild(td);

      td = document.createElement("TD");
      td.textContent = score.eng;
      tr.appendChild(td);

      td = document.createElement("TD");
      td.textContent = score.math;
      tr.appendChild(td);

      td = document.createElement("TD");
      td.textContent = score.sc_total;
      tr.appendChild(td);

      td = document.createElement("TD");
      td.textContent = score.sc_avg;
      tr.appendChild(td);

      tbodyScore.appendChild(tr);
    }
  };

  // localStorage 에 보관된 데이터를 읽어와서 어딘가에 저장하기
  const scoreLoad = () => {
    const loadScore = localStorage.getItem("kScore");
    // loadScore !== ""
    if (loadScore) {
      scores = JSON.parse(loadScore);
    }
    console.log(scores);
  };

  // DOMContentLoaded 으로 실행시 ?. 으로 해야한다
  /**
   * scoreCheck() 함수는 유효성 검사가 정상으로
   * 완료되면 true 를 return 하고,
   * 그렇지 않으면 false 를 return 할 것이다 라는 것을
   * 미리 예상하고 작성하는 코드이다
   */
  btnOk?.addEventListener("click", () => {
    if (scoreCheck()) {
      scoreInput();
      scoreSave();
      scorePrint();
    }
  }); // btnAdd event end
  scoreLoad();
  scorePrint();
});

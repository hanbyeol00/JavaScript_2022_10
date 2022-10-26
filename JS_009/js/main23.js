const mainSection = document.querySelectorAll("section.main");
const btnRefresh = document.querySelector("button");

const nums = [];
const makeNums = () => {
  for (let i = 0; i < 10; i++) {
    nums[i] = Math.floor(Math.random() * 100) + 1;
  }
};
const viewNums = () => {
  mainSection[0].textContent = "";
  nums.forEach((num) => {
    const div = document.createElement("DIV");
    div.textContent = num;
    mainSection[0].appendChild(div);
  });
};

const viewNums2 = () => {
  mainSection[1].textContent = "";
  let h1 = document.createElement("H1");
  h1.textContent = "짝수";
  mainSection[1].appendChild(h1);
  nums.forEach((num) => {
    if (num % 2 == 0) {
      const div = document.createElement("DIV");
      div.textContent = num;
      mainSection[1].appendChild(div);
    }
  });
};

const viewNums1 = () => {
  mainSection[2].textContent = "";
  let h1 = document.createElement("H1");
  h1.textContent = "홀수";
  mainSection[2].appendChild(h1);
  nums.forEach((num) => {
    if (num % 2 != 0) {
      const div = document.createElement("DIV");
      div.textContent = num;
      mainSection[2].appendChild(div);
    }
  });
};
const init = () => {
  makeNums();
  viewNums();
  viewNums2();
  viewNums1();
};
init();

btnRefresh?.addEventListener("click", init);
/**
 * 변수, 객체, 함수 및 속성 이름 작명 코딩 패턴 : 이름작성 case 패턴
 * 1. 표준(lower)carmel case : myName
 * 2. Upper Carmel case : serviceV1, ScoreService. StudentService
 * 3. kebab case : my-name, ham-button, top-menu
 * 4. 헝가리 표기법 : intKor, strNation, bYes
 * 5. snack case (Underscore notation) : my_name
 * 6. Upper Case format(시스템, 전역변수 사용) : MY_PROJECT_USER_NAME
 */

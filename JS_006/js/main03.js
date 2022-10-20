const inputs = document.querySelectorAll("input");
const tbodyScore = document.querySelector("tbody.score");
const btnAdd = document.querySelector("button.add");

const scoreCheck = () => {
  const inputKor = document.querySelector("input[name='sc_kor']");
  const inputEng = document.querySelector("input[name='sc_eng']");
  const inputMath = document.querySelector("input[name='sc_math']");

  // if (!inputKor.value) {
  //   alert("국어 점수를 입력하세요");
  //   inputKor.focus();
  // } else if (Number(inputKor.value) < 0 || Number(inputKor.value) > 100) {
  //   alert("국어 점수는 0 ~ 100까지 범위에서 입력하세요");
  //   inputKor.focus();
  // } else if (!inputEng) {
  //   alert("영어 점수를 입력하세요");
  //   inputEng.focus();
  // } else if (Number(inputEng.value) < 0 || Number(inputEng.value) > 100) {
  //   alert("영어 점수는 0 ~ 100까지 범위에서 입력하세요");
  //   inputEng.focus();
  // } else if (!inputMath) {
  //   alert("수학 점수를 입력하세요");
  //   inputMath.focus();
  // } else if (Number(inputMath.value) < 0 || Number(inputMath.value) > 100) {
  //   alert("수학 점수는 0 ~ 100까지 범위에서 입력하세요");
  //   inputMath.focus();

  //   for (i = 0; i < inputs.length; i++) {
  //     const txtInput = inputs[i].value;
  //     if (inputs[i].name !== "sc_num" && inputs[i].name !== "sc_name") {
  //       if (txtInput < 0 || txtInput > 100) {
  //         alert("값이 잘못되었습니다\n 0이상 100이하의 값을 입력해주세요");
  //         inputs[2].value = "";
  //         inputs[3].value = "";
  //         inputs[4].value = "";
  //         inputs[2].focus();
  //       } else {
  //         return false;
  //       }
  //     }
  //   }

  inputs.forEach((input) => {
    const txtInput = input.value;
    if (input.name !== "sc_num" && input.name !== "sc_name") {
      if (txtInput < 0 || txtInput > 100) {
        alert("값이 잘못되었습니다\n 0이상 100이하의 값을 입력해주세요");
        input.value = "";
        input.focus();
      }
    }
  });
};

const scoreInput = () => {
  const tr = document.createElement("TR");

  // inputs.forEach((input) => {
  // const txtInput = input.value;
  // if (input.name !== "sc_num" && input.name !== "sc_name") {
  //   if (txtInput < 0 || txtInput > 100) {
  //     alert("값이 잘못되었습니다\n 0이상 100이하의 값을 입력해주세요");
  //     input.value = "";
  //     input.focus();
  //   }
  // }
  // });

  let sum = 0;
  inputs.forEach((input) => {
    const td = document.createElement("TD");
    td.textContent = input.value;
    tr.appendChild(td);

    if (input.name !== "sc_num" && input.name !== "sc_name") {
      sum += Number(input.value);
    }
  });
  let td = document.createElement("TD");
  td.textContent = sum;
  tr.appendChild(td);

  tbodyScore.appendChild(tr);
};

// btnAdd?.addEventListener("click", scoreInput)
btnAdd?.addEventListener("click", () => {
  // scoreCheck 함수를 실행하여 return 값이 true 인 경우
  // scoreInput 함수를 실행하여 데이터를 추가하라
  if (scoreCheck()) {
    scoreInput();
  }
});

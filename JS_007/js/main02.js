const inputs = document.querySelectorAll("input");
const tbodyAddr = document.querySelector("tbody.addr");
const btnAdd = document.querySelector("button.add");

let addrList = [];
const addrLoad = () => {
  const strAddr = localStorage.getItem("myAddr");

  addrList = JSON.parse(strAddr);
  console.log("가져온 데이터 확인");
  console.table(addrList);
  if (!addrList) {
    addrList = [];
    return false;
  }
  for (i = 0; i < addrList.length; i++) {
    const tr = document.createElement("TR");
    let td = document.createElement("TD");
    td.textContent = addrList[i].num;
    tr.appendChild(td);

    td = document.createElement("TD");
    td.textContent = addrList[i].name;
    tr.appendChild(td);

    td = document.createElement("TD");
    td.textContent = addrList[i].kor;
    tr.appendChild(td);

    td = document.createElement("TD");
    td.textContent = addrList[i].eng;
    tr.appendChild(td);

    td = document.createElement("TD");
    td.textContent = addrList[i].math;
    tr.appendChild(td);

    td = document.createElement("TD");
    td.textContent = addrList[i].sum;
    tr.appendChild(td);

    td = document.createElement("TD");
    td.textContent = addrList[i].dvs;
    tr.appendChild(td);

    tbodyAddr.appendChild(tr);
  }
};

addrLoad();

const addrCheck = () => {
  for (let i = 0; i < inputs.length; i++) {
    const input = inputs[i];
    const holderText = inputs[i].placeholder;
    if (!input.value) {
      alert(`${holderText}를 입력하세요`);
      input.value = "";
      input.focus();
      return false;
    }
  }
  for (let i = 2; i < inputs.length; i++) {
    const input = inputs[i];
    const holderText = inputs[i].placeholder;
    if (!input.value) {
      alert(`${input.placeholder} 를(을) 입력하세요`);
    } else if (Number(input.value) < 0 || Number(input.value) > 100) {
      alert(`${holderText}점수는 0 ~ 100 까지 입력하세요`);
    } else if (!Number(input.value)) {
      alert(`${holderText}점수는 숫자로만 입력해주세요`);
    } else {
      input.focus();
      return false;
    }
  }
  return true;
};

const addrInput = () => {
  const tr = document.createElement("TR");
  let sum = 0;
  inputs.forEach((input) => {
    const td = document.createElement("TD");
    td.textContent = input.value;
    tr.appendChild(td);
    if (input.name !== "num" && input.name !== "name") {
      sum += Number(input.value);
    }
  });
  let td = document.createElement("TD");
  td.textContent = sum;
  tr.appendChild(td);
  let tt = document.createElement("TD");
  tt.textContent = Math.floor(sum / 3);
  tr.appendChild(tt);

  tbodyAddr.appendChild(tr);

  const addr = {
    num: inputs[0].value,
    name: inputs[1].value,
    kor: inputs[2].value,
    eng: inputs[3].value,
    math: inputs[4].value,
    sum: sum,
    dvs: sum / 3,
  };
  addrList.push(addr);

  if (!addrList) {
    addrList = [];
    return false;
  }

  localStorage.setItem("myAddr", JSON.stringify(addrList));
};

btnAdd?.addEventListener("click", () => {
  if (addrCheck()) {
    addrInput();
  }
});

/**
 * 변수 scope
 * - 변수, 객체, 함수 등의
 *  선언된 위치에 따라 변수에 접근(읽기, 쓰기, 저장)이 제한적이다
 * - for() 명령문에 선언된 변수 i와
 *  for() 블럭({}) 에 선언된 sum 은
 *  for() 명령문({})이 끝나면
 *  소멸되어 사용할 수 없다
 *
 * - for() 명령문 앞에 선언된 sum 은
 *  for() 명령이 종료 되어도
 *  값을 유지 하고 있다
 *  console.log(sum)에 의해
 *  값 확인 가능
 */

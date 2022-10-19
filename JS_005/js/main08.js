const inputs = document.querySelectorAll("input");
const btnOk = document.querySelector("button.btn_ok");
const spans = document.querySelectorAll("span");

const index = {
  name: 0,
  addr: 1,
  tel: 2,
};

btnOk?.addEventListener("click", () => {
  // spans[0].innerText = inputs[0].value;
  // spans[index.name].innerText = inputs[index.name].value;

  // index 객체의 name 속성 값이 얼마냐
  // index 객체의 name 속성에 저장된 값이 얼마냐
  console.log(index.name);
  console.log("name", index["name"]);

  // index 객체의 addr 속성의 값이 얼마냐
  console.log("addr", index["addr"]);

  // inputs box 0 번(첫번째) tag 의 name 변수 이름을 가져오기
  const txtname = inputs[0].name;
  console.log(txtname);
  console.log(index[txtname]);

  // input box 의 name 변수 이름으로 index 객체로 부터 위치값을 찾고
  // 그 위치값으로 각각 요소를 매칭한다
  spans[index[txtname]].innerText = inputs[index[txtname]].value;

  // for() 반복문을 이용하여 input 전체 내용을 span 에 모두 보여주기
  for (let i = 0; i < inputs.length; i++) {
    const txtName = inputs[i].name;

    spans[index[txtName]].innerText = inputs[index[txtName]].value;
  }
});

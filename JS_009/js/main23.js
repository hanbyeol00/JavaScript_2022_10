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

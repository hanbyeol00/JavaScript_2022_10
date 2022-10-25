const divs = document.querySelectorAll("div.div1");
const btn = document.querySelector("button.btn");
const nums = [];
const radNum = () => {
  for (let i = 0; i < 10; i++) {
    const radNum = Math.random() * 100 + 1;
    const intNum = Math.floor(radNum);
    nums[i] = intNum;
  }
  for (let j = 0; j < 10; j++) {
    divs[j].innerText = nums[j];
  }
};
radNum();
btn.addEventListener("click", radNum);

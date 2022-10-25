const h1 = document.querySelector("h1");
const nums = []; // length 가 0 인 배열
for (let i = 0; i < 10; i++) {
  const radNum = Math.random() * 100 + 1;
  const intNum = Math.floor(radNum);
  nums[i] = intNum;
}

nums.forEach((num) => {
  document.writeln(num);
});

nums.forEach((num) => {
  // h1.textContent = ht.textContent + num
  h1.textContent += `${num} `;
});

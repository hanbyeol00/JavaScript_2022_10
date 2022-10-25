const num = [];
for (let i = 0; i < 10; i++) {
  num[i] = Math.floor(Math.random() * 100) + 1;
}
num.forEach((num) => {
  document.writeln(num);
});

document.writeln("<br/>");

for (let i = 0; i < 10; i++) {
  ranNum = Math.floor(Math.random() * 100) + 1;
  num[i] = ranNum;
}
num.forEach((num) => {
  document.writeln(num);
});

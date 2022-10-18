let num1 = 0;
console.log(num1);

// for 은 코드를 반복적으로 사용할때 사용됨
// 무한반복 멈출땐 컨트롤 + C

// if(num1 < 10) 이 true 인 동안 {} 의 코드가 반복 실행
for (; num1 < 10; ) {
  console.log(num1++);
}

// for() 실행될때 최초 한번 num1 변수를 0으로 clear
// num1 의 변수에 어떤 값이 담겨 있을지 모르기 때문에
// clear 를 수행하고 시작한다
// if(num1 < 10) 이 true 인 동안 {} 의 코드가 반복 실행
for (num1 = 0; num1 < 10; ) {
  console.log(num1++);
}

console.log("");
console.log("");
/**
 * 1. num1 변수를 0으로 clear(초기화), 즉 0부터 시작하겠다
 * 2. if(num1 < 10) 을 실행하여 true 이면
 * 3. console.log(num1) 을 실행
 * 4. num1++ 를 실행하여 num1 값을 1 증가
 */
for (num1 = 0; num1 < 10; num1++) {
  console.log(num1);
}

console.log("");
console.log("");

for (num1 = 0; num1 < 10; num1 += 2) {
  console.log(num1);
}
console.log("");
console.log("");

for (let i = 0; i < 10; i++) {
  const n = i + 1;
  console.log(n);
}
console.log("");
console.log("");
let sum = 0;
for (let i = 0; i < 10; i++) {
  let n = i + 1;
  sum += n; // 1 + 2 + 3 + ... + 10
}
console.log("합계", sum);

console.log("");
console.log("");

// 0 + 2 + 4 + 6 + 8의 덧셈 계산
sum = 0;
for (let i = 0; i < 10; i += 2) {
  sum += i;
}
console.log("합계", sum);
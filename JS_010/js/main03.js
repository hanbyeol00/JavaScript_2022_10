"use strict";
document.addEventListener("DOMContentLoaded", () => {
  /**
   * 한개의 배열에
   * 숫자형 데이터와 문자열형 데이터를 같이 저장하였다
   * 이러한 방식의 언어는 JS 만 된다.
   * 이러한 현상 때문에 JS 의 배열을 배열이 아니다 라고
   *        주장하기도 한다
   * 정리하면 JS의 배열은 요소 이름이 없는 객체다
   */
  const 배열 = [1, 2, 3, 4, 5, "대한민국", "우리나라"];
  console.log(배열);

  const 객체 = { 이름: "홍길동", 나이: 33, 주소: "서울특별시" };
  console.log(객체);

  // 배열의 5번 요소를 console 에 출력
  console.log("5번요소:", 배열[5]);

  // 객체의 이름 속성값(요소값)을 console 에 출력
  console.log(객체.이름);
  console.log(객체["이름"]);

  // 배열의 끝에 데이터 추가하기
  배열.push("끝에 추가");
  배열[배열.length] = "여기도 추가";

  // 배열의 맨 앞에 데이터 추가하기
  배열.unshift("처음에 추가");

  // index 위치의 데이터 변경
  배열[3] = 100; // 3번 index 의 값 변경

  // 배열을 잘라서 복사하기
  // 베열.slice(시작위치, 종료위치)
  // 시작위치 앞에서 잘라서 버리고
  // 종료위치 앞에서 잘라서 추출하기
  // 1,2,3,4 번 요소만 추출한다
  const 복사배열 = 배열.slice(1, 5);
  console.log(복사배열);

  // 중간에 추가하기
  const 새배열 = 배열.splice(2, 1, "우리나라");
  console.log(배열);
  console.log(새배열);
});

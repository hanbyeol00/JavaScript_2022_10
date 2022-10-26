// 선언되지 않은 변수에 값을 저장하려고 할때
// 경고 또는 오류를 console 에 보여주도록 하는 설정
"use strict";
document.addEventListener("DOMContentLoaded", () => {
  let num1 = 10;
  // num1 이라는 변수에 20을 저장했는데
  // type 오류로 엉뚱한 변수에 값을 저장했다
  // 하지만 아무런 오류, 경고가 나타나지 않았다
  num1 = 20;
  console.log(num1);

  /**
   * 변수를 선언하는 var 키워드
   *    변수의 scope 문제
   *    변수의 재 정의 문제
   * 등이 있기 때문에 가급적 사용하지 말라는 키워드
   */
  var name1 = "홍길동";
  var name1 = 30;
  var name1 = "이몽룡";

  // 변수, 객체, 함수를 생성하는 키워드
  // const : 한번 데이터를 저장하면 변경할수 없다
  // let : 계속해서 값을 변경 저장할 필요가 있는 변수
  /**
   * 객체, 함수, 배열을 선언할때는 가급적 const 키워드를
   * 사용하는 것이 좋다
   * const 키워드로 선언된 객체, 함수, 배열은
   * 자체를 변경하는 것은 금지된다
   *
   * const 객체 = {이름:"홍길동"} 처럼 객체를 만들고
   * const 객체 = {주소:"서울특별시"} 와 같이 다시 객체를
   *    만들어 같은 이름으로 선언할 수 없다
   *
   * 만약
   * const 객체 = {이름:"홍길동", 나이:33} 처럼 객체를 만들고
   * 객채.이름 = "이몽룡"과 같이 객체의 속성을 변경하는 것은
   *    객체 자체를 변경하는 것 아니다
   *    => 참조변수의 성질
   *
   * const 배열 = [1, 2, 3] 처럼 배열을 만들고
   * 배열[3] = 100
   * 배열.push(200) 와 같이 배열에 값을 추가하거나
   *    요소의 데이터를 변경하는 것도 배열 자체를
   *    변경하는 것이 아니다
   */
  const constVarriable = 0;
  const func1 = () => {};
  const arry = [];

  let letVarriabel = 0;
  let func2 = () => {};
});

/*
# 문제20 : 몫과 나머지

공백으로 구분하여 두 숫자가 주어집니다.
두번째 숫자로 첫번째 숫자를 나누었을 때 **그 몫과 나머지를 공백으로 구분하여 출력하세요.**

**입출력**

입력 : 10 2
출력 : 5 0
*/

//parseInt() 함수는 문자열 인자를 파싱하여 특정 진수(수의 진법 체계에서 기준이 되는 값)의 정수를 반환
//Math.trunc()는 버림. 함수는 주어진 값의 소수부분을 제거하고 숫자의 정수부분을 반환,  음수에서도 정확하게 동작한다
// Math.floor는 내림으로 동작하기 때문에 음수의 나눗셈 예를들어 -10/3에서 -4을 반환
const [num1, num2] = prompt("숫자 두개를 입력해주세요")
  .split(" ")
  .map((ele) => parseInt(ele));
console.log(`${Math.trunc(num1 / num2)} ${num1 % num2}`);

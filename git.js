/* 입력 “숫자 배열 [3, 7, 12, 5, 20]
 출력: 10보다 큰 숫자
 조건: 새로운 배열 
 
 2 단계
 입력 배열: numbers
 결과 배열: result

 3단계: 흐름 쪼개기
1️⃣ 배열 선언
2️⃣ 조건 처리: filter 사용
3️⃣ 출력
 */

const arr = [3, 7, 12, 5, 20]
const result = arr.filter(a => a>10)
console.log(result)
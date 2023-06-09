// 데이터 타입
// runtime : run하는 time
// 코드를 작성할 때가 아니라, 실제 코드가 실행될 때
// -> 옆에 터미널에 코드가 실행될 때
// 그 때, 데이터 타입이 결정된다.
// java : string a = "abc"
// const a = "abc"

// 1. 숫자 
// 1-1 정수

// let num1 = 10
let num1 = "10"
// "" 넣지 않을 경우 number 타입 "" 넣을 경우 string 타입
console.log(num1)
console.log(typeof num1)
// console.log(typeof(num1))
// typeof : 타입 확인

// 1-2 실수(float)
let num2 = 3.14
console.log(num2)
console.log(typeof num2)

// 1-3 지수(Exp)
let num3 = 2.5e5 // 2.5 x 10^5
console.log(num3)
console.log(typeof num3)

// 1-4
let num4 = "hello" / 2
console.log(num4)
// NaN : Not a Number

// 1-5 Infinity(무한대)
let num5 = 1 / 0
console.log(num5)
console.log(typeof num5)

// 1-6 -Infinity(무한대)
let num6 = -1 / 0
console.log(num6)
console.log(typeof num6)
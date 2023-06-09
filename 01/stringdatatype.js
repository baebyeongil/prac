// 2. 문자 : string(문자열 = 문자의 나열)
// ' ' = " " 
let str = "hello"
console.log(str)
console.log(typeof str)
// 2-1 문자열 길이 확인 ( length )
console.log(str.length)

// 2-2 문자열 결합
let str1 = "hello"
let str2 = "world"

console.log( str1 + str2 )

let result = str1.concat(str2) 

console.log(result)

// 2-3 문자열 자르기
let str3 = "hello, world"
console.log(str3.substr(7, 5))
// substr(시작열, 시작열부터 몇번째까지)
console.log(str3.slice(7, 12))
// slice(시작열, 몇번째열까지)

// 2-4 문자열 검색
let str4 = "hello, world"
console.log(str4.search("world"))
// serch("해당문자열이 몇번째부터 시작되는지")

// 2-5 문자열 대체
let str5 = "hello, world"
let result1 = str5.replace("world", "JS")
console.log(result1)

// 2-6 문자열 분할
let str6 = "a, b, c"
let result2 = str6.split(",")
console.log(result2)
// split("해당 문자를 기준으로 잘라 배열의 형태로 담는다.")
// 변수 , 상수
// 메모리에 저장한다. 읽어들여서 재사용한다. > 변수

// 변수의 5가지 개념

// 변수 이름 : 저장된 값의 고유 이름
// 변수 값 : 변수에 저장된 값
// 변수 할당 : 변수에 값을 저장하는 행위 ( 변수에 데이터 저장 )
// 변수 선언 : 변수를 사용하기 위해 컴퓨터에 알리는 행위 ( 변수 생성 )
// 변수 참조 : 변수에 할당된 값을 읽어오는 것 ( 변수를 사용 )

var myvar = "hello"

console.log(myvar)

// 변수 이름 : myvar , 변수 값 : hello , 변수 할당 : var myvar = "hello" , 변수 선언 : var myvar , 변수 참조 : console.log(myvar)


// 변수를 선언할 수 있는 3가지 방법 : var, let, const

// 1. var

var var1 = "hello1"
// var var1 = "test1"
var1 = "good1"
console.log(var1)

// var 재선언 가능
// var 재할당 가능

var var2
var2 = 3
// var var2 = 3

// 2. let

let let1 = "hello2"
// let let1 = "test2"
let1 = "good2"
console.log(let1)

// let 재선언 불가능
// var 재할당 가능

// 3. const

const const1 = "hello3"
// const const1 = "test3"
// const1 = "good3"
console.log(const1)

// const 재선언 불가능
// const 재할당 불가능
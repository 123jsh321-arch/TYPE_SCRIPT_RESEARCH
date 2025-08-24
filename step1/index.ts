// 1. 변수(variable)
// => 변하는 수(값, 데이터)
// 형태] let 변수명 = 초기화 값:
// Hello World 라는 걸 출력해보기!

let myFirstVar = "Hello World";

console.log(myFirstVar);

// 변하는 수 라고 했음.
// 내가 선언한 변수의 값을 언제든 바끌 수 있음.
myFirstVar = "Next Hello World";
console.log(myFirstVar);

// Typescript에서 원하는 변수는 이게 이니에요.
// 타입을 명시하라는거..! <- 이게 중요
let value: string = "hello Ts";
console.log(value);

let num: number = 10;
//num = "20"; Error ! 왜?  문자열을 넣으려고 했기 때문에!
num = 20;

let bool: boolean = true;
//bool = 20; Error! 왜? 논리형 타입에다가 정수를 넣으려고 해서!

//let -> const 로 바꾸는 경우!
//상수 : 변하지 않는 수(데이터)
// 통상적으로 const는 모두 대문자로 선언한다.

const S: string = "Hello const";
// S = "next const"; Error! 절대 변하지 않는다!
interface User {
    age: number;
    name: string;
}
// 누구나 User라는 인터페이스를 쓰게 되면 
// 항상 동일한 규칙으로 User를 쓰겠다라는 
// 상호간의 약속을 하는 것이다.

// 변수에 인터페이스 활용
// seho라는 변수에 User 타입 선언
var seho: User = {
    age: 33,
    name: '세호'
};

// 함수에 인터페이스 활용
function getUser(user: User): void{
    console.log(user);
}
// getUser라는 함수는 항상 User라는 
// 인터페이스의 형식을 따르는 
// 특정 형식만 받겠다고 선언하는 것

const capt = {
    name: '캡틴',
    age: 100
}

getUser(capt);
// capt이라는 변수는 인터페이스 User의 형식에 맞지않기 때문에 에러가 발생함 (name만 있을 시)

// 함수의 스펙(구조)에 인터페이스를 활용
interface SumFunction {
    (a: number, b: number): number;
}
// 2개의 파라미터 a,b를 가지며, 모두 number 타입
// return 타입 또한 number 타입

let sum : SumFunction; // 변수 sum에 인터페이스 SumFunction 타입 선언
sum = function(a: number, b: number): number {
    return a + b;
}

// 인덱싱
interface StringArray {
    [index: number]: string
    // index는 숫자 타입이며, 해당 index로 접근했을 때 string 값이 return됨
}

var arr: StringArray = ['a', 'b', 'c'];
// arr[0] = 10;

// 딕셔너리 패턴 (도대체 뭔 소리 ??????)
interface StringRegexDictionary {
    // 규칙
    // 속성 key는 string 타입, value는 정규표현식 RegExp 타입
    [key: string]: RegExp
}

var obj: StringRegexDictionary = {
    // sth: /abc/, 
    cssFile: /\.css$/, // "css"로 끝나는 문자열을 찾기 위한 정규 표현식
    jsFile: /\.js$/ // "js"로 끝나는 문자열을 찾기 위한 정규 표현식
    /*
    / : 정규 표현식의 시작과 끝을 나타내는 구분자
    \ : 이스케이프 문자로, 특수한 의미를 갖는 문자 '.'를 문자 그대로 해석
    . : 임의의 한 문자를 의미하지만, 이스케이프 문자 \와 함께 사용되어
        . 문자 자체를 나타냄
    css : "css" 문자열을 정확히 나타냄
    $ : 문자열의 끝을 의미
    */
}
obj['cssFile'] = /abc/;

Object.keys(obj).forEach(function(value) {

})

// 인터페이스 확장
// interface Person {
//     name: string;
//     age: number;
// }

// 인터페이스 확장 시 상속받은 인터페이스의 규칙도 따라야 함
// interface Developer extends Person{
//     language: string;
// }

// var captain: Developer = {
//     language: 'hi',
//     age: 100,
//     name: '캡틴'
// }
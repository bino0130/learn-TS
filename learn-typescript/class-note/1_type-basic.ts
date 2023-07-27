// JS 문자열 선언
// var str = 'hello';

// TS 문자열 선언
let str: string = 'hello'; // 변수의 오른쪽에 : 타입명을 적는다

// TS 숫자
let num: number = 10;

// TS 배열
// let arr: Array<number> = [1,2,3];
let heroes: Array<string> = ['Capt', 'Thor', 'Hulk'];
let items: number[] = [1,2,3];

// TS 튜플 : 길이와 타입이 고정된 배열
// 자바스크립트에서는 지원하지 않지만, 배열타입을 보다 특수한 형태로 사용하고자 만들어진 타입
// []안에 순서대로 입력받고자 하는 데이터의 타입을 입력한다.
let address : [string, number] = ['gangnam', 100];

// TS 객체
// let obj: object = {};
// 객체의 특정 속성과 해당 속성의 값까지 정의하고싶다면
// let person: object = { 이런식으로 선언도 가능하지만
//     name: 'capt',
//     age: 100
// }; 
let person: {name: string, age: number} = {
    name: 'thor',
    age: 1000
}; // 이런식으로 구체적인 변수의 타입 설정도 가능하다

// TS 진위값
let show: boolean = true;
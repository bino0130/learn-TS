// 인터페이스 : 반복되는 여러개의 타입들이 있을 때,
// 그 타입을 인터페이스로 정의해놓고 데이터 타입을
// 인터페이스 이름으로 설정해서 코드를 좀 더 편리하게 작성할 수 있음

// User라는 이름의 interface 생성
interface User {
    age : number;
    name : string;
}

// 변수에 인터페이스 활용
var seho: User = {
    age: 33,
    name: '세호'
}

// 함수에 인터페이스 활용
function getUser(user: User) {
    console.log(user);
}

getUser({
    age: 10,
    name: '캡틴'
});

const capt= {
    age: 20,
    name: '캡'
}
getUser(capt);

// 함수의 스펙(구조)에 인터페이스 활용
interface SumFunction {
    // 괄호를 쳐서 함수 인자 정의
    (a:number, b:number): number;
}

var sum: SumFunction;
sum = function(c: number, d: number): number {
    return c + d;
}

// 인덱싱
interface StringArray {
    [index: number]: string;
}

var arr: StringArray = ['a', 'b', 'c'];
arr[0]; // 'a'
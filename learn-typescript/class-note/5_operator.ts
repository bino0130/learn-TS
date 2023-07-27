function logMessage(value: string) {
    console.log(value);
}
logMessage('hello');
// logMessage(100); 100은 string이 아니므로 에러발생

// 유니온 타입 | : or연산자 |을 사용해서
// 1개 이상의 타입을 만들 수 있게 해준다.
function printMessage(value: string | number) {
    console.log(value);
}
printMessage('hello');
printMessage(100);
// printMessage 함수는 인자의 타입으로 string, number 둘 다
// 받을 수 있기 때문에 에러가 발생하지 않는다.

/* 유니온 타입의 장점 */
var siu: string | number | boolean;
function sendMessage (value: string | number) {
    if (typeof value === 'number') {
        value.toFixed();
        // if문에서 유니온 타입 밸류의 속성을 number라고 지정 시
        // 타입스크립트는 value의 속성이 number라고 추론하고
        // number 타입의 메서드를 자동완성 리스트에 출력 
    } else if (typeof value === 'string') {
        value.toString();
        // value 타입을 string으로 지정하면
        // 자동완성에서 string 타입의 메서드 출력
    }
    throw new TypeError('value must be string or number');
    // string과 number가 아닌 타입에 대해 에러를 발생시킬 수 있음
}
sendMessage('hello');
sendMessage(100);
// value는 string, number 2가지 타입을 지원한다.

/* 유니온 타입의 특징 */
interface Developer {
    name: string;
    skill: string;
}

// interface Person {
//     name: string;
//     age: number;
// }

// function askSomeone (someone: Developer | Person) {
//     someone.name = "Tom";
// }

// var intersection: string & number & boolean;
// 인터페이스같은 특정 구조체를 유니온 타입으로 사용하면
// name처럼 공통된 부분만 사용할 수 있음

/* 인터섹션 타입 (& 연산자 사용) */
// function askSomeone (someone: Developer & Person) {
//     someone.age;
//     someone.name;
//     someone.skill;
// }
// 인터섹션 타입을 사용한 someone은
// Developer와 Person의 특징을 모두 갖고 있다.

/* 유니온 타입과 인터섹션 타입의 차이점 */

// // 유니온 타입 askSomeone 호출
// askSomeone({name: '디벨로퍼', skill: '웹 개발'});
// askSomeone({name: '캡틴', age: 100})

// 인터섹션 타입 askSomeone 호출
// askSomeone({
//     name: '디벨로퍼', 
//     skill: '웹 개발', 
//     age: 30
// })

const vari = {
    name: '사업가',
    skill: 'ceo',
    age: 40
}
// askSomeone(vari);

// 유니온 타입은 함수 내부에서 타입 가드를 쳐야하는 작업이 있지만
// 어떤 타입을 사용할 지 사용자 임의로 선택해서 사용할 수 있다.

// 인터섹션 타입은 두 타입을 포함하는 새로운 타입을 사용하게 된다.
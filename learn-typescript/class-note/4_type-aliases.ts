// interface Person {
//         name: string;
//         age: number;
// }

// type Person = {
//     name: string;
//     age: number;
// }

// var seho: Person = {
//     name: '세호',
//     age: 30
// }
// 인터페이스로 타입을 지정 시 VSCode 프리뷰로 인터페이스
// 이름 부분만 볼 수 있지만, type 별칭 코드로 타입을 지정 시
// VSCode 프리뷰로  디테일한 부분 (ex: name : '세호', age: 30)
// 을 볼 수 있다.

type MyString = string;
// var str: MyString = 'hellp';
// 타입을 지정할 수 있는 곳에는 모두 별칭 코드를 붙일 수 있다.

type Todo = {id: number; title: string; done: boolean};
function getTodo(todo: Todo) {

}
// 할 일 관리 어플리케이션에서 사용한 인터페이스 Todo를
// 타입 형식으로 변경해서 사용할 수도 있다.

// 인터페이스는 확장이 가능하지만, 타입은 확장이 불가능하다.
// 공식문서에서는 타입보단 인터페이스 사용을 권장한다.

// 타입 별칭 : 특정 타입을 가리키는 별칭을 제공한다.
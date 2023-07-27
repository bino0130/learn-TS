// 함수의 파라미터에 타입을 정의하는 방식
// function sum(a: number, b: number) {
//     return a + b;
// }
// sum(10, 20);

// 함수의 반환 값에 타입을 정의하는 방식
function add(): number {
    return 10; // 만약 return 값이 없다면 number 빨간줄
}

// 함수에 타입을 정의하는 방식
// function sum(a: number, b: number): number {
//     return a + b;
// }

sum(10, 20) // 인자 개수를 정확히 맞추지 않고 입력 시 에러 발생

// 함수의 옵셔널 파라미터
function log(a: string, b?: string) {

}
log('hello world'); 
// 파라미터 뒤에 ?를 붙이면 해당 값은 함수 호출 시
// 따로 입력하지 않아도 에러 발생 X
log('hello ts', 'abc');
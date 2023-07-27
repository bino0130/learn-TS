class Person {
    // 타입스크립트 클래스는 클래스 최상단에
    // 변수 이름: 타입 작성
    private name: string;
    public age: number;
    readonly log: string;
    // private, public 등으로 변수의 접근 범위 지정

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
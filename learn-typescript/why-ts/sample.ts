function add(a: number, b: number): number {
    return a + b;
}
add (10, 20); // 빨간 줄로 에러 사전방지 가능

var result = add(10,20);
result.toLocaleString(); // VSCode IntelliSense = 제공하는 api 자동완성 가능
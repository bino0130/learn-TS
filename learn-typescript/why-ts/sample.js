function sum(a,b) {
    return a + b;
}
sum (10, '20'); // -> 10 + '20' = 1020 (둘 다 문자화)

// var result = sum(10, '20');
// result.tolocalestring(); // js는 자동완성 안됨

// @ts-check

/**
 * 
 * @param {number} a 첫번째 숫자
 * @param {number} b 두번째 숫자
 */
function sum(a,b) {
    return a + b;
}
sum(10, '20');
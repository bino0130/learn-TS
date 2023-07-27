/* enum : 특정 값들의 집합을 의미하는 자료형 */
enum Shoes { // 숫자형 enum
    Nike,
    Adidas
}

var myShoes = Shoes.Nike;
console.log(myShoes);

// enum을 썼을 때, 별도의 값을 지정하지 않으면
// 숫자형 enum으로 취급한다. Shoes의 경우 Nike는 0, Adidas는 1이다.
// 위에서 밑으로 갈수록 index처럼 0에서 시작해서 1씩 증가한다.

enum Brand { // 문자형 enum
    Nike = '나이키',
    Adidas = '아디다스'
}
var myBrand = Brand.Adidas;
console.log(myBrand);

// 예제
enum Answer {
    Yes = 'Y',
    No = 'N'
}

function askQuestion(answer: Answer) {
    if (answer === Answer.Yes) {
        console.log('정답입니다');
    } else if (answer === Answer.No) {
        console.log('오답입니다');
    }
}
askQuestion(Answer.Yes);
// askQuestion('예스');
// askQuestion('y');
// askQuestion('Yes');
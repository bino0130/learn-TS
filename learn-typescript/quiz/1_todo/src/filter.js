// filter 함수 예시
let arr = [
    {gender : 'male', name : 'john'},
    {gender : 'female', name: 'sarah'},
    {gender: 'male', name: 'bone'}
]

// filter의 기능 : 특정 조건에 해당하는 값만 걸러내는 함수

let filtered = arr.filter(function(item) {
    if (item.gender === 'female') {
        return item;
    }
});
console.log(filtered);
/**
 * 첫번째 사례
 */

function swap<T, U>(a: T, b: U) {
  return [b, a];
}

const [a, b] = swap("1", 2);
// 만약 그냥 T만 썻으면, swap 으로 들어가는 인수의 타입이 서로 달라서 충돌이발생한다.
// 필요한 상황에서는 여러개 추가해서 사용 가능하다!

/**
 * 두번째 사례
 */

function returnFirstValue<T>(data: T[]) {
  // 매개변수에 배열 표시를 안해주면, unknown에 '0'의 형식을 할당할수 없다 나온다.
  return data[0];
}

let num = returnFirstValue([0, 1, 2]);
// 0

function returnSecondValue<T>(data: [T, ...unknown[]]) {
  return data[0];
}
// 첫번째 타입은 T지만 나머지는 알필요 없어서 unknown
let str = returnSecondValue([1, "hello", "mynameis"]);
// 'hello'

/**
 * 세번째 사례
 */

function getLength<T extends { length: number }>(data: T) {
  // 당연히 T 형식에는 length 가 없다,
  // extends 설명, 해당 속성에 length: number 인 속성만 가능하도록
  return data.length;
}

let var1 = getLength([1, 2, 3]); // 3

let var2 = getLength("12345"); // 5

let var3 = getLength({ length: 10 }); //10

// let var4 = getLength(10); 해당 10 number 타입은 legnth가 없다.

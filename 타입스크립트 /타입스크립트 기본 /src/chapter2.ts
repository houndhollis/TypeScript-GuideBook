// 배열 2가지 방법이 있다.
let numArr: number[] = [1, 2, 3];

let strArr: string[] = ["a", "b", "c"];

let boolArr: Array<boolean> = [true, false];

// 배열에 들어가는 요소들의 타입이 다양할 경우
let multiArr1: (number | string)[] = [1, "a"];
let multiArr2: Array<number | string> = [1, "a"];

// 다차원 배열의 타입을 정의하는 방법
let doubleArr: number[][] = [
  [1, 2, 3],
  [4, 5],
];

// 튜플 ts에서만 존재 * push pop 사용시 에러발생하지 않음,
// 길이와 타입이 고정된 배열,
let tup1: [number, number] = [1, 2];

let tup2: [number, string, boolean] = [1, "2", true];

const users: [string, number][] = [
  ["a", 1],
  ["b", 2],
  // [3, "c"],
];
// 위에 같은 경우 튜플을 사용하기 좋다
// 순서를 지키는것이 중요할때 값을 잘못 넣는거를 방지 할 수 있다.

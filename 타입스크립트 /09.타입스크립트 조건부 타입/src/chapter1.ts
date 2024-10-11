/**
 * 조건부 타입
 */

type A = number extends string ? string : number;
// 서브타입 관계가 아니기 때문에 거짓임으로, number 타입은 number 이다.

type ObjectA = {
  a: number;
};

type ObjectB = {
  a: number;
  b: number;
};

type B = ObjectB extends ObjectA ? number : string;
// Object A 가 슈퍼타입 임으로, 참이된다.

/**
 *  제네릭과 조건부 타입
 */

// T = number -> string
// T = string -> number

type StringNumberSwith<T> = T extends number ? string : number;

let varA: StringNumberSwith<number>;
// varA는  number -> string
let varB: StringNumberSwith<string>;

function removeSpaces<T>(text: T): T extends string ? string : undefined;
function removeSpaces<T>(text: any) {
  if (typeof text === "string") {
    // 타입 변수 T도 함수 내부에서는 unknow 상태이기에 알수가 없다,
    // 그래서 오버로드 시그니처를 만들어서 구현부 매개변수 타입만 정의해주면 된다.
    return text.replaceAll(" ", "");
  } else {
    return undefined;
  }
}

let result = removeSpaces("안녕 나는 영웅");
result.toUpperCase(); // 여기서 문제가 생긴다.

let result2 = removeSpaces(undefined);

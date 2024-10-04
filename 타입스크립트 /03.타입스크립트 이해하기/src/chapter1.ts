let num2: 10 = 10;
let num1: number = 10;

// num2 = num1; // 더큰 타입에 값을 작은 타입에 넣을순 없다.

// 위에 처럼 작은 타입에다가 큰 타입을 넣을려고 하는것을 "다운 캐스팅" 이고 반대면 "업 캐스팅"이다

/* 
 Unknown 타입
*/

function unknownExam() {
  let a: unknown = 1;
  let b: unknown = "hello";
  let c: unknown = true;
  let d: unknown = null;
  let e: unknown = undefined;

  let unknownVar: unknown;
  // let num: number = unknownVar;
  // let str: string = unknownVar;
  // 다운 캐스팅은 불가능 하다 / 상단 에러 주석
}

/**
 * Never 타입 모든 집합의 부분집합 서브타입
 */

function neverExam() {
  function neverFunc(): never {
    while (true) {}
  }

  let num: number = neverFunc();
  let str: string = neverFunc();
  // 가능한 이유 전부다 업 캐스팅이기 때문이다, 반대로는 불가능
}

/**
 * Void
 */

function voidExam() {
  function voidFunc(): void {
    console.log("hi");
    return undefined;
  }

  let voidVar: void = undefined;
}

/**
 * any 타입 계층 구조 무시 , never 만 빼고
 */

function anyExam() {
  let unknownVar: unknown;
  let anyVar: any;
  let undefinedVar: undefined;
  let neverVar: never;

  anyVar = unknownVar; // 다운 캐스팅이지만 가능
  undefinedVar = anyVar; // 다운 캐스팅 가능
  // neverVar = anyVar // 여기는 불가능
}
